import React from 'react';
import { PortalContent } from './PortalContent';
import { PortalContext } from './PortalProvider';

export interface IPortalProps {
  portalId?: string;
  portal?: JSX.Element;
  open: boolean;
  onClose?: () => void;
  title?: string;
  icon?: string;
  portalType?: string;
  portalTemplate?: JSX.Element;
}

export class Portal extends React.Component<IPortalProps, any> {
  public static defaultProps = {
    portalType: 'SlideIn'
  };
  static portalElement: HTMLElement;
  render() {
    return (
      <PortalContext.Consumer>
        {(initialized: any) => {
          return <PortalContent initialized={initialized} {...this.props} />;
        }}
      </PortalContext.Consumer>
    );
  }
}
