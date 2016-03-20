import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

import GridColumn from './GridColumn';

export default class GridRow extends React.Component<any,any>{

  constructor() {
    super();
    this.state = {
      selected: false
    }
  }

  onSelect(item) {
    this.props.onSelect(item);
    this.props.selected(item);
  }

  toggleDetailTemplate(i) {
    this.props.toggleDetailTemplate(i);
  }

  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource, i} = props;

    let columnArray = [];

    for (let x = 0; x < columns.length; x++) {
      columnArray.push(
        <GridColumn key={x} dataSource={dataSource} i={i} x={x} columns={columns} />
      )
    }

    let selectedItem;

    if (props.detailTemplate) {
      return (
        <tr onClick={this.props.onSelect ? this.onSelect.bind(this, self.props.dataSource[i]) : null} className={"r-Grid__Row" + (selectedItem ? ' selected' : '')}>
          <td width={30}><Button onClick={this.toggleDetailTemplate.bind(this, i)} tabIndex={-1} icon={this.props.expanded ? "caret-down" : "caret-right"}></Button></td>
          {columnArray}
        </tr>
      )
    } else {
      return (
        <tr onClick={this.props.onSelect ? this.onSelect.bind(this, self.props.dataSource[i]) : null} className={"r-Grid__Row" + (selectedItem ? ' selected' : '')}>
          {columnArray}
        </tr>
      )
    }

  }
}
