import * as React from 'react';
import * as classNames from 'classnames';
import './Layer.less';

import {IRecoil} from '../../index';

export interface ILayerProps extends IRecoil{
  border? : boolean;
  overflow? : boolean;
  left? : boolean;
  right? : boolean;
  scrollY? : boolean;
  scrollX? : boolean;
  style? : Object;
  onClick?: () => void;
  block? : boolean;
  key? : string | number;
  parent? : boolean;
  child? : boolean;
  dimensions?:{height: string, width : string, zIndex: number};
  scrollToId?: string;
  beforeAnimate? : () => void;
  afterAnimate ? : () => void;
  nightmode? : boolean;
  scrollIf? : boolean;
  scroll? : boolean;
  offset?: number;
  shadow?: boolean;
}

export default class Layer extends React.Component<ILayerProps, any> {

  public _animate : any;
  public _beforeAnimate : () => void;
  public _afterAnimate : () => void;
  public _scrollToId : string;
  public refs: {
    [key: string]: (Element);
    Layer: (HTMLElement);
  }

  public static defaultProps = {
    overflow: false,
    type: '',
    left: false,
    right: false,
    border: '',
    scrollIf: false
  };

  constructor(props : ILayerProps) {
    super(props);
    this._scrollToId = props.scrollToId && props.scrollToId !== '' && props.scrollToId.toString().replace(/^#/, '') || '';

    let offset = props.offset || 0,
          duration = 400,
          easing = this.easeOutQuad;
    
    this._animate = { offset, duration, easing };
    this._beforeAnimate = props.beforeAnimate || function() {};
    this._afterAnimate = props.afterAnimate || function() {};
    this.state = {
      scrollToId : '',
      lastScrollY: 0,
      ticking : false
    }
  }

  componentWillReceiveProps(nextProps : ILayerProps) {
    if (nextProps.scrollIf && nextProps.scrollToId !== this.props.scrollToId) {
      this.canLayerAnimateScroll(nextProps);
    };
  }
  
  componentDidMount(){
    if (this.props.scrollIf && this.props.scrollToId !== '') {
      this.canLayerAnimateScroll(this.props);
    }
  }

  canLayerAnimateScroll(props : ILayerProps){
      let propss = props || this.props
      const self = this;
            setTimeout(()=>{
              let element  = document.getElementById(propss.scrollToId);
              if (element && element.getBoundingClientRect()) {
                self.handleScroll(propss.scrollToId, element.offsetTop)
              } else return null;
            }, 0);
  }

  handleScroll = (to: string, top : number) => {
      const self = this;
      self._beforeAnimate();
      self.setState({
        scrollToId: to
      }, ()=>{
        self.animateScroll(this._animate, top);
      })
      self._afterAnimate();
  }

  animateScroll(animate:{duration: number}, top: number) {
    this.refs.Layer ? this.scrollTo(animate.duration, top) : null;
  }

  scrollTo(duration: number, top: number) {
    this.animateScrolling(duration, top);
  }

  animateScrolling(duration: number, top: number) {
    const self = this;
    const startY = this.getScrollTop();


    scrollTo(startY, this.refs.Layer, top, duration);
      self.setState({
        scrollToId: ''
      })
  }

  setScrolling(x: number, y: number){
    this.refs.Layer.scrollTop = y;
    this.refs.Layer.scrollLeft = x;
  }

  easeOutQuad(t: number, b: number, c: number, d: number) {
    return -c * (t /= d) * (t - 2) + b;
  }

  getScrollTop() {
    return this.refs.Layer.scrollTop || this.refs.Layer.scrollTop;
  }

  setScrollTop(position : number) {
    this.refs.Layer.scrollTop = position;
  }

  getOffsetTop(element: HTMLElement) {
    let top = element.getBoundingClientRect().top;
    return top + this.getScrollTop();
  }


  getScrollLeft() {
    return this.refs.Layer.scrollLeft || this.refs.Layer.scrollLeft;
  }

  setScrollLeft(position : number) {
    this.refs.Layer.scrollLeft = position;
  }

  getOffsetLeft(element : HTMLElement) {
    let left = element.getBoundingClientRect().left;
    return left + this.getScrollLeft();
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
      { 'e-NightMode': (props.nightmode) },
      { 'e-scroll': (props.scroll) },
      {'e-scroll-y': (props.scrollY)},
      {'e-scroll-x': (props.scrollX)},
      { 'disabled': (props.disabled) },
      { 'e-flex': (props.flex) },
      {'e-fill': (props.fill)},
      {'parent': (props.parent)},
      { 'child': (props.child) },
      { 'e-shadow': (props.shadow) },
      borderClass,
      props.theme,
      props.className
    );

    return(
      <div ref="Layer" onClick={props.onClick} className={layerClass} style={Object.assign({},dimensionStyle, props.style)}>
        {props.children}
      </div>
    );
  }
}

Math['easeInOutQuad'] = function (t: number, b: number, c: number, d: number) {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

Math['easeInCubic'] = function(t: number, b: number, c: number, d: number) {
  var tc = (t/=d)*t*t;
  return b+c*(tc);
};

Math['inOutQuintic'] = function(t: number, b: number, c: number, d: number) {
  var ts = (t/=d)*t,
  tc = ts*t;
  return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};


var requestAnimFrame = (function(){
  return  window['requestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['mozRequestAnimationFrame'] || function( callback : ()=> void ){ window.setTimeout(callback, 2000 / 60); };
})();

function scrollTo(scrollTop : number, element : HTMLElement, to : number, duration : number) {

  function move(amount : number) {
    element.scrollTop = amount;
  }
  function position() {
    return scrollTop;
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 10;
  duration = (typeof(duration) === 'undefined') ? 500 : duration;
  var animateScroll = function() {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math['easeInCubic'](currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    }
  };
  animateScroll();
}