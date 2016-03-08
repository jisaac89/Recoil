import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

export default class GridColumn extends React.Component<any,any>{
  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let {dataSource, columns, i, x} = props;

    let columnPartial = () => {
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
    }

    return (
      <Layer style={{width: columns[x].width}} key={i+x} className="animated fadeInUp p5 w100">
        {columnPartial()}
      </Layer>
    )
  }
}
