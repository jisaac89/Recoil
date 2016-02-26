import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

export default class GridBody extends React.Component<any, any>{
  public onSelect(key) {
    this.props.onSelect(key);
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
          <Layer flex flow="column nowrap" justify="center" align="flex-start" style={{width: columns[x].width}} key={key+x} className="ptb5 w100">
            {(()=>{
              if (columns[x].tabbable) {
                return (
                  <Button ghost>
                    {dataSource[key][columns[x].name]}
                  </Button>
                )
              } else if (columns[x].template) {
                  return (
                    <Layer>
                      {columns[x].template(dataSource[key])}
                    </Layer>
                  )
                } else {
                return (
                  <Layer>
                    <small>{dataSource[key][columns[x].name]}</small>
                  </Layer>
                )
              }
            })()}
          </Layer>
        )
      }

      rowArray.push(
        <div className="posrel w100 flohide" key={key}>
          <Layer flex flow="row nowrap" justify="flex-start" className="posrel w100" onClick={this.onSelect.bind(this, self.props.dataSource[key])}>
          {columnArray}
          </Layer>
          <Selectable checked={props.selected ? props.selected.has(key) : false} />
        </div>
      )
    }

    return (
      <Layer className="r-GridBody">
        <Emerge delay={40}>
          {rowArray}
        </Emerge>
      </Layer>
    )
  }
}
