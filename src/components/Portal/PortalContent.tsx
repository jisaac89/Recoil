import * as React from 'react';
import * as ReactDOM from 'react-dom';
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

export default class PortalContent extends React.Component<IPortalProps, any> {
  public static defaultProps = {
    portalType: 'SlideIn'
  };

  portalElement: HTMLElement = null;
  componentWillMount() {
    let p;
    if (this.props.initialized) {
      p = document.getElementById('Recoil');
      this.portalElement = p;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    let p;
    if (this.props.initialized && !prevProps.initialized) {
      p = document.getElementById('Recoil');
      this.portalElement = p;
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
