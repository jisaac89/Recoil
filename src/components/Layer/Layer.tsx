import * as React from 'react';
import classNames from 'classnames';
import './Layer.less';

interface ILayerProps {
  border? : boolean;
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
  align? : any;
  flex? : any;
  flow? : any;
  justify? : any;
}

interface ILayerState {}

export default class Layer extends React.Component<ILayerProps, ILayerState> {
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

    // FLEX ===============================

    let flexFlow;
    let flexStyle;

    if (props.flex) {
      flexStyle = {
        'WebkitFlexFlow' : props.flow !== '' && props.flow ? props.flow : 'row nowrap',
        'justifyContent' : props.justify ? props.justify : 'flex-start',
        'alignItems' : props.align ? props.align : 'stretch',
        'WebkitFlex' : props.flex !== '' ? props.flex : null,
      }
    }

    // ====================================

    let layerClass = classNames(
      'r-Layer',
      {'flohide' : (props.overflow)},
      {'pull-left': (props.left)},
      {'pull-right': (props.right)},
      {'e-scroll-y': (props.scrollY)},
      {'e-scroll-x': (props.scrollX)},
      {'h100': (props.fill)},
      {'w100': (props.fill)},
      {'flex': (props.flex)},
      borderClass,
      props.type,
      props.className
    );

    return(
      <div onClick={props.onClick} className={layerClass} style={flexStyle}>
        {props.children}
      </div>
    );
  }
}
