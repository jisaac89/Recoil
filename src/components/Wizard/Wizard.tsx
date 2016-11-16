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
    this._beforeAnimate = props.beforeAnimate || function() {};
    this._afterAnimate = props.afterAnimate || function() {};
      const {
      offset = 0, duration = props.duration || 400, easing = this.easeOutQuad
    } = props.animate || {};
    this._animateSlide = { offset, duration, easing };
    this.state = {
      slideIndex : props.slideIndex || 0,
      translate: ''
    }
}
  easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
  
  componentWillReceiveProps(nextProps) {
    const self = this;
    nextProps.slideIndex < this.props.slideIndex ? this.handleAnimate(nextProps, 2) : null;
    nextProps.slideIndex > this.props.slideIndex ? this.handleAnimate(nextProps, 1) : null;
  }
  handleAnimate(props, n) {
    const self = this;
    this._beforeAnimate();
      self.setState({
        slideIndex: props.slideIndex
      }, ()=>{
        self.animateSlide(n, props, this._animateSlide);
      })
    this._afterAnimate();
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
      self.setScrolling(positionX, n);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed, props);
        }, increment);
      }
    }

    animate(0, props);

    self.setState({
      scrollToId: ''
    })

  }
  setScrolling(x, n) {
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

    if (props.slideIndex === index){
      return(
        <div style={{'WebkitTransform' : state.translateSelected}} className={wizardSlideClass} key={index}>
          {item}
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