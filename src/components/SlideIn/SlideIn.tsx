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
  beforeAnimate? : any;
  afterAnimate? : any;
}

export default class SlideIn extends React.Component<ISlideInProps, any>{
  
  public _beforeAnimate : any;
  public _afterAnimate : any;
  public _animate : any;
  public _animateSlide : any;
  public refs : any;

  constructor(props) {
    super(props);
    
    this._beforeAnimate = this.beforeAnimate || function() {};
    this._afterAnimate = this.afterAnimate || function() {};
    
    const {
      offset = props.amount || 0, duration = props.duration || 400, easing = this.easeOutQuad
    } = props.animate || {};
    
    this._animateSlide = { offset, duration, easing };

    let axis = props.from === 'left' || props.from === 'right' ? 'X' : 'Y';

    this.state = {
      open : props.if || false,
      axis : axis,
      translate: '',
      animating: false,
      showChildren: props.if || false,
      slideInContainerStyle: props.if ? 'translate'+axis+'('+(props.from === 'left' || this.props.from === 'top' ? '-' : '')+''+0+'%)' : 'translate'+axis+'('+(props.from === 'left' || this.props.from === 'top' ? '-' : '')+''+100+'%)'
    }
  }

  // componentDidMount(){
  //   this.props.if ? this.handleAnimate(this.props) : null;
  // }

  componentWillReceiveProps(nextProps) {
    const self = this;
    let props = nextProps || self.props;
    props.if === true && props.if !== this.props.if ? self.handleAnimate(props) : props.if !== this.props.if ? this.animateSlideClosed(props, props.duration || 400) : null;
  }

  animateSlideClosed(props, duration) {
    const self = this;
    const changeX = 100;
    const increment = 20;

    function animate(elapsedTime, props) {
      const elapsed = elapsedTime + increment;
      const positionX = self.easeOutQuad(null, elapsed, 0, changeX, duration);
      self.translateSlideClose(positionX, self.state.axis);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed, props);
        }, increment);
      }
    }

    animate(0, props);

    this.afterClose(props);

  }

  afterClose(props){
    this.setState({
      showChildren: false
    })
  }

  translateSlideClose(x, axis) {
    this.setState({
      slideInContainerStyle : 'translate'+axis+'('+(this.props.from === 'left' || this.props.from === 'top' ? '-' : '')+''+x+'%)'
    })
  }

animateSlide(props, { offset, duration, easing }) {
    const self = this;
    const changeX = 100;
    const increment = 20;

    function animate(elapsedTime, props) {
      const elapsed = elapsedTime + increment;
      const positionX = easing(null, elapsed, changeX, -changeX, duration);
      self.translateSlide(positionX, self.state.axis);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed, props);
        }, increment);
      }
    }

    animate(0, props);

  }

  translateSlide(x, axis) {
    this.setState({
      slideInContainerStyle : 'translate'+axis+'('+(this.props.from === 'left' || this.props.from === 'top' ? '-' : '')+''+x+'%)'
    })
  }

  handleAnimate(props) {
    const self = this;
    this._beforeAnimate(props);
    this._afterAnimate(props);
  }

  beforeAnimate(props) {
    this.props.beforeAnimate;
    this.setState({
      open: true,
      showChildren: false
    }, ()=>{
      this.startAnimating(props)
    })
  }
  startAnimating(props) {
    const self = this;
    this.setState({
      animating: true,
      showChildren: true
    }, ()=>{
      self.animateSlide(props, this._animateSlide);
    })
  }
  afterAnimate(props) {
    this.setState({
      showChildren: true,
      animating: false
    })
    this.props.afterAnimate;
  }
  
  easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
  
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //       slideInContainerStyle : nextProps.if ? {transform : 'translate'+this.state.axis+'('+this.state.offset+')'} : null,
  //       offset : nextProps.offset
  //   });
  // }
  render() {
    const self = this;
    const props = self.props;
    let {fill, fixed} = props;

    let slideInContainerClass = classNames(
      'r-SlideIn',
      { 'e-open': (props.if) },
      { 'e-relative': (!props.from) },
      {'fill': (fill)},
      {'e-fixed': (fixed)},
      props.className,
      props.from
    );

    return(
      <div tabIndex={-1} onClick={props.onClick} ref="slideIn" className={slideInContainerClass} style={{'WebkitTransform' : this.state.slideInContainerStyle}}>
          {props.if ? props.children : null}
      </div>
    );
  }
}
