import * as React from 'react';
import Selectable from '../Selectable/Selectable';
import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Emerge from '../Emerge/Emerge';
import Dropdown from '../Dropdown/Dropdown';

export interface IGridColumnProps {
  dataSource ? : any;
  columns ? : any;
  i ? : any;
  x ? : any;
  hideColumns ? : any;
  columnTemplate? : any;
}

export default class GridColumn extends React.Component<IGridColumnProps, {}>{
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
        }
        else if ((typeof dataSource[i][columns[x].name] === 'object' && columns[x].template) || (typeof dataSource[i][columns[x].name] === 'string' && columns[x].template)) {
          return columns[x].template(dataSource[i]);
        }
        else if (typeof dataSource[i][columns[x].name] === 'object') {
          return (
            <Dropdown material type="button" title={Object.keys(dataSource[i][columns[x].name]).length + " { objects }"} dataSource={dataSource[i][columns[x].name]} sortable />
          )
        }
        else {
          return dataSource[i][columns[x].name];
        }
    }

    if (props.hideColumns && props.hideColumns.indexOf(columns[x].name) !== -1) {
        return null;
    }
    else {
      return (
        <td className="r-Grid__Row__Column" style={{width: columns[x].width +'px'}} key={i+x}>
          {columnPartial()}
        </td>
      )
    }
  }
}
