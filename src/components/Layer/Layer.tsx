import * as React from 'react';
import * as classNames from 'classnames';
import './Layer.less';

interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
export let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
        return;
};

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
      offset = 0, duration = 400, easing = this.easeOutQuad
    } = props.animate || {};
    this._animate = { offset, duration, easing };
    this._beforeAnimate = props.beforeAnimate || function() {};
    this._afterAnimate = props.afterAnimate || function() {};
    this.state = {
      scrollToId : ''
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

    function animate(elapsedTime, type) {
      const elapsed = elapsedTime + increment;
      const positionX = easing(null, elapsed, startX, changeX, duration);
      const positionY = easing(null, elapsed, startY, changeY, duration);

      let scrollY = type === 0;
      let scrollX = type === 1;
      let scroll = type === 2;

      self.setScrolling(positionX, positionY, type);
      if (elapsed < duration) {
        setTimeout(function() {
          animate(elapsed, type);
        }, increment);
      }
    }

    if (self.props.scrollY) {
      animate(0, 0);
    } else if(self.props.scrollX) {
      animate(0, 1);
    } else {
      animate(0, 2);
    }

    self.setState({
      scrollToId: ''
    })

  }

  setScrolling(x, y, type){
    type === 0 || type === 2 ? this.refs.Layer.scrollTop = y : null;
    type === 1 || type === 2 ? this.refs.Layer.scrollLeft = x : null;
  }

  easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }

  getScrollTop() {
    return this.refs.Layer.scrollTop || this.refs.Layer.scrollTop;
  }

  getScrollLeft() {
    return this.refs.Layer.scrollLeft || this.refs.Layer.scrollLeft;
  }

  setScrollTop(position) {
    this.refs.Layer.scrollTop = position;
  }

  setScrollLeft(position) {
    this.refs.Layer.scrollLeft = position;
  }

  getOffsetTop(element) {
    let top = element.getBoundingClientRect().top;
    return top + this.getScrollTop();
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
      { 'e-NightMode': (props.nightmode)},
      {'flohide' : (props.overflow === false)},
      {'pull-left': (props.left)},
      {'pull-right': (props.right)},
      {'e-scroll-y': (props.scrollY)},
      {'e-scroll': (props.scroll)},
      {'e-scroll-x': (props.scrollX)},
      {'disabled': (props.disabled)},
      {'fill': (props.fill)},
      {'parent': (props.parent)},
      {'child': (props.child)},
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