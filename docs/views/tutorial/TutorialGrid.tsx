import * as React from 'react';
import {
	Align,
	Button,
	Toolbar,
	Grid,
	Checkbox,
	Table,
	Layer,
	Dropdown,
	Input,
	Wizard,
	Modal,
	Open,
	Emerge,
	SlideIn,
	Transform,
	Toggle,
	Shrink
} from '../../../src/index';

import TutorialView from './TutorialView';
const TableProperties = [
	{
		name: 'columns',
		type: '',
		options: '',
		description: 'Defines the columns object.'
	},
	{
		name: 'sortable',
		type: 'boolean',
		options: 'true, false',
		description: 'Defines if the Table is sortable.'
	},
	{
		name: 'hideHeader',
		type: 'boolean',
		options: 'true, false',
		description: 'Defines if the Table header is visible.'
	},
	{
		name: 'selected',
		type: '',
		options: '',
		description: 'Return item, so user can filter it.'
	},
	{
		name: 'onSelect',
		type: '',
		options: '',
		description: 'Define a function of what happens when a user selected a row.'
	},
	{
		name: 'dataSource',
		type: '',
		options: '',
		description: 'Define the Tables actual data object.'
	},
	{
		name: 'detailTemplate',
		type: '',
		options: 'key, item',
		description: 'Returns a custom row template.'
	},
	{
		name: 'selectedKey',
		type: '',
		options: 'key, item',
		description: 'Returns a custom row template.'
	},
	{
		name: 'selected',
		type: '',
		options: 'key, item',
		description: 'Returns a custom row template.'
	},
	{
		name: 'onRowSelect',
		type: '',
		options: 'key, item',
		description: 'Returns a custom row template.'
	}
];

export default class TutorialTable extends React.Component<any, any> {
	constructor(props) {
		super(props);

		this.state = {
			showProps: true,
			showVideo: false
		};
	}

	toggleShowProps() {
		this.setState({
			showVideo: false,
			showProps: this.state.showProps ? false : true
		});
	}

	toggleShowVideo() {
		this.setState({
			showProps: false,
			showVideo: this.state.showVideo ? false : true
		});
	}

	detailTemplate(element) {
		return (
			<Layer theme="light" className="p10 pl50">
				<small>{element.description}</small>
			</Layer>
		);
	}

	render() {
		const self = this;
		const props = self.props;
		let state = self.state;

		const columns = [ { name: 'name' } ];

		let colTemplate = (item, index) => {
			return (
				<Layer theme="light" fill border flexCenter>
					{item.name}
				</Layer>
			);
		};

		let example = () => {
			return (
				<div>
					<Grid
						margin="20px"
						className="mb20"
						rows={[ { columns: [ 1, 1, 1, 1, 1 ], height: '200px', template: colTemplate.bind(this) } ]}
						dataSource={TableProperties}
					/>

					<Grid
						className="mb20"
						margin={'20px'}
						rows={[
							{ columns: [ 1 ], height: '400px', template: colTemplate.bind(this) },
							{ columns: [ 1, 1 ], height: '200px', template: colTemplate.bind(this) },
							{ columns: [ 1 ], height: '400px', template: colTemplate.bind(this) },
							{ columns: [ 1, 1, 1, 1 ], height: '200px', template: colTemplate.bind(this) }
						]}
						dataSource={TableProperties}
					/>

					<Grid
						margin="20px"
						rows={[ { columns: [ 1, 1, 1, 1, 1 ], height: '200px', template: colTemplate.bind(this) } ]}
						dataSource={TableProperties}
					/>
				</div>
			);
		};

		return (
			<TutorialView
				description="The Table component is a simple data-Table that currently takes in a object."
				Id="Table"
				columnData={TableProperties}
				examples={example}
				scrollIf={props.scrollIf}
				scrollToId={props.scrollToId}
			/>
		);
	}
}
