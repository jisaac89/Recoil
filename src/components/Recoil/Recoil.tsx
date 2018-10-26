import * as React from 'react';
import * as classNames from 'classnames';
import ShortCutProvider from '../ShortCut/ShortCutProvider';

import PortalProvider from '../Portal/PortalProvider';

import { isMobile, isTablet } from './index';
import { GlobalReset } from '../../styles/globalReset';

// import { ThemeProvider, styled } from 'styled-components';

import { mainTheme } from '../../styles/mainTheme';
import { GlobalClasses } from '../../styles/globalClasses';

import styled, { ThemeProvider } from 'styled-components/native';

import { View } from 'react-native-web';
import { overflow, scroll, scrollX, scrollY, fill, flexDirection } from '../../styles/classList';

export interface IRecoilProps {
	nightmode?: boolean;
	className?: string;
	overflow?: boolean;
	scroll?: boolean;
	scrollX?: boolean;
	scrollY?: boolean;
	isMobile?: boolean;
	isTablet?: boolean;
	onDevice(device: string): void;
	// shortcut key to enable shortcuts on recoil
	shortCutInitKey?: any;
	// import custom  styles
	globalStyles?: any;
	theme?: any;
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

export default class Recoil extends React.Component<IRecoilProps, any> {
	refs: any;

	static defaulProps = {
		theme: {
			main: mainTheme
		}
	};

	constructor(props: IRecoilProps) {
		super(props);
		this.state = {
			inputIsFocused: false,
			isMobile: props.isMobile || isMobile,
			isDesktop: false,
			isTablet: props.isTablet || isTablet,
			initialized: false
		};
		// init
		this.detectMobile();
	}

	componentDidMount() {
		this.isMobile(isMobile);
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

	componentDidUpdate(prevProps: IRecoilProps, prevState) {
		!!this.props.isMobile && this.props.isMobile !== prevState.isMobile ? this.isMobile(this.props.isMobile) : null;
	}
	isMobile(mobile: boolean) {
		const self = this;
		if (mobile) {
			delegate(self.refs.Recoil, 'focusin', 'input', function() {
				self.setState({
					inputIsFocused: true
				});
			});
			delegate(self.refs.Recoil, 'focusout', 'input', function() {
				self.setState({
					inputIsFocused: false
				});
			});
		}
	}
	render() {
		const self = this;
		const props = self.props;

		let { theme, children } = props;

		let RecoilClass = classNames(
			{ 'e-NightMode': props.nightmode },
			{ 'e-inputIsFocused': this.state.inputIsFocused },
			props.className
		);

		return (
			<RecoilWrapper>
				<PortalProvider initialized={this.state.initialized}>
					<ShortCutProvider shortCutInitKey={props.shortCutInitKey}>{children}</ShortCutProvider>
				</PortalProvider>
				<GlobalReset />
				<GlobalClasses />
			</RecoilWrapper>
		);
	}
}

const RecoilWrapper = styled.View`
	${fill};
	${(props) => (props.overflow ? overflow : 'overflow: hidden')};
	${(props) => (props.scroll ? scroll : 'overflow: hidden')};
	${(props) => (props.scrollX ? scrollX : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? scrollY : 'overflow-y: hidden')};
`;
