import * as React from 'react';
import { Recoil, Checkbox, Layer, Align, Toolbar } from '../../src/index';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Align vertical>
					<Checkbox title="Toggle This" icon="star" checked={false} onChange={() => {}} />
					<Checkbox title="Toggle This" icon="star" checked={false} onChange={() => {}} />
				</Align>
			</Recoil>
		);
	}
}
