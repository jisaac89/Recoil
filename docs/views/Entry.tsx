import * as React from 'react';
import { Recoil, Checkbox, Layer, OldCheckbox, Align } from '../../src/index';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<OldCheckbox title="test" checked={false} onChange={() => {}} />
				<Align>
					<Checkbox title="test" checked={false} onChange={() => {}} />
					<Checkbox checked={true} onChange={() => {}} />
					<Checkbox checked={true} onChange={() => {}} />
				</Align>
			</Recoil>
		);
	}
}
