import * as React from 'react';
import ShortCutProvider from '../ShortCut/ShortCutProvider';
import PortalProvider from '../Portal/PortalProvider';
import { isMobile, isTablet } from './index';
import { GlobalReset } from '../../styles/globalReset';
import { defaultTheme } from '../../styles/themes/defaultTheme';
import { GlobalClasses } from '../../styles/globalClasses';
import styled, { ThemeProvider } from 'styled-components';
import { overflow, scroll, scrollX, scrollY, fill } from '../../styles/classList';
import { nightModeTheme } from '../../styles/themes/nightModeTheme';
import { defaultPropsTheme } from '../../styles/defaultPropsTheme';
import { IRecoilTheme } from '../../styles/IRecoilTheme';

export interface IRecoilProps {
	nightmode?: boolean;
	className?: string;
	overflow?: boolean;
	scroll?: boolean;
	scrollX?: boolean;
	scrollY?: boolean;
	isMobile?: boolean;
	isTablet?: boolean;
	onDevice?(device: string): void;
	shortCutInitKey?: any;
	globalStyles?: any;
	theme?: IRecoilTheme;
}

export default class Recoil extends React.Component<IRecoilProps, any> {
	refs: any;

	static defaulProps = {
		theme: defaultTheme
	};

	state = {
		inputIsFocused: false,
		isMobile: this.props.isMobile || isMobile,
		isDesktop: false,
		isTablet: this.props.isTablet || isTablet,
		initialized: false
	};

	constructor(props: IRecoilProps) {
		super(props);

		// init
		this.detectMobile();
	}

	componentDidMount() {
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

	render() {
		const self = this;
		const props = self.props;
		let { initialized } = self.state;
		let { theme, children, nightmode, shortCutInitKey } = props;

		return (
			<ThemeProvider theme={theme ? theme : !nightmode ? defaultTheme : nightModeTheme}>
				<RecoilWrapper>
					<PortalProvider initialized={initialized}>
						<ShortCutProvider shortCutInitKey={shortCutInitKey}>{children}</ShortCutProvider>
					</PortalProvider>
					<GlobalReset />
					<GlobalClasses />
				</RecoilWrapper>
			</ThemeProvider>
		);
	}
}

const RecoilWrapper = styled.div<IRecoilProps>`
	${fill};
	${(props) => (props.overflow ? overflow : 'overflow: hidden')};
	${(props) => (props.scroll ? scroll : 'overflow: hidden')};
	${(props) => (props.scrollX ? scrollX : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? scrollY : 'overflow-y: hidden')};
	background-color: ${(props) => props.theme.bodyBackgroundColor};
`;

RecoilWrapper.defaultProps = {
	theme: defaultPropsTheme
};
