import * as React from 'react';
export const PortalContext = React.createContext('');

export default class PortalProvider extends React.Component<any, any> {
	render() {
		return <PortalContext.Provider value={this.props.initialized}>{this.props.children}</PortalContext.Provider>;
	}
}
