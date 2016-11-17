import * as React from 'react';
import * as classNames from 'classnames';
import './Wizard.less';

export interface IWizardProps {
  slideIndex ? : number;
  vertical ? : boolean;
  className ? : any;
  children ? : any;
  style ? : any;
  mobile? : boolean;
  animate? : boolean;
  fill ? : boolean;
  overflow? : boolean;
  duration? : number;
  beforeAnimate? : any;
  afterAnimate?: any;
}

export default class Wizard extends React.Component<IWizardProps, any>{
  
  public _beforeAnimate : any;
  public _afterAnimate : any;
  public _animate : any;
  public _animateSlide : any;
  
  public static defaultProps = {
    slideIndex: 0
  }

  constructor(props) {
    super(props);
    this._beforeAnimate = this.beforeAnimate || function() {};
    this._afterAnimate = this.afterAnimate || function() {};
    const {
      offset = 0, duration = props.duration || 400, easing = this.easeOutQuad
    } = props.animate || {};
    this._animateSlide = { offset, duration, easing };
    this.state = {
      slideIndex : props.slideIndex || 0,
      translate: '',
      animating: false,
      showSlide: true,
      debouncing: false
    }
    this.handleAnimate = this.debounce(this.handleAnimate,duration / 1.1, true)
}
  debounce(func, wait, immediate) {
    const self = this;
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          self.setState({
            debouncing : true,
            showSlide:true
          }, ()=>{
            func.apply(context, args)
          })
        } else {
          self.setState({
            debouncing : false
          }, ()=> {
             !self.state.showSlide ? func.apply(context, args) : null
          })
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
          self.setState({
            debouncing : false,
            showSlide: false
          }, ()=>{
            func.apply(context, args)
          })
      } else {
          self.setState({
            debouncing : true,
            showSlide: false
          })
      }
    };
  }
  easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
  componentWillReceiveProps(nextProps) {
    const self = this;
    let props = nextProps || self.props;
    props.slideIndex < this.props.slideIndex ? this.handleAnimate(props, 2) : null;
    props.slideIndex > this.props.slideIndex ? this.handleAnimate(props, 1) : null;
  }
  handleAnimate(props, n) {
    const self = this;
    this._beforeAnimate(props.slideIndex, props, n);
    this._afterAnimate(props.slideIndex);
  }
  beforeAnimate(slideIndex, props, n) {
    this.props.beforeAnimate;
    this.setState({
      slideIndex: slideIndex,
      showSlide: false
    }, ()=>{
      this.startAnimating(props, n)
    })
  }
  startAnimating(props, n) {
    const self = this;
    this.setState({
      animating: true,
      showSlide: true
    }, ()=>{
      self.animateSlide(n, props, this._animateSlide);
    })
  }
  afterAnimate(slideIndex) {
    this.setState({
      showSlide: true,
      animating: false
    })
    this.props.afterAnimate;
  }
  animateSlide(n, props, { offset, duration, easing }) {
    const self = this;
    const start = this.state.slideIndex;
    const changeX = props.slideIndex * 100;
    const increment = 20;

    function animate(elapsedTime, props) {
      const elapsed = elapsedTime + increment;
      const positionX = easing(null, elapsed, 100, -100, duration);
      const positionY = easing(null, elapsed, 0, changeX, duration);
      self.translateSlide(positionX, n);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed, props);
        }, increment);
      }
    }

    animate(0, props);

  }
  translateSlide(x, n) {
    this.setState({
      translateSelected : n === 2 ? 'translate(-'+x+'%,0%)' : 'translate('+x+'%,0%)'
    })
  }
  createSlidesPartial = (item, index) => {
    let props = this.props;
    let state = this.state;
    let wizardSlideClass = classNames(
      'r-WizardSlide',
      props.className
    );

    if (state.slideIndex === index){
      return(
        <div style={{'WebkitTransform' : state.translateSelected}} className={wizardSlideClass} key={index}>
          {!state.debouncing ? item : null}
        </div>
      )
    } else return null
  }
  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    let wizardClass = classNames(
      'r-Wizard',
      {'fill' : (props.fill)},
      {'e-overflow': (props.overflow)}
    );

    return(
      <div ref="Wizard" className={wizardClass} style={props.style}>
        {props.children.length > 1 ? props.children.map(this.createSlidesPartial.bind(this)) : props.children}
      </div>
    );
  }
}