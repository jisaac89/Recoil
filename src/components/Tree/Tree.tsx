import React from 'react';
import { Table } from '../Table/Table';

export interface ITreeItem<T, U> {
  item: T;
  Id: U;
  parentId: U;
  children: T[];
}

export interface ITreeItemHash<T> {
  [index: string]: ITreeItem<T, any>;
}

export interface ITreeProps {
  dataSource?: any;
  columns?: any;
  parentKey: string;
  uniqueKey: string;
  selectedElements: Array<any>;
  openedElements?: Array<any>;
  selectedKey?: string;
  onRowSelect?: any;
  filterOpenDetailTemplate?: any;
  onMount?: any;
  parentId?: any;
  hideRoot?: boolean;
  hideChildren?: boolean;
}

export interface ITreeState {
  treeItems: ITreeItem<any, any>[];
  treeItemHash: ITreeItemHash<any>;
  roots: ITreeItem<any, any>[];
  openedKeys: string[];
}

export class Tree extends React.Component<ITreeProps, ITreeState> {
  public static defaultProps = {
    parentKey: 'ParentId',
    uniqueKey: 'Id'
  };

  constructor(props: ITreeProps) {
    super(props);
    this.state = {
      treeItems: [],
      roots: [],
      treeItemHash: {},
      openedKeys: []
    };
  }

  componentDidMount() {
    this.initArray(this.props.dataSource, true);

    if (this.props.selectedElements && this.props.selectedElements.length > 0) {
      this.openSelectedElements(this.props.selectedElements);
    }
  }

  componentDidUpdate(prevProps: ITreeProps) {
    if (prevProps.dataSource.length !== this.props.dataSource.length) {
      this.initArray(this.props.dataSource, false);
    }

    if (this.props.selectedElements !== prevProps.selectedElements && prevProps.selectedElements.length > 0) {
      this.openSelectedElements(this.props.selectedElements);
    }
  }

  initArray<T>(dataSource: Array<T>, bool: boolean) {
    const { parentKey, uniqueKey } = this.props;

    const treeItems: Array<ITreeItem<T, any>> = [];
    const treeItemHash: ITreeItemHash<T> = {};
    if (dataSource.length) {
      dataSource.forEach((item: T) => {
        const treeItem: ITreeItem<T, any> = {
          item: item,
          Id: item[uniqueKey],
          parentId: item[parentKey],
          children: []
        };
        treeItems.push(treeItem);
        treeItemHash[item[uniqueKey]] = treeItem;
      });
    }

    this.setState(
      {
        treeItems: treeItems,
        treeItemHash: treeItemHash
      },
      () => {
        this.updateRoots();
      }
    );

    if (bool) {
      //console.log(treeItems);
      this.props.onMount ? this.props.onMount(treeItems) : null;
    }
  }

  updateRoots() {
    const treeItems = this.state.treeItems;
    const treeItemHash = this.state.treeItemHash;
    const roots = [];

    if (treeItems.length === this.props.dataSource.length) {
      for (let i = 0; i < treeItems.length; i += 1) {
        const node = treeItems[i];
        const parent = treeItemHash[node.parentId];
        parent ? parent.children.push(node) : roots.push(node);
      }
    }

    this.setState({ roots: roots }, () => {
      this.props.selectedElements && this.props.selectedElements.length > 0
        ? this.openSelectedElements(this.props.selectedElements)
        : null;
      this.props.openedElements && this.props.openedElements.length > 0
        ? this.openedElements(this.props.openedElements)
        : null;
    });
  }

