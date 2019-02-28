import * as React from 'react';
import classNames from 'classnames';

export interface IAvatarProps {
  src?: 'string';
}

export const Avatar = props => {
  let avatarClass = classNames('r-Avatar');
  return <div className={avatarClass} style={{ backgroundImage: 'url(' + props.src + ')' }} />;
};
