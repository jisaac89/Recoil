import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';

export default class GridBody extends React.Component<any, any>{
  public addItemToCart(uid) {
    this.props.addItemToCart(uid);
  }
  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource} = props;

    let rowArray = [];

    for (let key in self.props.dataSource) {

      let columnArray = [];
      for (let x = 0; x < columns.length; x++) {
        columnArray.push(
          <Layer key={key+x} className="p5 w100">
            {(()=>{
              if (columns[x].tabbable) {
                return (
                  <Button ghost>
                    {self.props.dataSource[key][columns[x].name]}
                  </Button>
                )
              } else {
                return (
                  <Layer>
                    {self.props.dataSource[key][columns[x].name]}
                  </Layer>
                )
              }
            })()}
          </Layer>
        )
      }

      rowArray.push(
        <Layer block>
          <Layer flex flow="row nowrap" justify="flex-start" className="posrel w100" onClick={this.addItemToCart.bind(this, self.props.dataSource[key].uid)}  key={key}>
            {columnArray}
          </Layer>
          <Selectable checked={props.cart.has(self.props.dataSource[key].uid)} />
        </Layer>
      )
    }

    return (
      <div>
        {rowArray}
      </div>
    )
  }
}
