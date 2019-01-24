import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';

import { ThemeProvider } from 'styled-components';
import { p, w } from '../../src/styles/classList';
import { nightModeTheme } from '../../src/styles/themes/nightModeTheme';
import { Avatar } from '../../src/components/Avatar/Avatar';
import { GroupButton } from '../../src/components/GroupButton/GroupButton';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow onDevice={() => {}}>
				<GroupButton>
					<Avatar
						src={
							'https://media.licdn.com/dms/image/C5603AQGR4DZ-LrcKOQ/profile-displayphoto-shrink_100_100/0?e=1553731200&v=beta&t=RgzFD6Q0kaIwiCs6mLnhLPKwKNv42zhzRfSagZYNnsQ'
						}
					/>
					<Button checked>Primary</Button>
				</GroupButton>
			</Recoil>
		);
	}
}
