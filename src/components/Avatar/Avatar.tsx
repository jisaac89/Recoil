import * as React from 'react';
import styled from 'styled-components/native';
import { IAvatarProps } from './IAvatar';
import { backgroundImage } from '../../styles/classList';

export const Avatar = (props: IAvatarProps) => {
	return <AvatarWrapper {...props} />;
};

const AvatarWrapper = styled.View`${(props) => (!props.src ? backgroundImage(props.src) : null)};`;
