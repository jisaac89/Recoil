import * as React from 'react';
import { ToolbarWrapper } from './style/ToolbarWrapper';
import { IToolbarProps } from './IToolbar';
import { returnObjectWithoutProperties } from '../Utils';

export default class Toolbar extends React.Component<IToolbarProps, {}> {
	componentDidMount() {
		React.Children.forEach(this.props.children, (child: any) => {
			console.log('name =', child.props.name);
		});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		const self = this;
		const props = self.props;
		console.log(this.props.children);

		const groupChildProps = returnObjectWithoutProperties(props, [
			'children',
			'checked',
			'block',
			'width',
			'height',
			'style',
			'name',
			'right',
			'left'
		]);

		// loop through all children and pass new props
		let renderChildren = (props: any) => {
			return React.Children.map(props.children, (child) => {
				// remove children object whilst passing in all props on a as need basis
				return React.cloneElement(child as React.ReactElement<any>, groupChildProps);
			});
		};

		return (
			<ToolbarWrapper
				onSubmit={this.handleSubmit}
				tab-index={-1}
				id={props.id}
				ref="toolbar"
				onClick={this.props.onClick}
				{...props}
			>
				{renderChildren(props)}
			</ToolbarWrapper>
		);
	}
}
