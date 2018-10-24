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

	gotoSlideIndex(item) {
		this.setState({
			slideIndex: item.index,
			showMenu: this.state.mobile ? false : true,
			showModal: false
		});
	}

	render() {
		let { showModal, showMenu, nightmode, slideIndex, mobile } = this.state;
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={nightmode} onDevice={this.onDevice.bind(this)}>
				<Layer fill>
					<Layer dimensions={[ '100px', '100px', 1 ]} flexCenter>
						<Text>Hello</Text>
					</Layer>

					<Layer fill flexCenter>
						<Text>Hello</Text>
					</Layer>

					<Layer dimensions={[ '100px', '100px', 1 ]} flexCenter>
						<Text>Hello</Text>
					</Layer>
				</Layer>
			</Recoil>
		);
	}
}
