import * as React from 'react';
import * as classNames from 'classnames';

// import DataSource from '../DataSource/DataSource';
import DropdownComponent from './DropdownComponent';

import './Dropdown.less';

interface P {
  rowIsSelectable? : boolean;
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

// return React.createElement(DataSource(<DropdownComponent {...props} />))