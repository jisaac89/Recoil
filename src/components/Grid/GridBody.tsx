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
        <Layer key={key}>
          <GridRow i={key} {...props} />
        </Layer>
      )
    }

    if (props.columns) {
      return (
        <div className="r-GridBody">
          <Emerge delay={80}>
            {rowArray}
          </Emerge>
        </div>
      )
    } else {
      return null;
    }
  }
}
