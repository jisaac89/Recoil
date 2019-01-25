import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { IButtonProps } from './IButton';
import { ButtonWrapper } from './style/ButtonWrapper';
import { ButtonTitle } from './style/ButtonTitle';
import { ISelectableProps } from '../Selectable/ISelectable';

export const Button = (props: IButtonProps) => {
	const { checkedTheme, checkedAmount, checked, disabled, loading, kind, children } = props;

	const selectableProps: ISelectableProps = {
		kind: checkedTheme,
		checkedAmount: checkedAmount,
		checked: checked
	};
	return (
		<ButtonWrapper {...props} disabled={disabled || loading}>
			<ButtonTitle kind={kind}>{children}</ButtonTitle>
			<Selectable {...selectableProps} />
		</ButtonWrapper>
	);
};

export { IButtonProps };
export default Button;
