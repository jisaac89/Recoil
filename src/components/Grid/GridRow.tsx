import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

import GridColumn from './GridColumn';

export interface IGridRowProps {
  onRowSelect ? : any;
  detailTemplateOpenOnSelect ? : boolean;
  toggleDetailTemplate ? : any;
  columns ? : any;
  dataSource ? : any;
  i ? : any;
  selected ? : any;
  detailTemplate ? : any;
  expanded ? : boolean;
  hideColumns? : any;
  columnTemplate? : any;
  detailTemplateOpenOnHover? : boolean;
  item? : any;
  includes ? : any;
  selectedKey? : string;
  selectedItem? : any;
  detailTemplateOpenOnRowSelect? : boolean;
}

export interface IGridRowState {
  selected ? : boolean;
}

export default class GridRow extends React.Component<IGridRowProps, IGridRowState>{

  onRowSelect(item) {
    this.props.onRowSelect(item);
  }

  toggleDetailTemplate(i, item) {
    this.props.toggleDetailTemplate(i, item);
    if(this.props.onRowSelect) {
      this.props.onRowSelect(item);
    }
  }

  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource, i, onRowSelect, detailTemplateOpenOnHover, expanded} = props;

    let columnArray = [];
    let item = self.props.dataSource[i];
    let detailTemplateIconColumn = <td className="p0" width={5}><i className={"r-Grid__Row__Sort fa ps10 fa-" + (expanded ? "caret-down" : "caret-right")} onClick={this.toggleDetailTemplate.bind(this, i)} tabIndex={-1}></i></td>;

    for (let x = 0; x < columns.length; x++) {
      columnArray.push(
        <GridColumn key={x} dataSource={dataSource} i={i} x={x} columns={columns} hideColumns={props.hideColumns} columnTemplate={props.columnTemplate} />
      )
    }

    let tableRowProps;

    if(props.detailTemplate) {
      tableRowProps = {
        onMouseEnter: detailTemplateOpenOnHover ? self.toggleDetailTemplate.bind(this, i) : null,
        onClick: this.toggleDetailTemplate.bind(this, i, item),
        className: "r-Grid__Row" + (this.props.selectedItem ? ' e-selected' : '')
      }
    } else {
      tableRowProps = {
        onClick:this.props.onRowSelect ? this.onRowSelect.bind(this, item) : null,
        className:"r-Grid__Row" + (this.props.selectedItem ? ' e-selected' : '')
      }
    }

    return (
        <tr {...tableRowProps}>
          {props.detailTemplate ? detailTemplateIconColumn : null }
          {columnArray}
        </tr>
    )
  }
}