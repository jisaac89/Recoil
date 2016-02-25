//was a sample test online... will need to rework
import * as React from 'react';
import './Grid.less';

import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

import GridHeader from './GridHeader';
import GridBody from './GridBody';

export default class Grid extends React.Component<any, any>{
  render() {

    const self = this;
    const props = self.props;

    let {columns, dataSource} = props;

    console.log(this.props.dataSource);
    return (
      <Layer className={'w100'}>
        <GridHeader
          columns={columns}
          dataSource={dataSource}
        />
        <GridBody
          addItemToCart={this.props.addItemToCart}
          cart={props.cart}
          columns={columns}
          dataSource={dataSource}
        />
      </Layer>
    )
  }
}
