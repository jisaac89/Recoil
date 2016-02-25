import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';

export default class GridHeader extends React.Component<any, any>{
  render() {

    let createColumns = (item, index) => {
      return (
        <Layer key={index} className="p5 w100">
          <a>{item.name}</a>
        </Layer>
      )
    }

    return(
      <Layer flex flow="row nowrap">
        {this.props.columns.map(createColumns)}
      </Layer>
    )
  }
}
