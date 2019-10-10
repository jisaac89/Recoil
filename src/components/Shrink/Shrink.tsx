import React from 'react';
import classNames from 'classnames';

export interface IShrinkProps {
  if?: boolean;
  fill?: boolean;
  className?: string;
  children?: React.ReactNode;
  opacity: number;
  scale?: number | string;
  position?: React.CSSProperties['position'];
  flex?: boolean;
}

export default class Shrink extends React.Component<IShrinkProps> {
  public static defaultProps = {
    opacity: 5,
    scale: 0.98,
    position: 'relative'
  };

  public render() {
    const self = this;
    const props = self.props;

    let shrinkStyle: React.CSSProperties;

    let shrinkClass = classNames(
      'r-Shrink',
      { 'e-shrink': props.if },
      { 'e-fill': props.fill },
      { 'e-flex': props.flex },
      props.className
    );

    if (props.if) {
      shrinkStyle = {
        transform: 'scale(' + props.scale + ')',
        opacity: props.opacity / 100,
        position: props.position
      };
    } else {
      shrinkStyle = {
        position: props.position
      };
    }

    return (
      <div className={shrinkClass} style={shrinkStyle}>
        {props.children}
      </div>
    );
  }
}
