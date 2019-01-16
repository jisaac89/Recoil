import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';
import { p, w } from '../../src/styles/classList';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Layer classList={[ p('10px'), w('100%') ]}>
					<Align>
						<Button checked>asfasf</Button>
						<Button block>asfasf</Button>
						<Button>asfasf</Button>
					</Align>

					<h3>Checkbox</h3>

					<Checkbox onChange={() => null} checked={false} />
				</Layer>
				<Emerge>
					<Button checked>asfasf</Button>
					<Button block>asfasf</Button>
					<Button>asfasf</Button>
				</Emerge>
			</Recoil>
		);
	}
}
