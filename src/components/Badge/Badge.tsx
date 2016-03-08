import * as React from 'react';
import * as classNames from 'classnames';
import './Badge.less';

export default class Badge extends React.Component<any,any> {
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
      {'ghost': (props.ghost)}
    );

    return (
      <div style={badgeStyle} className={badgeClass}>
        {props.children}
        <div className={itemClass}>{props.title}</div>
      </div>
    );
  }
}
