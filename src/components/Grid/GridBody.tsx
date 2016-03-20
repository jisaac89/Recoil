import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Door from '../Door/Door';

import GridRow from './GridRow';


class GridRowTemplate extends React.Component<any,any>{

  constructor() {
    super();
    this.state = {
      open : false
    }
  }

  detailTemplateOpen() {
    ;
  }

  render() {
    const self = this;
    const props = self.props;
    const key = props.i;

    return (
      <tr>
        <td className="p0" colSpan={this.props.columns.length + 1}>
          <Door open={props.expanded}>
            {self.props.detailTemplate(key, self.props.dataSource[key])}
          </Door>
        </td>
      </tr>
    )
  }
}

export default class GridBody extends React.Component<any,any>{

  constructor() {
    super();
    this.state = {
      expandedRows : []
    }
  }

  toggleDetailTemplate(i) {
    let expanded = [];
    console.log(i);
    expanded.push(i);

    this.setState({
      expandedRows : expanded
    })
  }

  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource} = props;

    let rowArray = [];

    for (let key in self.props.dataSource) {
      if (props.detailTemplate) {
        rowArray.push(
          [<GridRow expanded={this.state.expandedRows.includes(key)} toggleDetailTemplate={this.toggleDetailTemplate.bind(this)} key={key} i={key} {...props} />],
          [<GridRowTemplate expanded={this.state.expandedRows.includes(key)} i={key} {...props} />]
        )
      } else {
        rowArray.push(
          <GridRow detailTemplate={props.detailTemplate} key={key} i={key} {...props} />
        )
      }
    }

    return (
      <tbody className="r-Grid__Body" style={{height : this.props.height}}>
        {rowArray}
      </tbody>
    )
  }
}
