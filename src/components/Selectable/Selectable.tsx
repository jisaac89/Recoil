import * as React from 'react';
import { ISelectableProps } from './ISelectable';
import { SelectableWrapper } from './style';
import { Spring } from 'react-spring';

export const Selectable = (props: ISelectableProps) => {
	const { checkedDirection, kind } = props;
	return (
		<Spring
			from={{ value: 0 }}
			to={{ value: props.checked ? (props.checkedAmount ? props.checkedAmount : 100) : 0 }}
		>
			{(props) => (
				<SelectableWrapper
					kind={kind}
					checkeddirection={checkedDirection}
					style={{ width: props.value + '%' }}
				/>
			)}
		</Spring>
	);
};
