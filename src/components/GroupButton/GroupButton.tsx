import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { GroupButtonWrapper } from './style/GroupButtonWrapper';
import { ISelectableProps } from '../Selectable/ISelectable';
import { IGroupButtonProps } from './style/IGroupButtonProps';

export const GroupButton = (props: IGroupButtonProps) => {
	const { checkedTheme, checkedAmount, checked, disabled, loading, kind, children } = props;

	const selectableProps: ISelectableProps = {
		theme: checkedTheme,
		checkedAmount: checkedAmount,
		checked: checked
	};
	return (
		<GroupButtonWrapper className="group" {...props} disabled={disabled || loading}>
			{props.children}
			<Selectable {...selectableProps} />
		</GroupButtonWrapper>
	);
};

export { IGroupButtonProps };
export default GroupButton;