  openSelectedElements(selectedElements: Array<any>) {
    const treeItems = this.state.treeItems;
    const openedKeys: Array<any> = [];

    const gotoParentAndPushKey = (selectedKeyIndex: any, node?: any): any => {
      const currentSelectedKeyIndex = selectedKeyIndex || 0;

      const currentNode =
        node ||
        treeItems.filter(function(node: any) {
          return node.Id === selectedElements[selectedKeyIndex];
        });

      const theNode = currentNode[0];

      if (theNode && (theNode.parentId !== 0 || theNode.parentId !== this.props.parentId)) {
        openedKeys.push(theNode.parentId);

        const parentNode = treeItems.filter(function(node: any) {
          return node.Id === theNode.parentId;
        });

        if (theNode.parentId === 0 || theNode.parentId === this.props.parentId) {
          return null;
        } else {
          return gotoParentAndPushKey(currentSelectedKeyIndex, parentNode);
        }
      }
    };

    gotoParentAndPushKey(0);

    this.setState({
      openedKeys: openedKeys
    });
  }

  openedElements(selectedElements: Array<any>) {
    const treeItems = this.state.treeItems;
    const openedKeys: Array<any> = [];

    const gotoParentAndPushKey = (selectedKeyIndex: any, node?: any): any => {
      const currentSelectedKeyIndex = selectedKeyIndex || 0;

      const currentNode =
        node ||
        treeItems.filter(function(node: any) {
          return node.Id === selectedElements[selectedKeyIndex];
        });

      const theNode = currentNode[0];

      if (theNode && (theNode.parentId !== 0 || theNode.parentId !== this.props.parentId)) {
        openedKeys.push(theNode.parentId);

        const parentNode = treeItems.filter(function(node: any) {
          return node.Id === theNode.parentId;
        });

        if (theNode.parentId === 0 || theNode.parentId === this.props.parentId) {
          return null;
        } else {
          return gotoParentAndPushKey(currentSelectedKeyIndex, parentNode);
        }
      }
    };

    gotoParentAndPushKey(0);

    this.setState({
      openedKeys: openedKeys
    });
  }

  renderChildren(childNode: any) {
    const { columns, uniqueKey, filterOpenDetailTemplate, openedElements } = this.props;
    return (
      <Table
        hideHeader
        key={childNode.Id}
        className={'pl20'}
        columns={columns}
        dataSource={childNode.children}
        detailTemplate={this.renderChildren.bind(this)}
        filterOpenDetailTemplate={filterOpenDetailTemplate}
        hidePageSize
        selectedKey={uniqueKey}
        selectedElements={this.props.selectedElements}
        detailTemplateSelectedElements={this.state.openedKeys.concat(openedElements)}
        pageSize={childNode.children.length}
      />
    );
  }

  renderChildrenWithoutParent(childNode: any) {
    const { columns, uniqueKey, filterOpenDetailTemplate, openedElements, hideChildren } = this.props;
    if (!hideChildren) {
      return (
        <Table
          hideHeader
          key={childNode.Id}
          columns={columns}
          dataSource={childNode.children}
          detailTemplate={this.renderChildren.bind(this)}
          filterOpenDetailTemplate={filterOpenDetailTemplate}
          hidePageSize
          selectedKey={uniqueKey}
          selectedElements={this.props.selectedElements}
          detailTemplateSelectedElements={this.state.openedKeys.concat(openedElements)}
          pageSize={childNode.children.length}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const { columns, openedElements, uniqueKey, filterOpenDetailTemplate, hideRoot, hideChildren } = this.props;
    const { roots } = this.state;

    if (roots.length) {
      if (hideRoot) {
        return this.renderChildrenWithoutParent(roots[0]);
      } else {
        return (
          <div className="r-Tree e-scroll-y">
            <Table
              hideHeader
              columns={columns}
              dataSource={roots}
              detailTemplate={!hideChildren ? this.renderChildren.bind(this) : null}
              filterOpenDetailTemplate={filterOpenDetailTemplate}
              hidePageSize
              selectedKey={uniqueKey}
              selectedElements={this.props.selectedElements}
              detailTemplateSelectedElements={this.state.openedKeys.concat(openedElements)}
              pageSize={roots.length}
            />
          </div>
        );
      }
    } else {
      return null;
    }
  }
}
