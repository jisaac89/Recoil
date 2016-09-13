import * as React from 'react';
import * as classNames from 'classnames';

import DataSource from '../DataSource/DataSource';
import TreeComponent from './TreeComponent';

import './Tree.less';

interface P {
  rowIsSelectable? : boolean;
  icon? : string;
  searchTitle? : string;
  searchableKeys? : Array<any>;
  hideHeader? : boolean;
  dataSource? : Array<any>;
  columns? : Array<any>;
  sortable?  : boolean;
  onClose? : (event: React.MouseEvent) => void;
  simple? : boolean;
  type?: '' | 'button' | 'selection' | 'search';
  title?: string | number;
  iconLocation?: 'left' | 'right';
  iconPointer? : 'left' | 'right' | 'up' | 'down';
  dropDirection? : string;
  material ? : boolean;
  block ? : boolean;
  detailTemplate? : (event: React.MouseEvent) => void;
  onChange ? : (event: React.MouseEvent) => void;
  theme?: 'success' | 'primary' | 'error';
  size? : 'small' | 'medium' | 'large' | 'xlarge';
  pointer? : 'left' | 'right' | boolean;
  pageSize? : any;
  outline? : boolean;
}

export default class Tree extends React.Component<P, any>{
  constructor(props) {
    super(props);
  }

  render() {
    const self = this;
    const props = self.props;

     return React.createElement(DataSource(<TreeComponent {...this.props} />))
  }
}