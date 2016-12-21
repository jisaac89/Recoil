import * as React from 'react';
import * as classNames from 'classnames';

// import DataSource from '../DataSource/DataSource';
import TreeComponent from './TreeComponent';

import './Tree.less';
import Table from '../Table/Table';
import Layer from '../Layer/Layer';

interface P {
 dataSource? : any; 
 columns? : any;
 parentKey? : string;
 uniqueKey? : string;
 selectedElements? : Array<any>;
 openedElements?: Array<any>;
 selectedKey?: string;
 onRowSelect?: any;
}

export default class Tree extends React.Component<P, any>{

  public static defaultProps = {
      parentKey: 'ParentId',
      uniqueKey: 'Id'
  };

  constructor(props) {
    super(props);
    this.state = {
      newArray : [], 
      roots: [],
      map: {},
      openedKeys: []
    }
  }
  componentDidMount() {
    this.initArray(this.props.dataSource);
  }
  //componentWillReceiveProps(nextProps) {
  //    if (nextProps.selectedElements !== this.props.selectedElements){
  //        this.openSelectedElements();
  //    }
  //}

  componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource !== this.props.dataSource){
          this.initArray(nextProps.dataSource);
      }
  }
  initArray(dataSource) {
    let {columns, parentKey, uniqueKey} = this.props;
    let newArray = [];
    let map = {}

    let createNodeTree = (item, index) =>{
      newArray.push({
        item: item,
        Id: item[uniqueKey],
        parentId: item[parentKey],
        children : []
      });
      map[item[uniqueKey]] = index;
    }

    dataSource.map(createNodeTree);

    this.setState({
      newArray : newArray,
      map: map
    }, () => {
      this.updateRoots()
    })
  }
  updateRoots(){
    let {columns, parentKey, uniqueKey} = this.props;
    let newArray = this.state.newArray;
    let map = this.state.map;
    let roots = [];

    if (newArray.length === this.props.dataSource.length) {
      for (let i = 0; i < newArray.length; i += 1) {
          let node = newArray[i];
          node.parentId !== 0 ? newArray[map[node.parentId]].children.push(node) : roots.push(node);
      }
    } 

    this.setState({ roots: roots }, () => {
        this.props.selectedElements ? this.openSelectedElements() : null;
    });

  }
  openSelectedElements() {
      let {selectedElements} = this.props;
      let newArray = this.state.newArray;
      let openedKeys = [];

      let gotoParentAndPushKey = (selectedKeyIndex, node ? : any) => {
          let currentSelectedKeyIndex = selectedKeyIndex || 0; 

          let currentNode = node || newArray.filter(function (node) {
              return node.Id === selectedElements[selectedKeyIndex];
          })

          let theNode = currentNode[0];

          if (theNode && theNode.ParentId !== 0) {
              openedKeys.push(theNode.parentId); 

              let parentNode = newArray.filter(function (node) {
                  return node.Id === theNode.parentId;
              })

              if (parentNode[0].parentId === 0) {
                  return null
              } else {
                  return gotoParentAndPushKey(currentSelectedKeyIndex, parentNode);
              }
              
          } else {
              openedKeys.push(theNode.Id);
          }
      }

      gotoParentAndPushKey(0);

      this.setState({
          openedKeys: openedKeys
      })

  }
  detailTemplate(item) {
    let {columns, parentKey, uniqueKey} = this.props;
    return item.children.length > 0 ? item.children.map(this.childrenList.bind(this)) : <Table className="ml20" key={item[uniqueKey]} columns={columns} hideHeader dataSource={item.children} />;
  }
  childrenList(childNode, i){
      let {columns, parentKey, uniqueKey, selectedKey, onRowSelect} = this.props;
    let container = [];
    container.push(
        <Table 
           
          hideHeader 
          key={childNode.Id} 
          className={childNode.children.length > 0 ? "pl0" : "pl0"} 
          columns={columns} 
          selectedKey={uniqueKey}
          selectedElements={this.props.selectedElements}
          detailTemplateSelectedElements={this.state.openedKeys ? this.state.openedKeys : this.props.openedElements}
          dataSource={childNode} 
          onRowSelect={onRowSelect}
          {...childNode.children.length > 0 ? {detailTemplate : this.detailTemplate.bind(this)} : null} 
      />
    )
    return <div className={childNode.parentId !== 0 ? "ml20" : "pl0"} key={childNode.Id}>{container}</div>
  }
  render() {
    const self = this;
    const props = self.props;
    let {dataSource, columns, selectedElements, openedElements, uniqueKey} = props;
    let state = self.state;
    let {roots} = state;

    if (roots.length) {
        return (
            <div className="r-Tree">
                {roots.map(this.childrenList.bind(this)) }
            </div>
        )
    } else return null;
  }
}