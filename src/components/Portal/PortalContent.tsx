import React from 'react';
import * as ReactDOM from 'react-dom';
import Layer from '../Layer/Layer';
import SlideIn from '../SlideIn/SlideIn';

export interface IPortalProps {
  portalId?: string;
  portal?: JSX.Element;
  open: boolean;
  onClose?: () => void;
  title?: string;
  icon?: string;
  portalType?: string;
  initialized: boolean;
  portalTemplate?: JSX.Element;
}

export default class PortalContent extends React.Component<IPortalProps> {
  public static defaultProps = {
    portalType: 'SlideIn',
    open: false
  };

  portalElement: HTMLElement | null;

  constructor(props: IPortalProps) {
    super(props);
    this.initPortal();
  }

  componentDidUpdate() {
    this.initPortal();
  }

  initPortal() {
    let portalDOM: HTMLElement | null;
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
            className="r-Portal z5"
            fixed
            from="bottom"
            if={this.props.open}
          >
            <Layer flex fill>
              {this.props.children}
            </Layer>
          </SlideIn>
        ),
        this.portalElement
      );
    } else return null;
  }
}
