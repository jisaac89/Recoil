import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

import GridRow from './GridRow';

export default class GridBody extends React.Component<any, any>{

  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource} = props;

    let rowArray = [];

    for (let key in self.props.dataSource) {
      rowArray.push(
        <GridRow key={key} i={key} {...props} />
      )
    }

    if (props.columns) {
      return (
        <tbody className="r-Grid__Body" style={{height : this.props.height}}>
          {rowArray}
        </tbody>
      )
    } else {
      return null;
    }
  }
}
