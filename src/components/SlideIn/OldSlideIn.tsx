import * as React from 'react';
import * as classNames from 'classnames';

import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/OldButton';

export interface ISlideInProps {
	if: boolean;
	fill?: boolean;
	from: 'left' | 'right' | 'top' | 'bottom';
	className?: string;
	offset?: number;
	onClick?: () => void;
	children?: any;
	fixed?: boolean;
	beforeOpen?: () => void;
	afterOpen?: () => void;
	title?: string;
	icon?: string;
	onClose?: () => void;
	mobile?: boolean;
	flex?: boolean;
	id?: string;
}

export default class SlideIn extends React.Component<ISlideInProps, any> {
	constructor(props: ISlideInProps) {
		super(props);
		this.state = {
			offset: props.offset || 0,
			axis: props.from === 'left' || 'right' ? 'X' : 'Y',
			style: props.if
				? { transform: 'translate' + (props.from === 'left' || 'right' ? 'X' : 'Y') + '(' + props.offset + ')' }
				: null,
			showChildren: props.if
		};
	}

	componentDidUpdate(prevProps: ISlideInProps) {
		this.props.if === true && prevProps.if !== true ? this.open() : null;
		this.props.if === false && prevProps.if !== false ? this.close() : null;
	}

	open() {
		this.beforeOpen();
		this.afterOpen();
	}

	beforeOpen() {
		this.props.beforeOpen ? this.props.beforeOpen() : null;
		this.slideIn();
	}

	slideIn() {
		this.setState(
			{
				style: { transform: 'translate' + this.state.axis + '(' + this.state.offset + ')' }
			},
			() => {
				this.afterOpen();
			}
		);
	}

	afterOpen() {
		this.setState({
			showChildren: true
		});
	}

	close() {
		this.setState(
			{
				style: null
			},
			() => {
				this.setState({
					open: false,
					showChildren: false
				});
			}
		);
	}
	render() {
		const self = this;
		const props = self.props;
		let { fill, fixed, flex } = props;

		let slideInContainerClass = classNames(
			'r-SlideIn',
			{ 'e-open': props.if },
			{ 'e-fill': fill },
			{ 'e-flex': flex },
			{ fixed: fixed },
			props.className,
			props.from
		);

		return (
			<div
				id={this.props.id}
				tabIndex={-1}
				onClick={props.onClick}
				ref="slideIn"
				className={slideInContainerClass}
				style={this.state.slideInContainerStyle}
			>
				{props.title || props.onClose ? (
					<Toolbar block flush noRadius className="r-Modal__header border-bottom clearfix">
						{props.title ? (
							<Button simple size="small">
								{this.props.title}
							</Button>
						) : null}
						{props.onClose ? (
							<Button shortcut={'x'} simple size="small" right onClick={props.onClose} icon="times" />
						) : null}
					</Toolbar>
				) : null}
				{props.children}
			</div>
		);
	}
}
