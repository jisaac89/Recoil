import * as React from 'react';
import { Recoil, Checkbox, Layer, Button, Align, Toolbar } from '../../src/index';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Layer flex="row">
					<Button checked={true} block>
						Hello
					</Button>
					<Button>World</Button>
					<Button>test</Button>
					<Button block>a</Button>
				</Layer>
			</Recoil>
		);
	}
}
