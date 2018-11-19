import * as React from 'react';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';
import classNames from 'classnames';

import { IRecoil } from '../../index';

export interface ICheckboxProps extends IRecoil {
	onChange: (value: boolean, event?: React.MouseEvent<MouseEvent>) => void;
	checked: boolean;
	icon?: string;
	title?: string;
	loading?: boolean;
}

export default class Checkbox extends React.Component<ICheckboxProps> {
	static defaultProps = {
		checked: false
	};

	public toggleChecked = () => {
		this.props.onChange ? this.props.onChange(this.props.checked) : null;
	};

	render() {
		const self = this;
		const props = self.props;
		let { checked, disabled, icon, loading, theme, size } = props;

		let checkboxClass = classNames('r-Checkbox', { disabled: props.disabled }, { 'e-checked': this.props.checked });

		let checkboxProps = {
			disabled,
			loading,
			size,
			icon,
			onClick: this.toggleChecked,
			theme: theme ? theme : checked ? 'primary' : 'default'
		};

		return (
			<Toolbar flush className="r-Checkbox__Wrapper">
				<Button className={checkboxClass} {...checkboxProps} />
				{props.title ? (
					<Button {...checkboxProps} simple>
						{props.title}
					</Button>
				) : null}
			</Toolbar>
		);
	}
}
