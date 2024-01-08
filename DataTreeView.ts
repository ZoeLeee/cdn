import { Group } from "konva/lib/Group";
import { Layer } from "konva/lib/Layer";
import { Shape } from "konva/lib/Shape";
import { Stage } from "konva/lib/Stage";
import { Line } from "konva/lib/shapes/Line";
import { Path } from "konva/lib/shapes/Path";
import { Rect } from "konva/lib/shapes/Rect";
import { Text } from "konva/lib/shapes/Text";

import { Observable } from "@hc/core";
import {
  Application,
  BaseNode,
  CollectionRecord,
  VecUtil,
  traverseNode,
} from "@hc/engine2d";

import { clamp, typeGuardDefined } from "@haichuang/utils";

const itemHeight = 30;
const padding = 8;
const LEFT_SPACING = 10;
const SCROLL_BAR_WIDTH = 10;
export const ROOT_ID = 0;
export const UN_NAMED = "未命名";

type NodeModel<T = unknown> = {
  id: number;
  parent: number;
  text: string;
  droppable?: boolean;
  index?: number;
  depth?: number;
  data?: T;
  children?: NodeModel<T>[];
  collapse?: boolean;
};

export const isBlock = (
  node: BaseNode | CollectionRecord
): node is CollectionRecord => node instanceof CollectionRecord;

export const isBaseNode = (
  node: BaseNode | CollectionRecord
): node is BaseNode => node instanceof BaseNode;

export const isSameIdArray = (
  ids1: Array<number | string>,
  ids2: Array<number | string>
) => {
  if (ids1.length !== ids2.length) {
    return false;
  }
  const set1 = new Set(ids1);
  const set2 = new Set(ids2);
  return ids1.every((id) => set2.has(id)) && ids2.every((id) => set1.has(id));
};

export const getAllObjectIds = (c: CollectionRecord) => {
  const ids: number[] = [];
  c.traverse((en) => {
    if (en.Object && !en.isErase && en.Object.GroupId)
      ids.push(en.Object.ObjectId.Index);
  });
  return ids;
};

export type NodeProperties = {
  type: string;
  origin: BaseNode | CollectionRecord;
};

export type NodeType = "node" | "group";

const SCROLL_BAR_NAME = "SCROLL_BAR";

export class DataTreeView {
  private _stage: Stage;
  private _mainLayer: Layer;
  private scrollBar: Rect;
  private totalHeight = 30;
  private cleaners: (() => void)[] = [];
  private selectedIds = new Set<string>();
  private collapseIds = new Set<number>();
  private tree: NodeModel<NodeProperties>[] = [];
  private fillColor = "#1e88e5";
  onContextMenuObserable = new Observable();
  constructor(private container: HTMLDivElement, private app: Application) {
    this.container.style.overflow = "hidden";

    this._stage = new Stage({
      container: this.container,
      width: this.container.clientWidth,
      height: this.container.clientHeight,
      listening: true,
    });

    const layer = new Layer();

    const rect = new Rect({
      name: SCROLL_BAR_NAME,
      height: 100,
      width: SCROLL_BAR_WIDTH,
      cornerRadius: 5,
      fill: "#ccc",
      ID: SCROLL_BAR_NAME,
      x: this._stage.width() - SCROLL_BAR_WIDTH,
      hitStrokeWidth: 10,
      y: 0,
      draggable: true,
      dragBoundFunc: (pos) => {
        return {
          x: this.scrollBar.x(),
          y: clamp(0, this.Height - this.scrollBar.height(), pos.y),
        };
      },
    });

    this.scrollBar = rect;

    layer.add(rect);

    this._stage.add(layer);

    this._mainLayer = layer;

    this.draw();
    this.register();
  }
  get Height() {
    return this._stage.height();
  }
  get FillColor() {
    return this.fillColor;
  }
  set FillColor(color: string) {
    this.fillColor = color;
    this.draw();
  }

