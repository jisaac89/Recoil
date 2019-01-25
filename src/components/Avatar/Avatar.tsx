import * as React from 'react';
import { IAvatarProps } from './IAvatar';
import { AvatarWrapper } from './style/AvatarWrapper';
import { Image } from '../Image/Image';
import { Selectable } from '../Selectable/Selectable';

export const Avatar = (props: IAvatarProps) => {
	console.log(props.simple);
	return (
		<AvatarWrapper {...props} simple={props.simple ? 'true' : null}>
			<Image circle={props.circle} fill={true.toString()} source={{ uri: props.src }} />
		</AvatarWrapper>
	);
};
