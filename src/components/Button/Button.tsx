import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { IButtonProps } from './IButton';
import { ButtonWrapper, ButtonTitle } from './style';
import { ISelectableProps } from '../Selectable/ISelectable';

export const Button = (props: IButtonProps) => {
	const selectableProps: ISelectableProps = {
		theme: props.checkedTheme,
		checkedAmount: props.checkedAmount,
		checked: props.checked
	};
	return (
		<ButtonWrapper {...props}>
			<ButtonTitle kind={props.kind}>{props.children}</ButtonTitle>
			<Selectable {...selectableProps} />
		</ButtonWrapper>
	);
};

export { IButtonProps };
export default Button;
