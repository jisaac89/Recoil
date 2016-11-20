import * as React from 'react';
import * as classNames from 'classnames';
import './SlideIn.less';

export interface ISlideInProps {
  if? : boolean;
  fill? : boolean;
  from? : 'left' | 'right' | 'top' | 'bottom';
  className? : string;
  offset? : number;
  onClick? : () => void;
  children? : Array<any>;
  fixed ? : boolean;
}

export default class SlideIn extends React.Component<ISlideInProps, any>{
  constructor(props){
    super(props);
    this.state = {
     offset: props.offset || 0,
     axis : props.from === 'left' || 'right' ? 'X' : 'Y',
     slideInContainerStyle: null
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        slideInContainerStyle : nextProps.if ? {transform : 'translate'+this.state.axis+'('+this.state.offset+')'} : null,
        offset : nextProps.offset
    });
  }
  render() {
    const self = this;
    const props = self.props;
    let {fill, fixed} = props;

    let slideInContainerClass = classNames(
      'r-SlideIn',
      {'e-open': (props.if)},
      {'fill': (fill)},
      {'fixed': (fixed)},
      props.className,
      props.from
    );

    return(
      <div tabIndex={-1} onClick={props.onClick} ref="slideIn" className={slideInContainerClass} style={this.state.slideInContainerStyle}>
          {props.children}
      </div>
    );
  }
}