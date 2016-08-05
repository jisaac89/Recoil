import * as React from 'react';
import * as classNames from 'classnames';

// import DataSource from '../DataSource/DataSource';
import DropdownComponent from './DropdownComponent';

import './Dropdown.less';

interface P {
  rowIsSelectable? : boolean;
  title? : string;
  icon? : string;
  searchTitle? : string;
  searchableKeys? : Array<any>;
  hideHeader? : boolean;
  dataSource? : Array<any>;
  columns? : Array<any>;
  type? : string;
  sortable?  : boolean;
  onClose? : Function;
  ghost? : boolean;
  iconLocation ? : string;
  iconPointer?  : string;
  dropDirection? : string;
  material ? : boolean;
  block ? : boolean;
  detailTemplate? : Function;
}

export default class Dropdown extends React.Component<P, any>{
  constructor(props) {
    super(props);
  }

  render() {
    const self = this;
    const props = self.props;

    return <DropdownComponent {...props} />;
  }
}