import * as React from 'react';
import * as classNames from 'classnames';
import Selectable from '../Selectable/Selectable';

import { IRecoil } from '../../index';

import { Text, View, TouchableOpacity } from 'react-native-web';
import styled, { ThemeProvider } from 'styled-components/native';

export interface IButtonProps extends IRecoil {
	style?: Object;

	pointer?: 'left' | 'right' | boolean;
	iconPointer?: 'left' | 'right' | 'up' | 'down';
	iconLocation?: 'left' | 'right';
	checkedTheme?: 'primary' | 'success' | 'error' | 'default';
	icon?: string;
	href?: string;
	target?: string;
	block?: boolean;
	strech?: boolean;
	right?: boolean;
	left?: boolean;
	submit?: boolean;
	advanced?: boolean;
	ghost?: boolean;
	required?: boolean;
	id?: string;
	shortcut?: string;
	shortCutInitKey?: string;
	materialIcon?: boolean;

	// TODO MAKE REQUIRED
	onPress?: (event: React.MouseEvent<any>) => void;

	// TODO REMOVE

	onClick?: any;
}

export interface IButtonState {}

export default class Button extends React.Component<IButtonProps, IButtonState> {
	public refs: {
		[key: string]: Element;
		button: HTMLButtonElement;
	};

	public static defaultProps = {
		disabled: false,
		block: false,
		advanced: false,
		iconLocation: 'left',
		theme: false
	};

	constructor(props) {
		super(props);
		// Must pre bind
		this.onPress = this.onPress.bind(this);
	}

	public onPress(event: React.MouseEvent<MouseEvent>) {
		this.props.onPress(event);
	}

	render() {
		const self = this;
		const props = self.props;

		let buttonType: string;

		return (
			<StyledView>
				<StyledOpacity onPress={this.onPress}>
					<StyledText>{props.children}</StyledText>
				</StyledOpacity>
			</StyledView>
		);
	}
}

const StyledView = styled.View`
	background: ${(props) => (false && props.theme.main.defaultBackground ? 'red' : 'yellow')};
	border: 1px solid ${(props) => (false && props.theme.main.defaultBorder ? 'red' : 'yellow')};
	padding: 6px 10px;
`;

const StyledOpacity = styled.TouchableOpacity`
	height: 100%;
	width: 100%;
	background: yellow;
	display: flex;

	${(props) => (props.coverflow ? 'overflow: vibile' : 'overflow: hidden')};
	${(props) => (props.scroll ? 'overflow: auto' : 'overflow: hidden')};
	${(props) => (props.scrollX ? 'overflow-x: auto' : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? 'overflow-y: auto' : 'overflow-y: hidden')};
`;

const StyledText = styled.Text`color: palevioletred;`;

const defaultButton = (props) => ({
	background: false && props.theme.main.defaultBackground ? 'red' : 'yellow',
	border: false && props.theme.main.defaultBorder ? '1px solid  red' : '1px solid yellow'
});

const primaryButton = {
	fg: 'palevioletred',
	bg: 'white'
};
