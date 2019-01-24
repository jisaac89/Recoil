import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';

import { ThemeProvider } from 'styled-components';
import { p, w } from '../../src/styles/classList';
import { defaultTheme } from '../../src/styles/themes/defaultTheme';
import { Avatar } from '../../src/components/Avatar/Avatar';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={['shift']} overflow nightmode={false} onDevice={() => { }}>
				<Avatar src={'https://media.licdn.com/dms/image/C5603AQGR4DZ-LrcKOQ/profile-displayphoto-shrink_100_100/0?e=1553731200&v=beta&t=RgzFD6Q0kaIwiCs6mLnhLPKwKNv42zhzRfSagZYNnsQ'}></Avatar>
				<Toolbar flex>
					<Button kind="primary" checked>
						Primary
					</Button>
					{/* <Button size="xlarge" checked checkedAmount={83} block>
						Amount
					</Button> */}
					<Button kind="primary">Nightmode</Button>

					<Checkbox title={'Test'} checked={false} onChange={() => { }} />
					<Checkbox kind="primary" checked={true} onChange={() => { }} />
				</Toolbar>
			</Recoil>
		);
	}
}
