import * as React from 'react';

import {
	Align,
	Recoil,
	Button,
	Toolbar,
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
} from '../../src/index';

import { Text } from 'react-native-web';
import { fill, p, h } from '../../src/styles/sharedStyleObjects';

export default class App extends React.Component<any, any> {
	onPress: any;
	constructor(props) {
		super(props);

		this.state = {
			slideIndex: 0,
			showMenu: true,
			showModal: false,
			nightmode: false,
			mobile: false,
			showDocs: false,
			showInstructions: false
		};

		this.onSelect = this.onSelect.bind(this);
	}

	toggleMenu() {
		this.setState({
			showMenu: !this.state.showMenu
		});
	}

	toggleInstructions() {
		this.setState({
			showInstructions: !this.state.showInstructions
		});
	}

	toggleDocs() {
		this.setState({
			showDocs: !this.state.showDocs
		});
	}

	toggleNightMode() {
		this.setState({
			nightmode: !this.state.nightmode
		});
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal,
			showMenu: this.state.mobile ? false : !this.state.showMenu
		});
	}

	onDevice(device) {
		this.setState({
			mobile: device === 'desktop' ? false : true,
			showMenu: device === 'desktop' ? true : false
		});
	}

	gotoSlideIndex(x) {
		this.setState({
			slideIndex: x,
			showMenu: this.state.mobile ? false : true,
			showModal: false
		});
	}

	onSelect(x) {
		this.gotoSlideIndex(x);
	}

	render() {
		let { nightmode } = this.state;
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={nightmode} onDevice={this.onDevice.bind(this)}>
				<Layer addStyleClass={[ p('10px') ]} dimensions={[ '300px', '300px', 2 ]}>
					<Align fill>
						<Layer fill flexCenter>
							<Text>A</Text>
						</Layer>
						<Layer fill flexCenter>
							<Text>B</Text>
						</Layer>
						<Layer fill flexCenter>
							<Text>C</Text>
						</Layer>
						<Layer fill flexCenter>
							<Text>D</Text>
						</Layer>
					</Align>
				</Layer>
			</Recoil>
		);
	}
}
