import * as React from 'react';

export interface IShrinkProps {
  if?: boolean;
  fill?: boolean;
  className?: string;
  children?: any;
  opacity?: number;
  scale?: number | string;
  position?: string;
  flex?: boolean;
}

export default class Shrink extends React.Component<IShrinkProps, {}> {
  public static defaultProps = {
    opacity: 5,
    scale: 0.98,
    position: 'relative'
  };

  public render() {
    const self = this;
    const props = self.props;

    let shrinkStyle;

    // let shrinkClass = classNames(
    //   'r-Shrink',
    //   { 'e-shrink': props.if },
    //   { 'e-fill': props.fill },
    //   { 'e-flex': props.flex },
    //   props.className
    // );

    if (props.if && !!shrinkStyle) {
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
      // <div className={shrinkClass} style={shrinkStyle}>
      //   {props.children}
      // </div>
      <div>Shrink</div>
    );
  }
}
