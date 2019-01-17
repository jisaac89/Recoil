import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';
import { p, w } from '../../src/styles/classList';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Button checked>asfasf</Button>
				<Button checked checkedAmount={20} block>
					asfasf
				</Button>
				<Button>asfasf</Button>
			</Recoil>
		);
	}
}
