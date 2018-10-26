import * as React from 'react';
import { Recoil, Checkbox, Layer, Align } from '../../src/index';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Layer dimensions={[ '50px', '50px', 1 ]} />
			</Recoil>
		);
	}
}
