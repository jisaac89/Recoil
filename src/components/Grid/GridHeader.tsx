import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';

export default class GridHeader extends React.Component<any, any>{
  render() {

    const self = this;
    const props = self.props;

    let createColumns = (item, index) => {
      if (item.titleTemplate) {
        return (
          <Layer style={{width : item.width}} key={index} className="p5 w100">
            {item.titleTemplate}
          </Layer>
        )
      } else {
        return (
          <Layer style={{width : item.width}} key={index} className="p5 w100">
            <a>{item.name}</a>
          </Layer>
        )
      }
    }

    if (props.hideHeader) {
      return null;
    } else {
      return(
        <Layer flex flow="row nowrap">
          {this.props.columns().map(createColumns)}
        </Layer>
      )
    }
  }
}
