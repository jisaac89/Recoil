import classNames from 'classnames';
import React from 'react';

export interface IOpenProps {
  if: boolean;
  className?: string;
  children?: any;
  overflow?: boolean;
  fill?: boolean;
  openToHeight?: string;
}

class Open extends React.Component<IOpenProps> {
  public refOpen: any;

  render() {
    const self = this;
    const props = self.props;

    const OpenClass = classNames(
      'r-Open',
      { 'e-open': props.if },
      { 'e-close': !props.if },
      { 'e-fill': props.fill },
      props.className
    );

    let hasStyle;

    if (props.openToHeight) {
      hasStyle = { height: props.openToHeight && props.if === true ? props.openToHeight : 0 };
    } else {
      hasStyle = null;
    }

    return (
      <div ref='Open' className={OpenClass} style={hasStyle}>
        {props.openToHeight ? props.children : props.if ? props.children : null}
      </div>
    );
  }
}

export { Open };
