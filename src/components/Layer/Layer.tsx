import * as React from 'react';
import classNames from 'classnames';
import './Layer.less';

interface ILayerProps {
  border? : boolean;
  flex? : boolean;
  overflow? : boolean;
  left? : boolean;
  right? : boolean;
  scrollY? : boolean;
  scrollX? : boolean;
  fill? : boolean;
  type? : string;
  children? : any;
  className? : any;
  style? : any;
  onClick?: () => void;
  block? : any;
  key? : any;
}

interface ILayerState {}

export default class Layer extends React.Component<ILayerProps, ILayerState> {
  public static defaultProps = {
    overflow: false,
    type: '',
    flex: false,
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

    let layerClass = classNames(
      'r-Layer',
      {'flexit' :(props.flex)},
      {'flohide' : (props.overflow)},
      {'pull-left': (props.left)},
      {'pull-right': (props.right)},
      {'e-scroll-y': (props.scrollY)},
      {'e-scroll-x': (props.scrollX)},
      {'h100': (props.fill)},
      {'w100': (props.fill)},
      borderClass,
      props.type,
      props.className
    );
    return(
      <div onClick={props.onClick} className={layerClass} style={props.style}>
        {props.children}
      </div>
    );
  }
}
