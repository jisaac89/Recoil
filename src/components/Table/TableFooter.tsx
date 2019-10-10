import React from 'react';

import Pager from '../Pager/Pager';
import { IPagerProps } from '../Pager/Pager';

export default class TableFooter extends React.Component<any, {}> {
  render() {
    const self = this;
    let props = self.props;
    return <Pager className="p10" {...props} pageSizeDropDirection={props.flex ? 'up' : null} />;
  }
}
