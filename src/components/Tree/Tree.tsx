import * as React from 'react';

import './Tree.less';
import Table from '../Table/Table';

export interface ITreeItem<T, U> {
    item: T;
    Id: U,
    parentId: U,
    children: T[];
}

export interface ITreeItemHash<T> {
    [index: string]: ITreeItem<T, any>;
}

export interface ITreeProps {
    dataSource?: any;
    columns?: any;
    parentKey?: string;
    uniqueKey?: string;
    selectedElements?: Array<any>;
    openedElements?: Array<any>;
    selectedKey?: string;
    onRowSelect?: any;
    filterOpenDetailTemplate?: any;
    onMount?: any;
}

export interface ITreeState {
    treeItems?: ITreeItem<any, any>[];
    treeItemHash?: ITreeItemHash<any>;
    roots?: ITreeItem<any, any>[];
    openedKeys?: string[];
}

export default class Tree extends React.Component<ITreeProps, ITreeState>{

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
        }
    }

    componentDidMount() {
        this.initArray(this.props.dataSource, true);

        if (this.props.selectedElements && this.props.selectedElements.length > 0) {
            this.openSelectedElements(this.props.selectedElements);
        }
    }

    componentWillReceiveProps(nextProps: ITreeProps) {
        if (nextProps.dataSource.length !== this.props.dataSource.length) {
            this.initArray(nextProps.dataSource, false);
        }

        if (nextProps.selectedElements && nextProps.selectedElements.length > 0) {
            this.openSelectedElements(nextProps.selectedElements);
        }
    }

    initArray<T>(dataSource: Array<T>, bool : boolean) {
        let {parentKey, uniqueKey} = this.props;

        let treeItems: Array<ITreeItem<T, any>> = [];
        let treeItemHash: ITreeItemHash<T> = {};
        if (dataSource.length) {
            dataSource.forEach((item: T) => {
                let treeItem: ITreeItem<T, any> = {
                    item: item,
                    Id: item[uniqueKey],
                    parentId: item[parentKey],
                    children: []
                };
                treeItems.push(treeItem);
                treeItemHash[item[uniqueKey]] = treeItem;
            });
        }

        this.setState({
            treeItems: treeItems,
            treeItemHash: treeItemHash
        }, () => {
            this.updateRoots();
            });

        if (bool) {
            //console.log(treeItems);
            this.props.onMount ? this.props.onMount(treeItems) : null
        }
    }

    updateRoots() {
        let treeItems = this.state.treeItems;
        let treeItemHash = this.state.treeItemHash;
        let roots = [];

        if (treeItems.length === this.props.dataSource.length) {
            for (let i = 0; i < treeItems.length; i += 1) {
                let node = treeItems[i];
                let parent = treeItemHash[node.parentId];
                parent ? parent.children.push(node) : roots.push(node);
            }
        }

        this.setState({ roots: roots }, () => {
            this.props.selectedElements && this.props.selectedElements.length > 0 ? this.openSelectedElements(this.props.selectedElements) : null;
            this.props.openedElements && this.props.openedElements.length > 0 ? this.openedElements(this.props.openedElements) : null;
        });
    }

    openSelectedElements(selectedElements: Array<any>) {
        let treeItems = this.state.treeItems;
        let openedKeys: Array<any> = [];

        let gotoParentAndPushKey = (selectedKeyIndex: any, node?: any): any => {
            let currentSelectedKeyIndex = selectedKeyIndex || 0;

            let currentNode = node || treeItems.filter(function (node: any) {
                return node.Id === selectedElements[selectedKeyIndex];
            });

            let theNode = currentNode[0];

            if (theNode && theNode.parentId !== 0) {
                openedKeys.push(theNode.parentId);

                let parentNode = treeItems.filter(function (node: any) {
                    return node.Id === theNode.parentId;
                });

                if (parentNode[0].parentId === 0) {
                    return null
                } else {
                    return gotoParentAndPushKey(currentSelectedKeyIndex, parentNode);
                }
            }
        }

        gotoParentAndPushKey(0);

        this.setState({
            openedKeys: openedKeys
        });
    }

    openedElements(selectedElements: Array<any>) {
        let treeItems = this.state.treeItems;
        let openedKeys: Array<any> = [];

        let gotoParentAndPushKey = (selectedKeyIndex: any, node?: any): any => {
            let currentSelectedKeyIndex = selectedKeyIndex || 0;

            let currentNode = node || treeItems.filter(function (node: any) {
                return node.Id === selectedElements[selectedKeyIndex];
            });

            let theNode = currentNode[0];

            if (theNode && theNode.parentId !== 0) {
                openedKeys.push(theNode.parentId);

                let parentNode = treeItems.filter(function (node: any) {
                    return node.Id === theNode.parentId;
                });

                if (parentNode[0].parentId === 0) {
                    return null
                } else {
                    return gotoParentAndPushKey(currentSelectedKeyIndex, parentNode);
                }
            }
        }

        gotoParentAndPushKey(0);

        this.setState({
            openedKeys: openedKeys
        });
    }

    renderChildren(childNode: any) {
        let {columns, uniqueKey, filterOpenDetailTemplate, openedElements} = this.props;
        return (
            <Table
                hideHeader
                key={childNode.Id}
                className={"pl20"}
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

    render() {
        let {columns, openedElements, uniqueKey, filterOpenDetailTemplate} = this.props;
        let {roots} = this.state;

        if (roots.length) {
            return (
                <div className="r-Tree e-scroll-y">
                    <Table
                        hideHeader
                        columns={columns}
                        dataSource={roots}
                        detailTemplate={this.renderChildren.bind(this)}
                        filterOpenDetailTemplate={filterOpenDetailTemplate}
                        hidePageSize
                        selectedKey={uniqueKey}
                        selectedElements={this.props.selectedElements}
                        detailTemplateSelectedElements={this.state.openedKeys.concat(openedElements)}
                        pageSize={roots.length}
                        />

                </div>
            );
        } else return null;
    }
}
