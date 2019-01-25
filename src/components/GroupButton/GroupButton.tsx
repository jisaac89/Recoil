import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { GroupButtonWrapper } from './style/GroupButtonWrapper';
import { ISelectableProps } from '../Selectable/ISelectable';
import { IGroupButtonProps } from './style/IGroupButtonProps';

export const GroupButton = (props: IGroupButtonProps) => {
	const { checkedTheme, checkedAmount, checked, disabled, loading, checkedDirection, size, simple } = props;

	const selectableProps: ISelectableProps = {
		kind: checkedTheme,
		checkedAmount: checkedAmount,
		checked: checked,
		checkedDirection: checkedDirection
	};

	// loop through all children and pass new props
	let renderChildren = () => {
		return React.Children.map(props.children, (child) => {
			return React.cloneElement(child as React.ReactElement<any>, {
				size,
				simple
			});
		});
	};

	return (
		<GroupButtonWrapper disabled={disabled || loading} {...props}>
			{renderChildren()}
			<Selectable {...selectableProps} />
		</GroupButtonWrapper>
	);
};

export { IGroupButtonProps };
export default GroupButton;
