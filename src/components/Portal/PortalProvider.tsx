import React from 'react';
import ReactDOM from 'react-dom';
export const PortalContext = React.createContext('');

export class PortalProvider extends React.Component<any, any> {
  render() {
    return <PortalContext.Provider value={this.props.initialized}>{this.props.children}</PortalContext.Provider>;
  }
}
