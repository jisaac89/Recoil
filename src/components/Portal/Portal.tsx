import * as React from 'react';
import { PortalContext } from './PortalProvider';
import PortalContent from './PortalContent';

export interface IPortalProps {
	portalId?: string;
	portal?: JSX.Element;
	open?: boolean;
	onClose?: () => void;
	title?: string;
	icon?: string;
	portalType?: string;
	portalTemplate?: JSX.Element;
}

export default class Portal extends React.Component<IPortalProps, any> {
	public static defaultProps = {
		portalType: 'SlideIn'
	};

	portalElement: HTMLElement = null;
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
