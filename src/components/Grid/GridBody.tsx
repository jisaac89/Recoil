import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Door from '../Door/Door';

import GridRow from './GridRow';

export default class GridBody extends React.Component<any,any>{

  constructor() {
    super();
  }

  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource} = props;

    let rowArray = [];

    for (let key in self.props.dataSource) {
      if (props.detailTemplate) {
        rowArray.push(
          [<GridRow key={key} i={key} {...props} />],
          [<tr>
            <td className="p0" colSpan={this.props.columns.length + 1}>
              <Door open={false}>
                {self.props.detailTemplate(key, self.props.dataSource[key])}
              </Door>
            </td>
          </tr>]
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
