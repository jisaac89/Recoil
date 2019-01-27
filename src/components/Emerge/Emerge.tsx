import * as React from 'react';
import { Transition } from 'react-spring';
import { IEmergeProps } from './IEmergeProps';

const items = [
	{
		text: 0,
		key: 0
	},
	{
		text: 1,
		key: 1
	},
	{
		text: 2,
		key: 2
	},
	{
		text: 3,
		key: 3
	},
	{
		text: 4,
		key: 4
	}
];

export const Emerge = (props: any) => {
	return (
		<Transition
			items={props.children}
			// keys={(item) =>}}
			from={{ transform: 'translate3d(0,-40px,0)' }}
			enter={{ transform: 'translate3d(0,0px,0)' }}
			leave={{ transform: 'translate3d(0,-40px,0)' }}
		>
			{(item) => (props) => <div style={props}>{item.text}</div>}
		</Transition>
	);
};

export { IEmergeProps };
export default Emerge;
