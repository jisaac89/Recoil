import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';

import { ThemeProvider } from 'styled-components';
import { p, w } from '../../src/styles/classList';
import { defaultTheme } from '../../src/styles/themes/defaultTheme';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<div>
					<Button kind="primary" checked>
						Primary
					</Button>
					<Button checked checkedAmount={20} block>
						Amount
					</Button>
					<Button kind="primary">Nightmode</Button>
				</div>
			</Recoil>
		);
	}
}
