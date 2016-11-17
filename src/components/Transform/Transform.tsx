import * as React from 'react';
import * as classNames from 'classnames';
import './Transform.less';

export interface ITransformProps {
  type? : string;
  className ? : any;
  if ? : boolean;
  push ? : string;
  amount ? : string;
  delay ? : number;
  fill ? : boolean;
  axis ? : string;
  children ? : any;
  beforeAnimate? : any;
  afterAnimate? : any;
}

export default class Transform extends React.Component<ITransformProps, any> {

  public _beforeAnimate : any;
  public _afterAnimate : any;
  public _animate : any;
  public _animateSlide : any;
  
  public static defaultProps = {
    slideIndex: 0
  }

  constructor(props) {
    super(props);
    
    // this._beforeAnimate = this.beforeAnimate || function() {};
    // this._afterAnimate = this.afterAnimate || function() {};
    
    const {
      offset = props.amount || 0, duration = props.duration || 400, easing = this.easeOutQuad
    } = props.animate || {};
    
    this._animateSlide = { offset, duration, easing };

    this.state = {
      open : props.if || false,
      translate: '',
      animating: false,
      showChildren: props.if || false,
      translateSelected: props.if ? props.type+(props.axis)+'('+props.amount+')' : props.type+(props.axis)+'(0)'
    }
  }

  componentDidMount(){
    // this.props.if ? this.handleAnimate(this.props) : null;
  }

  componentWillReceiveProps(nextProps) {
    const self = this;
    let props = nextProps || self.props;
    props.if === true ? self.animateSlide(props, this._animateSlide) : props.if !== this.props.if ? this.animateSlideClosed(props, props.amount, props.duration || 400) : null;
  }

  animateSlideClosed(props, offset, duration) {
    const self = this;
    const changeX = parseInt(offset);
    const increment = 20;

    function animate(elapsedTime, props) {
      const elapsed = elapsedTime + increment;
      const positionX = self.easeOutQuad(null, elapsed, changeX, -changeX, duration);
      self.translateSlideClose(positionX, props.type, props.axis);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed, props);
        }, increment);
      }
    }

    animate(0, props);

  }

  translateSlideClose(x, type, axis) {
    this.setState({
      translateSelected : type+(axis)+'('+x+'px)'
    })
  }

animateSlide(props, { offset, duration, easing }) {
    const self = this;
    const changeX = parseInt(offset);
    const increment = 20;

    function animate(elapsedTime, props) {
      const elapsed = elapsedTime + increment;
      const positionX = easing(null, elapsed, 0, changeX, duration);
      const positionY = easing(null, elapsed, 0, changeX, duration);
      self.translateSlide(positionX, props.type, props.axis);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed, props);
        }, increment);
      }
    }

    animate(0, props);

  }

  translateSlide(x, type, axis) {
    this.setState({
      translateSelected : type+(axis)+'('+x+'px)'
    })
  }

  // handleAnimate(props) {
  //   const self = this;
  //   this._beforeAnimate(props);
  //   this._afterAnimate(props);
  // }

  // beforeAnimate(props) {
  //   this.props.beforeAnimate;
  //   this.setState({
  //     open: true,
  //     showChildren: false
  //   }, ()=>{
  //     this.startAnimating(props)
  //   })
  // }
  // startAnimating(props) {
  //   const self = this;
  //   this.setState({
  //     animating: true,
  //     showSlide: true
  //   }, ()=>{
  //     self.animateSlide(props, this._animateSlide);
  //   })
  // }
  // afterAnimate(props) {
  //   this.setState({
  //     showSlide: true,
  //     animating: false
  //   })
  //   this.props.afterAnimate;
  // }
  
  easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
  public render() {
    const self = this;
    const props = self.props;
    let state = self.state;
    let pushStyle;

    let transformClass = classNames(
      'r-Transform',
      {'e-translate' : (props.type === 'translate')},
      {'e-scale' : (props.type === 'scale')},
      {'e-scale' : (props.type === 'rotate')},
      {'e-active' : (props.if)},
      {'w100' : (props.fill)},
      {'h100' : (props.fill)},
      props.className
    );

    if (props.if && props.push) {
      if (props.push === 'right') {
        pushStyle = {
          paddingRight : props.amount
        };
      } else if (props.push === 'left') {
        pushStyle = {
          paddingLeft : props.amount
        };
      }
    } else {
      pushStyle = false
    }

    return (
      <div className={transformClass} style={pushStyle ? pushStyle : {'WebkitTransform' : state.translateSelected}}>
        {props.children}
      </div>
    );
  }
}
