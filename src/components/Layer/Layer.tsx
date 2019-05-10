import classNames from 'classnames';
import React from 'react';
import { IRecoil } from '../../index';

export interface ILayerProps extends IRecoil {
  border?: boolean;
  overflow?: boolean;
  left?: boolean;
  right?: boolean;
  scrollY?: boolean;
  scrollX?: boolean;
  style?: Object;
  onClick?: () => void;
  key?: string | number;
  parent?: boolean;
  child?: boolean;
  dimensions?: [string, string, number];
  nightmode?: boolean;
  scroll?: boolean;
  offset?: number;
  shadow?: boolean;
  flexCenter?: boolean;
  onScroll?: any;
  id?: string;
  borderRadius?: boolean;
  dropShadow?: boolean;
  length?: number;
}

class Layer extends React.Component<ILayerProps, any> {
  public static defaultProps = {
    overflow: false,
    type: '',
    left: false,
    right: false,
    border: '',
    flexCenter: false
  };
  public static refs: {
    [key: string]: Element;
    Layer: HTMLElement;
  };

  render() {
    const self = this;
    const props = self.props;

    let dimensionStyle;

    if (props.dimensions) {
      dimensionStyle = {
        width: props.dimensions[0],
        height: props.dimensions[1],
        zIndex: props.dimensions[2]
      };
    }

    const layerClass = classNames(
      'r-Layer',
      { flohide: props.overflow },
      { 'pull-left': props.left },
      { 'pull-right': props.right },
      { 'e-NightMode': props.nightmode },
      { 'e-scroll': props.scroll },
      { 'e-scroll-y': props.scrollY },
      { 'e-scroll-x': props.scrollX },
      { 'e-borderRadius': props.borderRadius },
      { 'e-dropShadow': props.dropShadow },
      { disabled: props.disabled },
      { 'e-flex': !!props.flex },
      { 'e-flex-row': props.flex === 'row' },
      { 'e-fill': props.fill },
      { parent: props.parent },
      { child: props.child },
      { 'e-shadow': props.shadow },
      { 'e-flex-center': props.flexCenter },
      { 'border-all': props.border },
      props.theme,
      props.className
    );

    return (
      <div
        id={props.id}
        onScroll={this.props.onScroll}
        tabIndex={props.tabIndex}
        ref='Layer'
        onClick={props.onClick}
        className={layerClass}
        style={Object.assign({}, dimensionStyle, props.style)}>
        {props.children}
      </div>
    );
  }
}

export { Layer };
