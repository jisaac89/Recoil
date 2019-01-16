import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { IButtonProps } from './IButton';
import { TouchableWrapper } from './style';

export const Button = (props: IButtonProps) => {
	return (
		<TouchableWrapper
			style={{ alignSelf: props.block ? 'stretch' : 'flex-start' }}
			onClick={this.onClick}
			{...props}
		>
			<div>{props.children}</div>
			<Selectable checked={props.checked} />
		</TouchableWrapper>
	);
};

export { IButtonProps };
export default Button;
