import classNames from 'classnames';
import React from 'react';
import { PortalProvider } from '../Portal/PortalProvider';
import { ShortCutProvider } from '../ShortCut/ShortCutProvider';

export interface IRecoilProps {
  nightmode?: boolean;
  className?: string;
  overflow?: boolean;
  scroll?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  isMobile?: boolean;
  isTablet?: boolean;
  // shortcut key to enable shortcuts on recoil
  shortCutInitKey?: any;
  onDevice(device: string): void;
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

export class Recoil extends React.Component<IRecoilProps, any> {
  refs: any;

  constructor(props: IRecoilProps) {
    super(props);
    this.state = {
      inputIsFocused: false,
      isDesktop: false,
      initialized: false
    };
    // init
  }

  componentDidMount() {
    this.setState({
      initialized: true
    });
  }
  componentDidUpdate(prevProps: IRecoilProps, prevState) {
    !!this.props.isMobile && this.props.isMobile !== prevState.isMobile ? this.isMobile(this.props.isMobile) : null;
  }
  isMobile(mobile: boolean) {
    const self = this;
    if (mobile) {
      delegate(self.refs.Recoil, 'focusin', 'input', () => {
        self.setState({
          inputIsFocused: true
        });
      });
      delegate(self.refs.Recoil, 'focusout', 'input', () => {
        self.setState({
          inputIsFocused: false
        });
      });
    }
  }
  render() {
    const self = this;
    const props = self.props;

    const RecoilClass = classNames(
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
