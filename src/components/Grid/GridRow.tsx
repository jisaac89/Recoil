import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

import GridColumn from './GridColumn';

interface IGridRowProps {
  onSelect ? : any;
  openOnSelect ? : any;
  toggleDetailTemplate ? : any;
  columns ? : any;
  dataSource ? : any;
  i ? : any;
  selected ? : any;
  detailTemplate ? : any;
  expanded ? : boolean;
}

interface IGridRowState {
  selected ? : boolean;
}

export default class GridRow extends React.Component<IGridRowProps,IGridRowState>{

  constructor() {
    super();
    this.state = {
      selected: false
    }
  }

  onSelect(key, item) {
    const self = this;
    self.props.onSelect(key, item);
    // this.props.selected(key, item);
    if (self.props.openOnSelect) {
        self.toggleDetailTemplate(key);
    }
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
    let selectEvent;

    if (props.onSelect) {
        selectedItem = props.selected.includes(i);
    }

    if (props.detailTemplate) {
      return (
        <tr onClick={this.props.onSelect ? this.onSelect.bind(this, i, self.props.dataSource[i]) : null} className={"r-Grid__Row" + (selectedItem ? ' selected' : '')}>
          <td className="p0" width={5}>
            <Button className="p5 ps10" ghost onClick={this.toggleDetailTemplate.bind(this, i)} tabIndex={-1} icon={this.props.expanded ? "caret-down" : "caret-right"}>
            </Button>
          </td>
          {columnArray}
        </tr>
      )
    } else {
      return (
        <tr onClick={this.props.onSelect ? this.onSelect.bind(this, i, self.props.dataSource[i]) : null} className={"r-Grid__Row" + (selectedItem ? ' selected' : '')}>
          {columnArray}
        </tr>
      )
    }

  }
}
