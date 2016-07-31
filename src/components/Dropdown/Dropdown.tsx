import * as React from 'react';
import * as classNames from 'classnames';

import DataSource from '../DataSource/DataSource';
import DropdownComponent from './DropdownComponent';

import './Dropdown.less';

export default class Dropdown extends React.Component<any, any>{
  constructor(props) {
    super(props);
  }

  render() {
    const self = this;
    const props = self.props;

    return React.createElement(DataSource(<DropdownComponent {...props} />))
  }
}
