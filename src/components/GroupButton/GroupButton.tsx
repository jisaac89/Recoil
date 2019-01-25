import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { GroupButtonWrapper } from './style/GroupButtonWrapper';
import { ISelectableProps } from '../Selectable/ISelectable';
import { IGroupButtonProps } from './style/IGroupButtonProps';
import { RecoilSize } from '../..';

interface IGroupChild {
	size?: RecoilSize;
	simple?: boolean;
	children?: any;
}

export const GroupButton = (props: IGroupButtonProps) => {
	const { checkedTheme, checkedAmount, checked, disabled, loading, checkedDirection, size, simple } = props;

	const selectableProps: ISelectableProps = {
		kind: checkedTheme,
		checkedAmount: checkedAmount,
		checked: checked,
		checkedDirection: checkedDirection
	};

	let _objectWithoutProperties = (obj, keys) => {
		var target = {};
		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}
		return target;
	};

	const groupChildProps = _objectWithoutProperties(props, [ 'children', 'checked' ]);

	// loop through all children and pass new props
	let renderChildren = (props: IGroupChild) => {
		return React.Children.map(props.children, (child) => {
			// remove children object whilst passing in all props on a as need basis
			return React.cloneElement(child as React.ReactElement<any>, groupChildProps);
		});
	};

	return (
		<GroupButtonWrapper disabled={disabled || loading} {...props}>
			{renderChildren(props)}
			<Selectable {...selectableProps} />
		</GroupButtonWrapper>
	);
};

export { IGroupButtonProps };
export default GroupButton;