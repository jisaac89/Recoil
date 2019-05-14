/* tslint:disable */
import classNames from 'classnames';
import React from 'react';
import { IRecoil } from '../..';

export interface ILayerProps extends IRecoil {
  border?: boolean;
  overflow?: boolean;
  left?: boolean;
  right?: boolean;
  scrollY?: boolean;
  scrollX?: boolean;
  style?: object;
  onClick?: () => void;
  key?: string | number;
  parent?: boolean;
  child?: boolean;
  dimensions?: [string, string, number];
  scrollToId?: string;
  beforeAnimate?: () => void;
  afterAnimate?: () => void;
  nightmode?: boolean;
  scrollIf?: boolean;
  scroll?: boolean;
  offset?: number;
  shadow?: boolean;
  flexCenter?: boolean;
  onScroll?: any;
  id?: string;
  borderRadius?: boolean;
  dropShadow?: boolean;
  length?: number;
  scrollToBottom?: boolean;
}

class AdvancedLayer extends React.Component<ILayerProps, any> {
  public static defaultProps = {
    overflow: false,
    type: '',
    left: false,
    right: false,
    border: '',
    scrollIf: false,
    flexCenter: false
  };
  messagesEnd: any;
  public _animate: any;
  public _beforeAnimate: () => void;
  public _afterAnimate: () => void;
  public _scrollToId: string;
  public refs: {
    [key: string]: Element;
    Layer: HTMLElement;
  };

  constructor(props: ILayerProps) {
    super(props);
    this._scrollToId =
      (props.scrollToId && props.scrollToId !== '' && props.scrollToId.toString().replace(/^#/, '')) || '';

    const offset = props.offset || 0,
      duration = 400,
      easing = this.easeOutQuad;

    this._animate = { offset, duration, easing };
    this._beforeAnimate = props.beforeAnimate || function() {};
    this._afterAnimate = props.afterAnimate || function() {};
    this.state = {
      scrollToId: '',
      lastScrollY: 0,
      ticking: false
    };
  }

  componentDidUpdate(prevProps: ILayerProps) {
    if (prevProps.scrollIf && prevProps.scrollToId !== this.props.scrollToId) {
      this.canLayerAnimateScroll(this.props);
    }

    if (prevProps.length !== this.props.length && this.props.scrollToBottom) {
      this.scrollToBottom();
    }
  }

  componentDidMount() {
    if (this.props.scrollIf && this.props.scrollToId !== '') {
      this.canLayerAnimateScroll(this.props);
    }

    this.props.scrollToBottom ? this.scrollToBottom() : null;
  }

  canLayerAnimateScroll(props: ILayerProps) {
    const self = this;
    setTimeout(() => {
      if (props.scrollToId) {
        const element = document.getElementById(props.scrollToId);
        if (element && element.getBoundingClientRect()) {
          self.handleScroll(props.scrollToId, element.offsetTop);
        } else {
          return null;
        }
      }
    }, 0);
  }

  handleScroll = (to: string, top: number) => {
    const self = this;
    self._beforeAnimate();
    self.setState(
      {
        scrollToId: to
      },
      () => {
        self.animateScroll(this._animate, top);
        // this.setState({
        //   scrollToId: ''
        // })
      }
    );
    self._afterAnimate();
  };

  animateScroll(animate: { duration: number }, top: number) {
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
    });
  }

  setScrolling(x: number, y: number) {
    this.refs.Layer.scrollTop = y;
    this.refs.Layer.scrollLeft = x;
  }

  easeOutQuad(t: number, b: number, c: number, d: number) {
    return -c * (t /= d) * (t - 2) + b;
  }

  getScrollTop() {
    return this.refs.Layer.scrollTop || this.refs.Layer.scrollTop;
  }

  setScrollTop(position: number) {
    this.refs.Layer.scrollTop = position;
  }

  getOffsetTop(element: HTMLElement) {
    const top = element.getBoundingClientRect().top;
    return top + this.getScrollTop();
  }

  getScrollLeft() {
    return this.refs.Layer.scrollLeft || this.refs.Layer.scrollLeft;
  }

  setScrollLeft(position: number) {
    this.refs.Layer.scrollLeft = position;
  }

  getOffsetLeft(element: HTMLElement) {
    const left = element.getBoundingClientRect().left;
    return left + this.getScrollLeft();
  }

  scrollToBottom = () => {
    const endPOffsetTop = this.messagesEnd ? this.messagesEnd : 0;
    this.messagesEnd ? this.handleScroll('end', endPOffsetTop.offsetTop) : null;
  };

  render() {
    const self = this;
    const props = self.props;

    let dimensionStyle;

    if (props.dimensions) {
      dimensionStyle = {
        width: props.dimensions[0],
        height: props.dimensions[1],
        zIndex: props.dimensions[2]
      };
    }

    const layerClass = classNames(
      'r-Layer',
      { flohide: props.overflow },
      { 'pull-left': props.left },
      { 'pull-right': props.right },
      { 'e-NightMode': props.nightmode },
      { 'e-scroll': props.scroll },
      { 'e-scroll-y': props.scrollY },
      { 'e-scroll-x': props.scrollX },
      { 'e-borderRadius': props.borderRadius },
      { 'e-dropShadow': props.dropShadow },
      { disabled: props.disabled },
      { 'e-flex': !!props.flex },
      { 'e-flex-row': props.flex === 'row' },
      { 'e-fill': props.fill },
      { parent: props.parent },
      { child: props.child },
      { 'e-shadow': props.shadow },
      { 'e-flex-center': props.flexCenter },
      { 'border-all': props.border },
      props.theme,
      props.className
    );

    return (
      <div
        id={props.id}
        onScroll={this.props.onScroll}
        tabIndex={props.tabIndex}
        ref="Layer"
        onClick={props.onClick}
        className={layerClass}
        style={Object.assign({}, dimensionStyle, props.style)}>
        {props.children}

        <div
          id="end"
          style={{ float: 'left', clear: 'both' }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

Math['easeInOutQuad'] = function(t: number, b: number, c: number, d: number) {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

Math['easeInCubic'] = function(t: number, b: number, c: number, d: number) {
  t /= d;
  return c * t * t * t + b;
};

Math['inOutQuintic'] = function(t: number, b: number, c: number, d: number) {
  const ts = (t /= d) * t,
    tc = ts * t;
  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

const requestAnimFrame = (function() {
  return (
    window['requestAnimationFrame'] ||
    window['webkitRequestAnimationFrame'] ||
    window['mozRequestAnimationFrame'] ||
    function(callback: () => void) {
      window.setTimeout(callback, 2000 / 60);
    }
  );
})();

function scrollTo(scrollTop: number, element: HTMLElement, to: number, duration: number) {
  function move(amount: number) {
    element.scrollTop = amount;
  }
  function position() {
    return scrollTop;
  }
  let start = position(),
    change = to - start,
    currentTime = 0,
    increment = 10;
  duration = typeof duration === 'undefined' ? 500 : duration;
  const animateScroll = function() {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    const val = Math['inOutQuintic'](currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    }
  };
  animateScroll();
}

export { AdvancedLayer };
