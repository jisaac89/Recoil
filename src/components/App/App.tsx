import * as React from 'react';
import * as classNames from 'classnames';
import './App.less';

export interface IAppProps {
    nightmode ? : boolean;
    className ? : Array<string>;
    to ? : string;
}

export default class App extends React.Component<IAppProps, any> {
  public _animate : any;
  public _beforeAnimate : any;
  public _afterAnimate : any;
  public _to : any;

  constructor(props) {
    super(props);
    this._to = props.to && props.to.replace(/^#/, '') || '';
    const {
      offset = 0, duration = 400, easing = easeOutQuad
    } = props.animate || {};
    this._animate = { offset, duration, easing };
    this._beforeAnimate = props.beforeAnimate || function() {};
    this._afterAnimate = props.afterAnimate || function() {};
  }

    handleClick = (event) => {
        this._beforeAnimate(event);
        event.preventDefault();
        animateScroll(this._to, this._animate);
        this._afterAnimate(event);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.to !== this.props.to) {
            this.handleClick(event);
        }
    }
    render() {

        const self = this;
        const props = self.props;

        let appClass = classNames(
            'r-App',
            { 'e-NightMode': (props.nightmode)},
            props.className
        );

        return (
            <div className={appClass}>
                {this.props.children}
            </div>
        );
    }
}

function animateScroll(id, animate) {
  const element = id ? document.getElementById(id) : document.body;
  scrollTo(element, animate);
}

function scrollTo(element, { offset, duration, easing }) {
  const start = getScrollTop();
  const to = getOffsetTop(element) + offset;
  const change = to - start;
  const increment = 20;

  function animate(elapsedTime) {
    const elapsed = elapsedTime + increment;
    const position = easing(null, elapsed, start, change, duration);
    setScrollTop(position);
    if (elapsed < duration) {
      setTimeout(function() {
        animate(elapsed);
      }, increment);
    }
  }

  animate(0);
}

function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}

function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function setScrollTop(position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

function getOffsetTop(element) {
  const { top } = element.getBoundingClientRect();
  return top + getScrollTop();
}