import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

class GridRow extends React.Component<any,any>{


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
        <Layer flex flow="column nowrap" justify="center" align="flex-start" style={{width: columns[x].width}} key={i+x} className="p5 w100">
          {(()=>{
            if (columns[x].tabbable) {
              return (
                <Button>
                  {dataSource[i][columns[x].name]}
                </Button>
              )
            } else if (columns[x].template) {
                return (
                  <Layer>
                    {columns[x].template(dataSource[i])}
                  </Layer>
                )
              } else {
              return (
                <Layer>
                  {dataSource[i][columns[x].name]}
                </Layer>
              )
            }
          })()}
        </Layer>
      )
    }

    let selectedItem;

    if (selectedItem) {
      selectedItem = self.props.selected(self.props.dataSource[i]);
    } else {
      selectedItem = false
    }

    return (
      <div className={"re-GridRow posrel w100 flohide " + (selectedItem ? 'selected' : null)}>
        <Layer flex flow="row nowrap" justify="flex-start" className="posrel w100" onClick={this.props.onSelect ? this.onSelect.bind(this, self.props.dataSource[i]) : null}>
          {columnArray}
        </Layer>
        <Selectable checked={selectedItem} />
      </div>
    )
  }
}

export default class GridBody extends React.Component<any, any>{

  render(){

    const self = this;
    const props = self.props;

    let {columns, dataSource} = props;

    let rowArray = [];

    for (let key in self.props.dataSource) {
      rowArray.push(
        <Layer  key={key}>
          <GridRow i={key} {...props} />
        </Layer>
      )
    }

    return (
      <Layer className="r-GridBody">
        <Emerge if={true} exit="fadeOut" delay={40}>
          {rowArray}
        </Emerge>
      </Layer>
    )
  }
}
