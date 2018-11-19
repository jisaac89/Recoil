import * as React from 'react';
import classNames from 'classnames';

export interface IAvatarProps {
	src?: 'string';
}

export const Avatar = () => {
	let avatarClass = classNames('r-Avatar');
	return <div className={avatarClass} style={{ backgroundImage: 'url(' + this.props.src + ')' }} />;
};
