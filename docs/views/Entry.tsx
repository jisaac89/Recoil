import * as React from 'react';
import { Recoil, Checkbox, Layer, Button, Align, Toolbar } from '../../src/index';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Layer flex="row">
					<Align>
						<Button checked={true} block>
							WFASFASF
						</Button>
						<Layer>
							<Checkbox checked={true} title="hello" onChange={() => {}} />
						</Layer>
						<Button block>WFASFASF</Button>
					</Align>
				</Layer>
			</Recoil>
		);
	}
}
