﻿import React from 'react';
import classNames from 'classnames';
import ShortCutProvider from '../ShortCut/ShortCutProvider';
import PortalProvider from '../Portal/PortalProvider';
import { isMobile, isTablet } from './index';

export interface IRecoilProps {
  nightmode?: boolean;
  className?: string;
  overflow?: boolean;
  scroll?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  isMobile?: boolean;
  isTablet?: boolean;
  onDevice(device: string): void;
  // shortcut key to enable shortcuts on recoil
  shortCutInitKey: string;
}

function delegate(el: HTMLElement, evt: any, sel: any, handler: any) {
  el.addEventListener(evt, function(event) {
    let t = event.target;
    while (t && t !== this) {
      if (t.matches(sel)) {
        handler.call(t, event);
      }
      t = t.parentNode;
    }
  });
}

interface IRecoilState {
  inputIsFocused: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  initialized: boolean;
}

export default class Recoil extends React.Component<IRecoilProps, IRecoilState> {
  refs: any;
  static defaultProps = {
    shortCutInitKey: ''
  };
  constructor(props: IRecoilProps) {
    super(props);
    this.state = {
      inputIsFocused: false,
      isMobile: props.isMobile || isMobile,
      isDesktop: false,
      isTablet: props.isTablet || isTablet,
      initialized: false
    };
    // init
    this.detectMobile();
  }

  componentDidMount() {
    this.isMobile(isMobile);
    this.setState({
      initialized: true
    });
  }
  detectMobile() {
    let device;
    if (isMobile && !isTablet) {
      device = 'mobile';
    } else if (isTablet) {
      device = 'tablet';
    } else {
      device = 'desktop';
    }

    if (this.props.onDevice) {
      this.props.onDevice(device);
    }
  }
  componentDidUpdate(prevProps: IRecoilProps, prevState: IRecoilState) {
    !!this.props.isMobile && this.props.isMobile !== prevState.isMobile ? this.isMobile(this.props.isMobile) : null;
  }
  isMobile(mobile: boolean) {
    const self = this;
    if (mobile) {
      delegate(self.refs.Recoil, 'focusin', 'input', function() {
        self.setState({
          inputIsFocused: true
        });
      });
      delegate(self.refs.Recoil, 'focusout', 'input', function() {
        self.setState({
          inputIsFocused: false
        });
      });
    }
  }
  render() {
    const self = this;
    const props = self.props;

    let RecoilClass = classNames(
      'r-Recoil',
      { 'e-NightMode': props.nightmode },
      { flohide: props.overflow },
      { 'e-scroll': props.scroll },
      { 'e-scroll-y': props.scrollY },
      { 'e-scroll-x': props.scrollX },
      { 'e-inputIsFocused': this.state.inputIsFocused },
      props.className
    );

    return (
      <PortalProvider initialized={this.state.initialized}>
        <ShortCutProvider shortCutInitKey={props.shortCutInitKey}>
          <div ref={'Recoil'} id={'Recoil'} className={RecoilClass}>
            {this.props.children}
          </div>
        </ShortCutProvider>
      </PortalProvider>
    );
  }
}
