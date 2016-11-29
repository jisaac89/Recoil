import * as React from 'react';
import * as classNames from 'classnames';

// import DataSource from '../DataSource/DataSource';
import TreeComponent from './TreeComponent';

import './Tree.less';
import Table from '../Table/Table';

interface P {
 dataSource? : any; 
 columns? : any;
 parentKey? : string;
 uniqueKey? : string;
}

export default class Tree extends React.Component<P, any>{

  public static defaultProps = {
      parentKey: 'parentKey',
      uniqueKey: 'Id'
  };

  constructor(props) {
    super(props);
    this.state = {
      array : props.dataSource,
      newArray : [], 
      roots: [],
      map: {}
    }
  }
  componentDidMount() {
    this.initArray(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    this.initArray(nextProps.dataSource);
  }
  initArray(dataSource) {
    let {columns, parentKey, uniqueKey} = this.props;
    let newArray = [];
    let map = {}

    let createNodeTree = (item, index) =>{
      newArray.push({
        name: item.name,
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

    if (newArray.length > 0) {
      for (let i = 0; i < newArray.length; i += 1) {
          let node = newArray[i];
          node.parentId !== 0 ? newArray[map[node.parentId]].children.push(node) : roots.push(node);
      }
      this.setState({roots: roots});
    } 
  }
  detailTemplate(item) {
    let {columns, parentKey, uniqueKey} = this.props;
    return item.children.length > 0 ? item.children.map(this.childrenList.bind(this)) : <Table className="pl20" key={item[uniqueKey]} columns={columns} hideHeader dataSource={item.children} />;
  }
  childrenList(childNode, i){
    let {columns, parentKey, uniqueKey} = this.props;
    let container = [];
    container.push(
      <Table className="pl20" key={childNode.Id} columns={columns} hideHeader dataSource={childNode} {...childNode.children.length > 0 ? {detailTemplate : this.detailTemplate.bind(this)} : null} />
    )
    return <div className="container" key={childNode.Id}>{container}</div>
  }
  render() {
    const self = this;
    const props = self.props;
    let {columns} = props;
    let state = self.state;
    let {roots} = state;

    return (
      <Table className="r-Tree" dataSource={roots} columns={columns} detailTemplate={this.detailTemplate.bind(this)} />
    )
  }
}