import * as React from 'react';
import { Recoil, Layer, Button, Toolbar } from '../../src/index';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Layer flex="row">
					<Button>asfasf</Button>
					<Button>asfasf</Button>
					<Button>asfasf</Button>
				</Layer>
			</Recoil>
		);
	}
}
