import * as React from 'react';
import * as classNames from 'classnames';

// import DataSource from '../DataSource/DataSource';
import DropdownComponent from './DropdownComponent';

import './Dropdown.less';

interface P {
  rowIsSelectable? : boolean;
  icon? : string;
  searchTitle? : string;
  searchableKeys? : Array<any>;
  hideHeader? : boolean;
  dataSource? : Array<any>;
  columns? : Array<any>;
  sortable?  : boolean;
  onClose? : Function;
  ghost? : boolean;
  type?: '' | 'button' | 'selection' | 'search';
  title?: string;
  iconLocation?: 'left' | 'right';
  iconPointer? : 'left' | 'right' | 'up' | 'down';
  dropDirection? : string;
  material ? : boolean;
  block ? : boolean;
  detailTemplate? : Function;
  onChange ? : Function;
  theme?: 'success' | 'primary' | 'error';
  size? : 'small' | 'medium' | 'large' | 'xlarge';
  pointer? : 'left' | 'right' | boolean;
  pageSize? : any;
  simple? : boolean;
  outline? : boolean;
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