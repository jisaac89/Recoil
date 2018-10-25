import * as React from 'react';
import { Recoil, Checkbox, Layer } from '../../src/index';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Layer fill flex>
					<Checkbox checked={false} onChange={() => {}} />
					<Checkbox checked={true} onChange={() => {}} />
				</Layer>
			</Recoil>
		);
	}
}
