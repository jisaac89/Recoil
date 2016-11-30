import * as React from 'react';
import Selectable from '../Selectable/Selectable';

import DropdownTable from './DropdownTable';

interface IDropdownWrapperProps {
    selectItem?: (item: any) => void;
    dataSource?: Array<any> | Object;
    onRowSelect?: (item: any) => void;
    selected?: Array<any>;
    material?: boolean;
    open?: boolean;
    width?: string;
    searchableKeys?: Array<any>;
    selectedElements?: Array<any>;
    selectedKey?: string;
    mobile? : boolean;
}

export default class DropdownWrapper extends React.Component<IDropdownWrapperProps, {}> {
  selectItem(item) {
    this.props.selectItem(item);
  }
  render() {

    const self = this;
    const props = self.props;

    let DropdownContent;

    if (props.dataSource) {
      DropdownContent = <DropdownTable {...props} />;
    } else {
      DropdownContent = props.children;
    }

    return(
      <div style={!props.mobile ? {width : this.props.width} : {width: '100%'}} className={props.mobile ? "e-flex fill": "r-DropdownWrapper"}>
        {DropdownContent}
      </div>
    );
  }
}
