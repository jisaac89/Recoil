import * as React from 'react';
import './Grid.less';

import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

import GridHeader from './GridHeader';
import GridBody from './GridBody';

export default class Grid extends React.Component<any, any>{

  constructor() {
    super();
    this.state = {
      collection: []
    }
  }

  public componentDidMount() {
    this.loadCollection();
  }

  public componentWillReceiveProps(nextProps) {
    const self = this;
    if (nextProps.dataSource !== self.props.dataSource) {
      self.setState({
        collection: nextProps.dataSource
      });
    }
  }

  public loadCollection() {
    let collection = [];
    for (let key in this.props.dataSource) {
      collection.push(this.props.dataSource[key])
    }

    this.setState({
      collection: collection
    })
  }

  public toggleSorting(key) {
    let updatedCollection = [];

    for (let key in this.props.dataSource) {
      updatedCollection.push(this.props.dataSource[key])
    }

    let sortCollection = () => {
      updatedCollection.sort(function(a, b){
        switch (typeof a[key]) {
          case ('string'):
            let itemPrev = a[key].toLowerCase();
            let itemNext = b[key].toLowerCase();
             if (itemPrev < itemNext) //string asc
              return -1
             if (itemPrev > itemNext)
              return 1
            break;
          case ('number'):
            return a[key]-b[key];
          default:
        }
      })
      return updatedCollection;
    }

    if (this.state.sortType === 'none') {
      sortCollection();
    } else if (this.state.sortType === 'desc') {
      sortCollection().reverse();
    }

    this.setState({
      collection: updatedCollection,
      sortType : this.state.sortType === 'none' ? 'desc' : this.state.sortType === 'desc' ? 'asc' : 'none'
    })

  }

  public columns(id) {
    this.props.columns(id);
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    let {columns, dataSource} = props;

    return (
      <Layer overflow className='r-Grid w100'>
        <GridHeader
          hideHeader={props.hideHeader}
          columns={this.props.columns}
          dataSource={this.state.collection}
          sortable={props.sortable}
          toggleSorting={this.toggleSorting.bind(this)}
          sortType={this.state.sortType}
        />
        <GridBody
          onSelect={this.props.onSelect}
          selected={props.selected}
          columns={this.props.columns}
          dataSource={this.state.collection}
        />
      </Layer>
    )
  }
}
