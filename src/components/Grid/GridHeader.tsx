import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

class GridHeaderSortable extends React.Component<any,any>{

  constructor() {
    super();
    this.state = {
      sortType: 'none'
    }
  }

  public toggleSorting(columnName) {
    this.props.toggleSorting(columnName)
  }

  render() {

    const self = this;
    const props = self.props;

    let {item} = props;

    return (
      <Layer flex flow="wrap nowrap" justify="flex-start" align="center" style={{width : item.width}} className="ptb5 w100">
        {this.props.children}
        <Button onClick={self.toggleSorting.bind(self, item.name)} tabIndex={-1} className="w50px" ghost size="small" icon={this.props.sortType === 'none' ? 'minus' : this.props.sortType === 'desc' ? 'chevron-down' : 'chevron-up' } />
      </Layer>
    );
  }
}


export default class GridHeader extends React.Component<any, any>{
  public toggleSorting(key) {
    this.props.toggleSorting(key);
  }
  render() {

    const self = this;
    const props = self.props;

    let createColumns = (item, index) => {
      if (item.headerTemplate) {
        return (
          <Layer style={{width : item.width}} key={index} className="ptb5 w100">
            {item.headerTemplate()}
          </Layer>
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
          <Layer flex flow="wrap nowrap" justify="flex-start" align="center" style={{width : item.width}} key={index} className="ptb5 w100">
            <a>{item.name}</a>
          </Layer>
        )
      }
    }

    if (props.hideHeader) {
      return null;
    } else {
      return(
        <Layer className="r-GridHeader" flex flow="row nowrap">
          {this.props.columns.map(createColumns)}
        </Layer>
      )
    }
  }
}
