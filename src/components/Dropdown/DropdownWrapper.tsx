import * as React from 'react';
import Selectable from '../Selectable/Selectable';

import DropdownDataSource from './DropdownDataSource';

interface IDropdownWrapperProps {}

export default class DropdownWrapper extends React.Component<IDropdownWrapperProps, {}> {
  selectItem(item) {
    this.props.selectItem(item);
  }
  render() {

    const self = this;
    const props = self.props;

    let DropdownContent;

    if (props.dataSource) {
      DropdownContent = <DropdownDataSource selectItem={this.selectItem.bind(this)} {...props} />;
    } else {
      DropdownContent = props.children;
    }

    return(
      <div className="r-DropdownWrapper">
        {DropdownContent}
      </div>
    );
  }
}
