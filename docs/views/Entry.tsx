import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';

import { ThemeProvider } from 'styled-components';
import { p, w } from '../../src/styles/classList';
import { nightModeTheme } from '../../src/styles/themes/nightModeTheme';

import { monokaiTheme } from '../../src/styles/themes/monokaiTheme';
import { Avatar } from '../../src/components/Avatar/Avatar';
import { GroupButton } from '../../src/components/GroupButton/GroupButton';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow onDevice={() => {}}>
				<Toolbar block>
					<Toolbar size="large" simple right>
						<GroupButton>
							<Button>A</Button>
							<Button>B</Button>
						</GroupButton>
						<Button>C</Button>
					</Toolbar>
				</Toolbar>
			</Recoil>
		);
	}
}