  drawScrollbar() {
    if (this.totalHeight > this.Height) {
      const height = (this.Height / this.totalHeight) * this.Height;
      this.scrollBar.height(Math.max(height, 30));
      this.scrollBar.visible(true);
      this.scrollBar.moveToTop();
    } else {
      this.scrollBar.visible(false);
    }
  }
  updateScrollBar(y: number) {
    if (this.totalHeight <= this.Height) return;
    const scale = Math.abs(y) / this.totalHeight;

    const dist = scale * this.Height;
    this.scrollBar.y(-y + dist);
  }
  scrollY2StageY() {
    const y = this.scrollBar.y();

    const stageY = Math.abs(this._stage.y());

    const dist = y - stageY;

    const scale = dist / this.Height;

    this._stage.y(-this.totalHeight * scale);

    this.updateScrollBar(-this.totalHeight * scale);
  }
  scrollToIndex(index: number) {
    const maxScrollIndex = parseFloat(
      ((this.totalHeight - this.Height) / itemHeight).toFixed(0)
    );
    let scrollIndex = index > maxScrollIndex ? maxScrollIndex : index;
    const scrollHeight = scrollIndex * itemHeight;
    const y = scrollHeight > this.Height ? -scrollHeight : 0;

    this._stage.y(y);
    this.updateScrollBar(y);
  }
  draw() {
    try {
      const childrens = this._mainLayer.getChildren().slice();
      for (const c of childrens) {
        if (c.id() === this.scrollBar.id()) continue;
        c.destroy();
      }

      const nodes = this.buildTree();

      this.buildRenderTree(nodes);

      let renderCount = 0;

      for (let i = 0; i < nodes.length; i++) {
        if (this.collapseIds.has(nodes[i].parent)) continue;
        this.drawNodeItem(nodes[i], renderCount);
        renderCount++;
      }

      this.totalHeight = renderCount * itemHeight;

      this.drawScrollbar();
    } catch (err) {
      console.log("err: ", err);
    }
  }
  renderTree(nodes: NodeModel<NodeProperties>[]) {
    for (const node of nodes) {
      if (isBlock(node.data!.origin)) {
        this.drawNodeItem(node, node.index!);
        this.renderTree(node.children!);
      } else {
        this.drawNodeItem(node, node.index!);
      }
    }
  }
  buildRenderTree(nodes: NodeModel<NodeProperties>[]) {
    const result: NodeModel<NodeProperties>[] = [];
    const childrenMap = new Map<number, NodeModel<NodeProperties>[]>();
    const mapCache = new Map<number, NodeModel>();
    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];
      node.index = index;
      if (node.parent === ROOT_ID) {
        result.push(node);
        node.depth = 0;
        mapCache.set(node.id as number, node);
      } else {
        const parentId = node.parent as number;
        const parent = mapCache.get(parentId);
        if (parent) {
          let arr = childrenMap.get(parentId);
          if (!arr) {
            arr = parent.children = [];
            childrenMap.set(parentId, arr);
          }
          mapCache.set(node.id as number, node);
          node.depth = parent.depth! + 1;
          arr!.push(node);
        } else {
          console.warn("未知情况");
        }
      }
    }

    return result;
  }
  drawNodeItem(item: NodeModel<NodeProperties>, index: number) {
    let x = (item.depth ?? 0) * LEFT_SPACING;
    const group = new Group({
      y: index * itemHeight,
      ID: "ITEM_ROOT",
      ...item,
      id: item.id.toString(),
      draggable: true,
    });
    const background = new Rect({
      width: this._stage.width(),
      name: "BACKGROUD",
      height: itemHeight,
      fill: this.selectedIds.has(item.id.toString()) ? this.fillColor : "",
      // stroke: "#ccc",
      // strokeWidth: 0.5,
    });

    group.add(background);

    if (item.data?.origin instanceof BaseNode) {
      let originX = x + LEFT_SPACING + padding;
      let originY = padding;

      const width = itemHeight - padding * 2;
      const height = itemHeight - padding * 2;

      const origin = item.data.origin.Intance.clone({
        x: originX,
        y: originY,
        scaleX: 1,
        scaleY: 1,
        visible: true,
        offset: {
          x: 0,
          y: 0,
        },
      });
      traverseNode(origin, (node) => {
        node.setAttrs({
          solidEnabled: false,
          strokeScaleEnabled: true,
        });
      });
      group.add(origin);
      const client = origin.getClientRect({ skipStroke: true });

      const scale = Math.min(width / client.width, height / client.height);

      const center = {
        x: client.x + (client.width / 2) * scale,
        y: client.y + (client.height / 2) * scale - index * itemHeight,
      };
      const vec = VecUtil.subVector(
        {
          x: originX + width / 2,
          y: originY + height / 2,
        },
        center
      );

      origin.setAttrs({
        scaleX: scale,
        scaleY: scale,
        offset: {
          x: -vec.x / scale,
          y: -vec.y / scale,
        },
      });

      // const icon = new Rect({
      //   width: width,
      //   height: height,
      //   x: originX,
      //   y: originY,
      //   stroke: "green",
      //   strokeWidth: 1,
      // });

      // group.add(icon);
    } else {
      const path = new Path({
        width: itemHeight - padding * 2,
        height: itemHeight - padding * 2,
        x: x + LEFT_SPACING + padding,
        y: padding,
        data: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",
        fill: "#ffe3c7",
        stroke: "#8a8a8a",
        name: "COLLAPSE_ICON",
        strokeWidth: 1,
        hitStrokeWidth: 3,
        offset: {
          x: 3,
          y: 4,
        },
      });
      const arrow = new Path({
        width: itemHeight - padding * 2,
        height: itemHeight - padding * 2,
        x: x - padding,
        y: padding,
        name: "COLLAPSE_ICON",
        data: item.collapse ? "m10 17 5-5-5-5v10z" : "m7 10 5 5 5-5z",
        stroke: "#8a8a8a",
        strokeWidth: 1,
        hitStrokeWidth: 30,
        offset: {
          x: -2,
          y: 3,
        },
      });

      group.add(path);
      group.add(arrow);

      // const icon = new Rect({
      //   width: itemHeight - padding * 2,
      //   height: itemHeight - padding * 2,
      //   x: x + LEFT_SPACING + padding,
      //   y: padding,
      //   stroke: "green",
      //   strokeWidth: 1,
      // });

      // group.add(icon);
    }

    const text = new Text({
      text: item.text,
      width: this._stage.width(),
      height: itemHeight,
      x: x + LEFT_SPACING + itemHeight,
      verticalAlign: "middle",
    });
    group.add(text);

    this._mainLayer.add(group);
  }
  destory() {
    this._stage.destroy();
    this.cleaners.forEach((c) => c());
    this.cleaners.length = 0;
  }
  buildTree() {
    const groups = this.app.Database.CollectionTable.objects;
    const tree = this.convertToNodeModel(this.app.Database.NodeSpace.Entitys);

    const groupList = groups.filter(this.validNode).map(this.nodeToModel);

    const useGroup = new Set();

    let len = tree.length;

    for (let i = 0; i < len; i++) {
      const item = tree[i];
      if (item.parent === ROOT_ID) continue;

      if (useGroup.size === groupList.length) break;

      const group = groupList.find((g) => g.id === item.parent);

      if (group && !useGroup.has(group)) {
        tree.splice(i, 0, group);
        i--;
        len = tree.length;
        useGroup.add(group);
      }
    }
    this.tree = tree;
    return tree;
  }
  reset() {
    this._stage.y(0);
    this.collapseIds.clear();
    this.selectedIds.clear();
  }
  update() {
    for (const node of this._mainLayer.getChildren() as Group[]) {
      if (node.attrs.ID === SCROLL_BAR_NAME) {
        continue;
      }
      this.selectedNode(node, this.selectedIds.has(node.id()));
    }
  }
  selectNodes(nodeIds: string[], isClear = true) {
    if (isClear) {
      this.selectedIds.clear();
    }
    nodeIds.forEach((id) => {
      this.selectedIds.add(id);
    });
    this.update();
    this.updateAppSelected();
  }
  collapseNodes(root: Group) {
    const id = parseFloat(root.id());
    if (this.collapseIds.has(id)) {
      this.collapseIds.delete(id);
    } else {
      this.collapseIds.add(id);
    }
    this.draw();
  }
  skip(index: number) {
    this._stage.y(-index * itemHeight);
    this.updateScrollBar(-index * itemHeight);
  }
  private convertToNodeModel(nodes: Array<BaseNode>) {
    return nodes
      .filter(this.validNode)
      .sort((a, b) => {
        return a.RenderIndex - b.RenderIndex;
      })
      .map(this.nodeToModel);
  }
  private nodeToModel = (
    node: BaseNode | CollectionRecord
  ): NodeModel<NodeProperties> => {
    const nodeId = node.Id || (node as BaseNode).NodeId;
    const model: NodeModel<NodeProperties> = {
      id: nodeId,
      parent: node.GroupId?.Index || ROOT_ID,
      text: node.Name || node["Text"],
      collapse: this.collapseIds.has(nodeId),
      data: {
        type: node.Type,
        origin: node,
      },
    };
    if (isBlock(node)) {
      model.droppable = true;
      model.text = model.text || "块";
    }
    model.text = model.text || UN_NAMED;
    return model;
  };
  private register() {
    this._stage.on("wheel", (e) => {
      if (this.totalHeight <= this.Height) return;

      let direction = -Math.sign(e.evt.deltaY);

      if (direction < 0 && -this._stage.y() + this.Height >= this.totalHeight) {
        return;
      }

      if (direction > 0 && this._stage.y() >= 0) {
        return;
      }

      let y = this._stage.y();
      y += direction * (itemHeight + 1) * (Math.abs(e.evt.deltaY) / 100);

      if (direction < 0 && -y + this.Height >= this.totalHeight) {
        y = this.Height - this.totalHeight;
      }

      if (direction > 0 && y >= 0) {
        y = 0;
      }

      this._stage.y(y);

      this.updateScrollBar(y);
    });

    const obser = this.app.Database.onLoadObserver.add(() => {
      this.reset();
      this.draw();
    });

    const obserover =
      this.app.Database.HistoryManager.onEndCommandObserable.add(({ cmd }) => {
        if (cmd.includes("拖拽")) return;
        this.draw();
      });

    const obserover2 =
      this.app.Database.HistoryManager.onUnReDoCommandObserable.add(
        ({ history }) => {
          this.draw();
        }
      );
    const obserover3 = this.app.Database.LayerTable.onActiveObserable.add(
      () => {
        this.draw();
      }
    );

    const onSelectObseroverRemove = this.app.Editor.SelectControl.onSelect(
      (data) => {
        const { all } = data;
        const newSelectedIds = all.map((i) => i.Id.toString());
        if (isSameIdArray(newSelectedIds, [...this.selectedIds])) return;
        this.selectNodes(newSelectedIds);
        const firstIndex = this.tree.findIndex(
          (t) => t.id === parseFloat(newSelectedIds[0])
        );
        this.scrollToIndex(firstIndex);
      }
    );

    this._stage.on("contextmenu", (evt) => {
      evt.evt.preventDefault();
      const root = this.getRootByNode(evt.target as Shape);

      const index = root ? this.getIndexByY(root!.y()) : undefined;

      const rootId = root ? root.id() : undefined;

      if (rootId) {
        if (!this.selectedIds.has(rootId)) {
          this.selectNodes([rootId], true);
        }
      }

      this.onContextMenuObserable.notifyObservers({
        ...evt,
        targetRoot: root,
        index: index,
        selectedIds: [...this.selectedIds],
      });
    });

    this._stage.on("click", (evt) => {
      if (evt.evt.button !== 0) return;
      if (evt.target.attrs.ID === SCROLL_BAR_NAME) {
        //点在滚动条上
      } else {
        const root = this.getRootByNode(evt.target as Shape);
        if (root) {
          if (evt.target.name() === "COLLAPSE_ICON") {
            this.collapseNodes(root);
          } else {
            const withCtrl = evt.evt.ctrlKey;
            const rooId = root.id();
            if (withCtrl) {
              if (this.selectedIds.has(rooId)) {
                this.selectedIds.delete(rooId);
                this.selectNodes([...this.selectedIds], false);
              } else {
                this.selectNodes([rooId], false);
              }
            } else {
              this.selectNodes([rooId]);
            }
          }
        }
      }
    });

    this._stage.on("dblclick", (evt) => {
      if (evt.target.attrs.ID === SCROLL_BAR_NAME) return;
      const root = this.getRootByNode(evt.target as Shape);
      if (root) {
        const rooId = root.id();
        const node = this.tree.find((t) => t.id === parseFloat(rooId))?.data!
          .origin;
        if (node && isBaseNode(node)) {
          this.app.Viewer.camera.zoomToNode(node);
        }
      }
    });

    // 拖拽行为
    let line: Line | null;

    this._stage.on("dragstart", (evt) => {
      if (evt.target.name() === SCROLL_BAR_NAME) {
        return;
      }

      if (evt.target instanceof Group) {
        this.selectNodes([evt.target.id()], false);
        const object = evt.target.clone() as Group;
        object.attrs.ID = "ITEM_ROOT_TEMP";
        this._mainLayer.add(object);
        object.moveDown();
        line = new Line({
          stroke: "blue",
          strokeWidth: 1,
          points: [0, 0, this._stage.width(), 0],
        });

        this._mainLayer.add(line);
      }
    });

    this._stage.on("dragmove", (evt) => {
      //模拟滚动条效果
      if (evt.target.name() === SCROLL_BAR_NAME) {
        this.scrollY2StageY();
        return;
      }

      if (!line) return;
      if (evt.target instanceof Group) {
        const p = evt.target.position();

        if (p) {
          const index = this.getIndexByY(p.y);
          line.y(index * itemHeight);
        }
      }
    });

    this._stage.on("dragend", (evt) => {
      if (!line) return;
      if (evt.target instanceof Group) {
        const p = evt.target.position();
        const items = this._mainLayer.getChildren(
          (i) => i.attrs.ID === "ITEM_ROOT"
        ) as Group[];
        const index = this.getIndexByY(p.y);
        const item = items[index];

        const targetIndex =
          item?.attrs.index ?? items[items.length - 1].attrs.index + 1;

        [...this.selectedIds]
          .map((id) => {
            return this.tree.find((t) => t.id === parseFloat(id))!;
          })
          .sort((a, b) => {
            return a.index! - b.index!;
          })
          .forEach((node, i) => {
            this.moveItem(node, targetIndex);
          });
        evt.target.destroy();
        this.updateRenderIndex();
      }
      line.destroy();
      line = null;
    });

    this.cleaners.push(() => {
      this.app.Database.onLoadObserver.remove(obser);
      this.app.Database.HistoryManager.onEndCommandObserable.remove(obserover);
      this.app.Database.HistoryManager.onUnReDoCommandObserable.remove(
        obserover2
      );
      this.app.Database.LayerTable.onActiveObserable.remove(obserover3);
      onSelectObseroverRemove(), this._stage.off("mousedown");
      this._stage.off("mousemove");
      this._stage.off("mouseup");
      this._stage.off("wheel");

      this.onContextMenuObserable.clear();
    });
  }
  private getRootByNode(node: Shape) {
    let item = node as Shape | Group;
    while (item.parent) {
      item = item.parent as Group;
      if (item.attrs.ID === "ITEM_ROOT") {
        return item;
      }
    }
    return null;
  }
  private selectedNode(node: Group, selected: boolean) {
    const bg = node.findOne?.(".BACKGROUD") as Shape;
    if (bg) bg.fill(selected ? this.fillColor : "");
  }
  private validNode = (node: BaseNode | CollectionRecord) => {
    return (
      !node.IsErase &&
      node.LayerId === this.app.Database.LayerTable.ActiveLayerId
    );
  };
  private getIndexByY(y: number) {
    return Math.floor((y + itemHeight * 0.5) / itemHeight);
  }
  // 移动节点
  private moveItem(node: NodeModel<NodeProperties>, taegetIndex: number) {
    const curIndex = this.tree.findIndex((t) => t.id === node.id);
    if (curIndex === taegetIndex) return;
    const isDown = curIndex < taegetIndex;
    if (!isDown) {
      this.tree.splice(taegetIndex, 0, node);
      this.tree.splice(curIndex + 1, 1);
    } else {
      this.tree.splice(taegetIndex, 0, node);
      this.tree.splice(curIndex, 1);
    }
    this.tree.forEach((t, index) => {
      t.data!.origin.RenderIndex = index;
    });
    // 组合需要递归所有子节点一起移动
    if (isBlock(node.data!.origin)) {
      const childIds = getAllObjectIds(node.data!.origin);
      const child = this.tree.filter((t) => childIds.includes(t.id));
      child.forEach((c, i) => {
        this.moveItem(c, taegetIndex);
      });
    }
  }
  private updateRenderIndex() {
    this.app.Database.nodeSortByRenderIndex();
    this.app.Viewer.drawByRenderIndex();
    this.draw();
  }
  // 选中节点
  private updateAppSelected() {
    const all = [...this.selectedIds]
      .map((id) => {
        const node = this.tree.find((t) => t.id === parseFloat(id))!;
        return node;
      })
      .filter(typeGuardDefined);
    this.app.Editor.SelectControl.addSelectNodes(
      all?.map((n) => n.data!.origin),
      {
        clear: true,
        applyGroup: false,
        fromRoot: false,
      }
    );
  }
}
