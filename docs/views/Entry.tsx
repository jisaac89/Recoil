import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';

import { ThemeProvider } from 'styled-components';
import { p, w } from '../../src/styles/classList';
import { nightModeTheme } from '../../src/styles/themes';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow nightmode={false} onDevice={() => {}}>
				<Button checked>Primary</Button>
				<Button checked checkedAmount={20} block>
					Amount
				</Button>
				<ThemeProvider theme={nightModeTheme}>
					<Button>Nightmode</Button>
				</ThemeProvider>
			</Recoil>
		);
	}
}
