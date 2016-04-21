import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

import GridColumn from './GridColumn';

interface IGridRowProps {
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

interface IGridRowState {
  selected ? : boolean;
}

export default class GridRow extends React.Component<IGridRowProps,IGridRowState>{

  onRowSelect(item) {
    this.props.onRowSelect(item);
  }

  toggleDetailTemplate(i) {
    this.props.toggleDetailTemplate(i);
  }

  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource, i, onRowSelect, detailTemplateOpenOnHover, expanded} = props;

    let item = self.props.dataSource[i];
    let columnArray = [];

    for (let x = 0; x < columns.length; x++) {
      columnArray.push(
        <GridColumn key={x} dataSource={dataSource} i={i} x={x} columns={columns} hideColumns={props.hideColumns} columnTemplate={props.columnTemplate} />
      )
    }

    let selectEvent;

    if (props.detailTemplate) {
      return (
        <tr
          onMouseEnter={detailTemplateOpenOnHover ? self.toggleDetailTemplate.bind(this, i) : null}
          onClick={this.toggleDetailTemplate.bind(this, i)}
          className={"r-Grid__Row" + (this.props.selectedItem ? ' e-selected' : '')}
        >
          {(()=>{
            if (!this.props.detailTemplateOpenOnRowSelect) {
              return (
                <td className="p0" width={5}>
                  <i className={"r-Grid__Row__Sort fa pl20 fa-" + (expanded ? "caret-down" : "caret-right")} onClick={this.toggleDetailTemplate.bind(this, i)} tabIndex={-1}></i>
                </td>
              )
            }
          })()}
          {columnArray}
        </tr>
      )
    } else {
      return (
        <tr
          onClick={this.props.onRowSelect ? this.onRowSelect.bind(this, item) : null}
          className={"r-Grid__Row" + (this.props.selectedItem ? ' e-selected' : '')}
        >
          {columnArray}
        </tr>
      )
    }
  }
}
