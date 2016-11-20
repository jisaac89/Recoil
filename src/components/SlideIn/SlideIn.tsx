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

  beforeOpen ? : () => void;
  afterOpen ? : () => void;
}

export default class SlideIn extends React.Component<ISlideInProps, any>{
  
  constructor(props){
    super(props);
    this.state = {
     offset: props.offset || 0,
     axis : props.from === 'left' || 'right' ? 'X' : 'Y',
     style: props.if ? {transform : 'translate'+(props.from === 'left' || 'right' ? 'X' : 'Y')+'('+props.offset+')'} : null,
     showChildren: props.if
    }
  }

  componentWillReceiveProps(nextProps) {
    nextProps.if ? this.open() : this.close();
  }

  open() {
    this.beforeOpen();
    this.afterOpen();
  }

  beforeOpen() {
    this.props.beforeOpen ? this.props.beforeOpen() : null;
    this.slideIn();
  }

  slideIn() {
    this.setState({
        style : {transform : 'translate'+this.state.axis+'('+this.state.offset+')'},
    }, () => {
        this.afterOpen();
    })
  }

  afterOpen() {
    this.setState({
        showChildren: true
    })
  }

  close() {
    this.setState({
        style: null
    }, ()=> {
      this.setState({
        open: false,
        showChildren: false
      })
    })
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
          {this.state.showChildren ? props.children : null}
      </div>
    );
  }

}