import * as React from 'react';
import classNames from 'classnames';
import Portal from '../Portal/Portal';

import ModalHeader from './ModalHeader';

export interface IModalProps {
  ghost?: boolean;
  open?: boolean;
  float?: boolean;
  effect?: string;
  className?: string;
  icon?: string;
  fullScreen?: boolean;
  style?: Object;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  beforeOpen?: () => void;
  afterOpen?: () => void;
  mobile?: boolean;
  hideFullScreenButton?: boolean;
  hideCloseButton?: boolean;
  hideHeader?: boolean;
  overflow?: boolean;
  fill?: boolean;
  closeId?: string;
  flexCenter?: boolean;
}

export interface IModalState {
  fullScreen?: boolean;
  open?: boolean;
  showChildren?: boolean;
}

function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

export default class Modal extends React.Component<IModalProps, IModalState> {
  refs: {
    [key: string]: Element;
    Modal: HTMLInputElement;
  };

  constructor(props: IModalProps) {
    super(props);
    this.state = {
      fullScreen: props.fullScreen || false,
      open: props.open || false,
      showChildren: false
    };
  }

  componentDidMount() {
    this.props.open ? this.open() : this.close();
  }

  componentDidUpdate(prevProps: IModalProps, prevState) {
    this.props.open === true && prevState.open !== true
      ? this.open()
      : this.props.open === false && prevState.open !== false
      ? this.close()
      : null;
  }

  open() {
    this.beforeOpen();
    this.afterOpen();
  }

  beforeOpen() {
    this.props.beforeOpen ? this.props.beforeOpen() : null;
    this.openModal();
  }

  openModal() {
    this.setState(
      {
        open: true
      },
      () => {
        this.afterOpen();
      }
    );
  }

  afterOpen() {
    this.setState({
      showChildren: true
    });
  }

  close() {
    this.setState({
      open: false,
      showChildren: false
    });
  }

  toggleFullScreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  };

  closeModal = () => {
    this.setState({
      open: false,
      showChildren: false
    });
    this.props.onClose ? this.props.onClose() : null;
  };

  render() {
    const self = this;
    const props = self.props;

    let modalWrapperClass = classNames(
      'r-Modal',
      { 'e-show': this.state.open },
      { ghost: props.ghost },
      { 'e-float': props.float },
      { 'e-fade': props.effect === 'fade' },
      { 'e-fill': props.fill },
      { 'e-fullscreen': self.state.fullScreen },
      { mobile: props.mobile },
      { 'e-flex-center': props.flexCenter },
      { flohide: props.overflow }
    );

    let modalClass = classNames('r-ModalContent', props.className);

    return (
      <Portal portalType="SlideIn" open={this.state.open} portalId={guidGenerator()}>
        {this.state.showChildren ? (
          <div className={modalWrapperClass}>
            <div ref="Modal" className={modalClass} style={props.style}>
              {!props.hideHeader ? (
                <ModalHeader
                  open={this.state.open}
                  icon={this.props.icon}
                  title={this.props.title}
                  fullScreen={this.state.fullScreen}
                  toggleFullScreen={this.toggleFullScreen}
                  onClose={this.closeModal}
                  hideFullScreenButton={props.hideFullScreenButton}
                  hideCloseButton={props.hideCloseButton}
                  closeId={props.closeId}
                />
              ) : null}
              {props.children}
            </div>
          </div>
        ) : null}
      </Portal>
    );
  }
}
