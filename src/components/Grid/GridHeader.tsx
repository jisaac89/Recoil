import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

interface IGridHeaderProps {
  toggleSorting ? : any;
  sortable ? : boolean;
  hideHeader ? : boolean;
  columns? : any;
  detailTemplate ? : () => void;
  item ?: any;
  children ? : any;
  dataSource ? : any;
  sortType ? : any;
  dataType ? : any;
  hideColumns ? : any;
}

interface IGridHeaderSortableState {
  columns ? : any;
  sortType ? : string;
}

class GridHeaderSortable extends React.Component<IGridHeaderProps,IGridHeaderSortableState>{

  constructor() {
    super();
    this.state = {
      sortType: 'none',
      columns: []
    }
  }

  toggleSorting(columnName) {

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
        <Button onClick={self.toggleSorting.bind(self, item.name)} tabIndex={-1} className="w50px" ghost icon={this.state.sortType === 'none' ? 'minus' : this.state.sortType === 'desc' ? 'caret-down' : 'caret-up' } />
      </th>
    );
  }
}

export default class GridHeader extends React.Component<IGridHeaderProps,{}>{
  toggleSorting(key, sortType) {
    this.props.toggleSorting(key, sortType);
  }
  render() {

    const self = this;
    const props = self.props;

    let headerTitle;

    let createColumns = (item, index) => {
      if (props.hideColumns && props.hideColumns.length > 0 && props.hideColumns.includes(item.name) ) {
        return null
      } else{
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
    }

    if (!props.hideHeader && props.columns) {
      return(
        <thead className="r-Grid__Header">
          <tr>
            {(()=>{
              if (this.props.detailTemplate) {
                return (
                  <th className="p0" width={5}>
                    <Button ghost className="p5 ps10" tabIndex={-1} icon="caret-right"></Button>
                  </th>
                )
              }
            })()}
            {this.props.columns.map(createColumns)}
          </tr>
        </thead>
      )
    } else {
      return null;
    }
  }
}
