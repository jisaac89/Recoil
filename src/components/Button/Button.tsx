import * as React from 'react';
import { Selectable } from '../Selectable/Selectable';
import { IButtonProps } from './IButton';
import { TouchableWrapper, ButtonTitle } from './style';
import { Text } from 'react-native';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

// import Icon from 'react-native-vector-icons/Ionicons';

export const Button = (props: IButtonProps) => {
	return (
		<TouchableWrapper
			style={{ alignSelf: props.block ? 'stretch' : 'flex-start' }}
			onPress={this.onPress}
			{...props}
		>
			<Text>{props.children}</Text>
			<Selectable checked={props.checked} />
		</TouchableWrapper>
	);
};

export { IButtonProps };
export default Button;
