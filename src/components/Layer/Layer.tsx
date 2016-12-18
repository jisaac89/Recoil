import * as React from 'react';
import * as classNames from 'classnames';
import './Layer.less';

export interface ILayerProps {
  border? : boolean;
  overflow? : boolean;
  left? : boolean;
  right? : boolean;
  scrollY? : boolean;
  scrollX? : boolean;
  fill? : boolean;
  theme? : string;
  children? : any;
  className? : any;
  style? : any;
  onClick?: () => void;
  block? : boolean;
  key? : any;
  parent? : boolean;
  child? : boolean;
  dimensions?:any;
  disabled? : boolean;
  scrollToId?: any;
  beforeAnimate? : any;
  afterAnimate ? : any;
  nightmode? : boolean;
  scrollIf? : boolean;
  scroll? : boolean;
  flex? : any;
  offset?: number;
  shadow?: boolean;
}

export default class Layer extends React.Component<ILayerProps, any> {

  public _animate : any;
  public _beforeAnimate : any;
  public _afterAnimate : any;
  public _scrollToId : any;
  public refs : any;

  public static defaultProps = {
    overflow: false,
    type: '',
    left: false,
    right: false,
    border: '',
    scrollIf: false
  };

  constructor(props) {
    super(props);
    this._scrollToId = props.scrollToId && props.scrollToId.replace(/^#/, '') || '';
    const {
      offset = props.offset || 0, duration = 400, easing = this.easeOutQuad
    } = props.animate || {};
    this._animate = { offset, duration, easing };
    this._beforeAnimate = props.beforeAnimate || function() {};
    this._afterAnimate = props.afterAnimate || function() {};
    this.state = {
      scrollToId : '',
      lastScrollY: 0,
      ticking : false
    }
  }

  componentWillReceiveProps(nextProps) {
    const self = this;
    this.canLayerAnimateScroll(nextProps);
  }
  
  componentDidMount(){
    this.canLayerAnimateScroll(this.props);
  }

  canLayerAnimateScroll(props){
      let propss = props || this.props
      const self = this;
      if (propss.scrollIf && this.state.scrollToId === '') {
            setTimeout(()=>{
              let element  = document.getElementById(propss.scrollToId);
              element && element.getBoundingClientRect() ? self.handleScroll(propss.scrollToId) : null;
            }, 0)
      };
  }

  handleScroll = (to) => {
      const self = this;
      self._beforeAnimate();
      self.setState({
        scrollToId: to
      }, ()=>{
        self.animateScroll(self.state.scrollToId, this._animate);
      })
      self._afterAnimate();
  }

  animateScroll(id, animate) {
    const element = id ? document.getElementById(id) : this.refs.Layer;
    this.refs.Layer ? this.scrollTo(element, animate) : null;
  }

  scrollTo(element, { offset, duration, easing }) {
    const self = this;
    this.animateScrolling(element, { offset, duration, easing });
  }

  animateScrolling(element, { offset, duration, easing }) {
    const self = this;
    const startX = this.getScrollLeft();
    const startY = this.getScrollTop();
    const toX = this.getOffsetLeft(element) + offset;
    const toY = this.getOffsetTop(element) + offset;
    const changeX = toX - startX;
    const changeY = toY - startY;
    const increment = 20;


    scrollTo(startY, this.refs.Layer, toY, duration);

      self.setState({
        scrollToId: ''
      })
    // function animate(elapsedTime) {
    //   const elapsed = elapsedTime + increment;
    //   const positionX = easing(null, elapsed, startX, changeX, duration);
    //   const positionY = easing(null, elapsed, startY, changeY, duration);
    //   self.setScrolling(positionX, positionY);
    //   if (elapsed < duration) {
    //     window['requestInterval'](function() {
    //       animate(elapsed);
    //     }, increment);
    //   }
    // }

    // // requestTick();

    // animate(0);



  }

  setScrolling(x, y){
    this.refs.Layer.scrollTop = y;
    this.refs.Layer.scrollLeft = x;
  }

  easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }

  getScrollTop() {
    return this.refs.Layer.scrollTop || this.refs.Layer.scrollTop;
  }

  setScrollTop(position) {
    this.refs.Layer.scrollTop = position;
  }

  getOffsetTop(element) {
    let top = element.getBoundingClientRect().top;
    return top + this.getScrollTop();
  }


  getScrollLeft() {
    return this.refs.Layer.scrollLeft || this.refs.Layer.scrollLeft;
  }

  setScrollLeft(position) {
    this.refs.Layer.scrollLeft = position;
  }

  getOffsetLeft(element) {
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

interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
export let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
        return;
};

Math['easeInOutQuad'] = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

Math['easeInCubic'] = function(t, b, c, d) {
  var tc = (t/=d)*t*t;
  return b+c*(tc);
};

Math['inOutQuintic'] = function(t, b, c, d) {
  var ts = (t/=d)*t,
  tc = ts*t;
  return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};


var requestAnimFrame = (function(){
  return  window['requestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['mozRequestAnimationFrame'] || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();

function scrollTo(scrollTop, element, to, duration) {

  function move(amount) {
    element.scrollTop = amount;
  }
  function position() {
    return scrollTop;
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20;
  duration = (typeof(duration) === 'undefined') ? 500 : duration;
  var animateScroll = function() {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math['easeInOutQuad'](currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    }
  };
  animateScroll();
}