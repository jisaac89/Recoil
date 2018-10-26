import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { IButtonProps } from './IButton';
import { ButtonWrapper, TouchableWrapper, ButtonTitle } from './style';

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

export { IButtonProps };
