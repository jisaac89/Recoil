import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';

interface IGridColumnProps {
  dataSource ? : any;
  columns ? : any;
  i ? : any;
  x ? : any;
}

export default class GridColumn extends React.Component<IGridColumnProps,{}>{
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
      <td className="r-Grid__Row__Column" style={{width: columns[x].width}} key={i+x}>
        {columnPartial()}
      </td>
    )
  }
}
