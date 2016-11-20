import * as React from 'react';
import * as classNames from 'classnames';
import './Layer.less';

interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
export let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
        return;
};

export interface ILayerProps {
  border? : boolean;
  overflow? : boolean;
  left? : boolean;
  right? : boolean;
  scrollY? : boolean;
  scrollX? : boolean;
  fill? : boolean;
  theme? : string;
  children? : any;
  className? : any;
  style? : any;
  onClick?: () => void;
  block? : boolean;
  key? : any;
  parent? : boolean;
  child? : boolean;
  dimensions?:any;
  disabled? : boolean;
  nightmode ? : boolean;
}

export default class Layer extends React.Component<ILayerProps, {}> {
  public static defaultProps = {
    overflow: false,
    type: '',
    left: false,
    right: false,
    border: ''
  };
  constructor(props) {
    super(props);
  }
  render() {
    const self = this;
    const props = self.props;
    let borderClass;

    if (props.border) {
      borderClass = 'border'+props.border;
    } else {
      borderClass = null;
    }

    let dimensionStyle;

    if(props.dimensions) {
      dimensionStyle = {
        width: props.dimensions[0],
        height: props.dimensions[1],
        zIndex: props.dimensions[2]
      }
    }

    let layerClass = classNames(
      'r-Layer',
      {'flohide' : (props.overflow)},
      {'pull-left': (props.left)},
      {'pull-right': (props.right)},
      {'e-NightMode': (props.nightmode)},
      {'e-scroll-y': (props.scrollY)},
      {'e-scroll-x': (props.scrollX)},
      {'disabled': (props.disabled)},
      {'fill': (props.fill)},
      {'parent': (props.parent)},
      {'child': (props.child)},
      borderClass,
      props.theme,
      props.className
    );

    return(
      <div onClick={props.onClick} className={layerClass} style={Object.assign({},dimensionStyle, props.style)}>
        {props.children}
      </div>
    );
  }
}