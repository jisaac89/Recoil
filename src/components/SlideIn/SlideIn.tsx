import * as React from 'react';
import * as classNames from 'classnames';
import './SlideIn.less';

export interface ISlideInProps {
  if? : boolean;
  fill? : any;
  from? : any;
  className? : any;
  offset? : any;
  onClick? : any;
  children? : any;
  fixed ? : boolean;
}

export default class SlideIn extends React.Component<ISlideInProps, {}>{

  constructor(props){
    super(props);
  }
  render() {
    const self = this;
    const props = self.props;
    let axis, slideInContainerStyle;

    let slideInContainerClass = classNames(
      'r-SlideIn',
      {'e-open': (props.if)},
      {'fill': (props.fill)},
      {'fixed': (props.fixed)},
      props.className,
      props.from
    );

    switch (props.from) {
      case 'left' || 'right':
        axis = 'X';
        break;
      case 'top' || 'bottom':
        axis = 'Y';
        break;
      default:

    }

    let offset;

    if (props.offset) {
      offset = props.offset;
    } else {
      offset = '0px';
    }

    if (props.if) {
      slideInContainerStyle = {
        transform : 'translate'+axis+'('+offset+')'
      };
    } else {
      slideInContainerStyle = null;
    }

    return(
      <div tabIndex={-1} onClick={props.onClick} ref="slideIn" className={slideInContainerClass} style={slideInContainerStyle}>
          {props.children}
      </div>
    );
  }
}