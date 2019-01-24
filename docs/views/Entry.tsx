import * as React from 'react';
import { Recoil, Layer, Button, Toolbar, Align, Checkbox, Emerge } from '../../src/index';

import { ThemeProvider } from 'styled-components';
import { p, w } from '../../src/styles/classList';
import { nightModeTheme } from '../../src/styles/themes/nightModeTheme';
import { Avatar } from '../../src/components/Avatar/Avatar';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<Recoil shortCutInitKey={[ 'shift' ]} overflow onDevice={() => {}}>
				<Layer flex fill>
					<Avatar
						src={
							'https://media.licdn.com/dms/image/C5603AQGR4DZ-LrcKOQ/profile-displayphoto-shrink_100_100/0?e=1553731200&v=beta&t=RgzFD6Q0kaIwiCs6mLnhLPKwKNv42zhzRfSagZYNnsQ'
						}
					/>
					<Align>
						<Button checked>Primary</Button>
						{/* <Button size="xlarge" checked checkedAmount={83} block>
						Amount
					</Button> */}
						<Button kind="primary">Nightmode</Button>

						<Checkbox circle title={'Test'} checked={false} onChange={() => {}} />
						<Checkbox kind="primary" checked={true} onChange={() => {}} />
					</Align>
				</Layer>
			</Recoil>
		);
	}
}
