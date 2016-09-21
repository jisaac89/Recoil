import * as React from 'react';
import * as classNames from 'classnames';
import './Shrink.less';

export interface IShrinkProps {
  if ? : boolean;
  fill ?  : boolean;
  className ? : any;
  children ? : any;
  opacity ? : any;
  scale ? : any;
}

export default class Shrink extends React.Component<IShrinkProps, {}>{
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
      <div className={shrinkClass} style={{
        'transform' : props.if ? 'scale('+props.scale+')' || 'scale(.98)' : null,
        opacity : props.if ?  props.opacity / 100 ||  5 / 100  : null
      }}>
        {props.children}
      </div>
    );
  }
}
