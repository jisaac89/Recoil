import classNames from 'classnames';
import React from 'react';

export interface IAvatarProps {
  src?: 'string';
}

export const Avatar = props => {
  const avatarClass = classNames('r-Avatar');
  return <div className={avatarClass} style={{ backgroundImage: 'url(' + props.src + ')' }} />;
};
