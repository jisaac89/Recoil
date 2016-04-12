import * as React from 'react';
import * as classNames from 'classnames';
import './Badge.less';

interface IBadgeProps {
  opacity ?: any;
  background ?: string;
  border ?: string;
  type?: string;
  title? : any;
  children? : any;
  ghost ? : boolean;
  className? : any;
}

export default class Badge extends React.Component<IBadgeProps,any> {
  render() {

    const self = this;
    const props = self.props;

    const badgeStyle = {
      opacity: props.opacity ? props.opacity : '',
      backgroundColor: props.background ?  props.background : '',
      WebkitTransition: 'all',
      msTransition: 'all',
      border: props.border ? props.border : ''
    };

    let badgeClass = classNames(
      'r-Badge'
    );

    let itemClass= classNames(
      'r-Badge__item',
      props.type,
      {'ghost': (props.ghost)},
      this.props.className
    );

    return (
      <div style={badgeStyle} className={badgeClass}>
        {props.children}
        <div className={itemClass}>{props.title}</div>
      </div>
    );
  }
}
