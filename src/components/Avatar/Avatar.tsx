import classNames from 'classnames';
import React from 'react';
import { IAvatarProps } from './AvatarTypes';

export const Avatar = (props: IAvatarProps) => {
  const avatarClass = classNames('r-Avatar');
  return <div className={avatarClass} style={{ backgroundImage: 'url(' + props.src + ')' }} />;
};
