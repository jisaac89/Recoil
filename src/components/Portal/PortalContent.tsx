import React from 'react';
import ReactDOM from 'react-dom';
import Layer from '../Layer/Layer';
import SlideIn from '../SlideIn/SlideIn';

export interface IPortalProps {
  portalId?: string;
  portal?: JSX.Element;
  open?: boolean;
  onClose?: () => void;
  title?: string;
  icon?: string;
  portalType?: string;
  initialized: boolean;
  portalTemplate?: JSX.Element;
}

export class PortalContent extends React.Component<IPortalProps, any> {
  public static defaultProps = {
    portalType: 'SlideIn'
  };

  portalElement: HTMLElement = null;

  constructor(props) {
    super(props);
    this.initPortal();
  }

  componentDidUpdate(prevProps, prevState) {
    // ususually you woould compare props but for a portal we need to rerender
    this.initPortal();
  }

  initPortal() {
    let portalDOM;
    if (this.props.initialized) {
      portalDOM = document.getElementById('Recoil');
      this.portalElement = portalDOM;
    }
  }

  render() {
    if (this.portalElement) {
      return ReactDOM.createPortal(
        this.props.portalTemplate ? (
          this.props.portalTemplate
        ) : (
          <SlideIn
            id={this.props.portalId}
            flex
            fill
            onClose={this.props.onClose}
            title={this.props.title}
            icon={this.props.icon}
            className='r-Portal z5'
            fixed
            from='bottom'
            if={this.props.open}>
            <Layer flex fill>
              {this.props.children}
            </Layer>
          </SlideIn>
        ),
        this.portalElement
      );
    } else { return null; }
  }
}
