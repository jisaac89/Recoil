/// <reference path="../../recoil.d.ts" />

import * as React from 'react';
import * as classNames from 'classnames';
import './Shrink.less';

export default class Shrink extends React.Component<any, any>{
  public render() {
    const self = this;
    const props = self.props;

    let shrinkClass = classNames(
      'r-Shrink',
      {'e-shrink': (props.if)},
      {'h100': (props.fill)},
      {'w100': (props.fill)},
      props.className
    );

    return (
      <div className={shrinkClass}>
        {props.children}
      </div>
    );
  }
}
