import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';

import { IRecoil } from '../../index';

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

export const Button = (props: IButtonProps) => {
	return (
		<ButtonWrapper>
			<TouchableWrapper onPress={this.onPress}>
				<ButtonTitle>{props.children}</ButtonTitle>
			</TouchableWrapper>
			<Selectable />
		</ButtonWrapper>
	);
};

const ButtonWrapper = styled.View`
	background: ${(props) => (false && props.theme.main.defaultBackground ? 'red' : 'yellow')};
	border: 1px solid ${(props) => (false && props.theme.main.defaultBorder ? 'red' : 'yellow')};
	padding: 6px 10px;
`;

const TouchableWrapper = styled.TouchableOpacity`
	height: 100%;
	width: 100%;
	background: yellow;
	display: flex;
	${(props) => (props.coverflow ? 'overflow: vibile' : 'overflow: hidden')};
	${(props) => (props.scroll ? 'overflow: auto' : 'overflow: hidden')};
	${(props) => (props.scrollX ? 'overflow-x: auto' : 'overflow-x: hidden')};
	${(props) => (props.scrollY ? 'overflow-y: auto' : 'overflow-y: hidden')};
`;

const ButtonTitle = styled.Text`color: palevioletred;`;

const primaryButton = {
	fg: 'palevioletred',
	bg: 'white'
};
