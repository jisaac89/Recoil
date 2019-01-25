import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { GroupButtonWrapper } from './style/GroupButtonWrapper';
import { ISelectableProps } from '../Selectable/ISelectable';
import { IGroupButtonProps } from './style/IGroupButtonProps';

export const GroupButton = (props: IGroupButtonProps) => {
	const { checkedTheme, checkedAmount, checked, disabled, loading, kind, children, checkedDirection } = props;

	const selectableProps: ISelectableProps = {
		kind: checkedTheme,
		checkedAmount: checkedAmount,
		checked: checked,
		checkedDirection: checkedDirection
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
