import * as React from 'react';
import { IAvatarProps } from './IAvatar';
import { AvatarWrapper } from './style';

export const Avatar = (props: IAvatarProps) => {
	return <AvatarWrapper {...props} />;
};
