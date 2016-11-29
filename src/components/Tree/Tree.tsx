import * as React from 'react';
import * as classNames from 'classnames';

// import DataSource from '../DataSource/DataSource';
import TreeComponent from './TreeComponent';

import './Tree.less';
import Table from '../Table/Table';

interface P {
 dataSource? : any; 
}

export default class Tree extends React.Component<P, any>{
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

    let newArray = [];
    let map = {};


    let createNodeTree = (item, index) =>{

      newArray.push({
        name: item.name,
        Id: item.Id,
        parentId: item.parentId,
        children : []
      });

      map[item.Id] = index;
    }

    dataSource.map(createNodeTree);

    this.setState({
      newArray : newArray,
      map: map
    }, () => {
      this.updateRoots(dataSource)
    })
  }

  updateRoots(dataSource){

    // let roots = this.state.roots;
    let newArray = this.state.newArray;
    let map = this.state.map;

    let roots = [];

    if (newArray.length === dataSource.length) {
      for (let i = 0; i < newArray.length; i += 1) {
          let node = newArray[i];
          let nodeData = dataSource[i];
          node.children = [];
          if (node.parentId !== 0) {
              newArray[map[node.parentId]].children.push(node);
          } else {
              roots.push(node);
          }
      }

      this.setState({roots: roots});
    } 
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    let {dataSource} = props;
    let {newArray, roots, map} = state;

    // console.log(roots);
    console.log(map);

        let detailTemplate = (item)=> {
          if (item.children.length > 0) {
            return item.children.map(childrenList);
          } else {
            return <Table className="pl20" key={item.Id} columns={[{name: 'name'}]} hideHeader dataSource={item.children} />
          }
        }

            let childrenList = (itemi, i) =>{
            let container = [];
              if (itemi.children.length > 0){
                container.push(
                  <Table className="pl20" key={itemi.Id} columns={[{name: 'name'}]} hideHeader dataSource={itemi} detailTemplate={detailTemplate} />
                )
              } else {
                container.push(<Table className="pl20" key={itemi.Id} columns={[{name: 'name'}]} hideHeader dataSource={itemi} />);
              }

              return <div className="container" key={itemi.Id}>{container}</div>
            }
    

    let createTree = (item, index) => {

        return item.parentId === 0 ? <Table key={item.Id} columns={[{name: 'name'}]} hideHeader dataSource={item} detailTemplate={detailTemplate} /> : null;
    }

     return (
       <div ref={'tree'}>
        {roots.map(createTree)}
       </div>
     )
  }
}