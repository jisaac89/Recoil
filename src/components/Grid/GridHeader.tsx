import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

class GridHeaderSortable extends React.Component<any,any>{

  constructor() {
    super();
    this.state = {
      sortType: 'none',
      columns: []
    }
  }

  public toggleSorting(columnName) {

    const self = this;

    this.setState({
      sortType: this.state.sortType === 'none' ? 'desc' : this.state.sortType === 'desc' ? 'asc' : 'none'
    })

    this.props.toggleSorting(columnName, self.state.sortType);
  }

  render() {

    const self = this;
    const props = self.props;

    let {item} = props;

    return (
      <th style={{width : item.width}}>
        {this.props.children}
        <Button onClick={self.toggleSorting.bind(self, item.name)} tabIndex={-1} className="w50px" ghost size="small" icon={this.state.sortType === 'none' ? 'minus' : this.state.sortType === 'desc' ? 'chevron-down' : 'chevron-up' } />
      </th>
    );
  }
}

export default class GridHeader extends React.Component<any, any>{
  public toggleSorting(key, sortType) {
    this.props.toggleSorting(key, sortType);
  }
  render() {

    const self = this;
    const props = self.props;

    let headerTitle;

    let createColumns = (item, index) => {
      if (item.headerTemplate) {
        return (
          <th style={{width : item.width}} key={index}>
            {item.headerTemplate()}
          </th>
        )
      }
      else if (props.sortable) {
        if (item.headerTemplate) {
          return (
            <GridHeaderSortable
              key={index}
              item={item}
              toggleSorting={this.toggleSorting.bind(this)}
            >
              {item.headerTemplate()}
            </GridHeaderSortable>
          )
        } else {
          return (
            <GridHeaderSortable
              key={index}
              item={item}
              toggleSorting={this.toggleSorting.bind(this)}
            >
              <a>{item.name}</a>
            </GridHeaderSortable>
          )
        }
      }
      else {
        return (
          <th style={{width : item.width}} key={index}>
            <a>{item.name}</a>
          </th>
        )
      }
    }

    if (!props.hideHeader && props.columns) {
      return(
        <thead className="r-Grid__Header">
          <tr>
            {this.props.columns.map(createColumns)}
          </tr>
        </thead>
      )
    } else {
      return null;
    }
  }
}
