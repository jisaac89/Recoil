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

  public onSelect(item) {
    this.props.onSelect(item);
    this.props.selected(item);
  }

  public render(){

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

    // if (this.props.selected) {
    //   selectedItem = this.props.selected();
    // } else {
    //   selectedItem = false;
    // }
    //
    // if (selectedItem) {
    //   selectedItem = self.props.selected(self.props.dataSource[i]);
    // } else {
    //   selectedItem = false
    // }

    return (
      <div className={"r-GridRow" + (selectedItem ? ' selected' : '')}>
        <Layer flex flow="row nowrap" justify="flex-start" className="posrel w100" onClick={this.props.onSelect ? this.onSelect.bind(this, self.props.dataSource[i]) : null}>
          {columnArray}
        </Layer>
        <Selectable checked={false} />
      </div>
    )
  }
}
