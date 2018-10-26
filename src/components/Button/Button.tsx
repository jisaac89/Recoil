import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { IButtonProps } from './IButton';
import { ButtonWrapper, TouchableWrapper, ButtonTitle } from './style';

export const Button = (props: IButtonProps) => {
	return (
		<TouchableWrapper
			style={{ alignSelf: props.block ? 'stretch' : 'flex-start' }}
			{...props}
			onPress={this.onPress}
		>
			<ButtonWrapper {...props}>
				<ButtonTitle>{props.children}</ButtonTitle>
				<Selectable checked={props.checked} />
			</ButtonWrapper>
		</TouchableWrapper>
	);
};

export { IButtonProps };
export default Button;
