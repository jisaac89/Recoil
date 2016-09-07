import * as React from 'react';
import * as classNames from 'classnames';
import './Avatar.less';

export interface IAvatarProps{
  src : 'string';
}

export default class Avatar extends React.Component<IAvatarProps, {}>{
  render() {

    const self = this;
    const props = self.props;

    let avatarClass = classNames(
      'r-Avatar'
    )

    return (
      <div className={avatarClass} style={{backgroundImage: 'url('+this.props.src+')'}}></div>
    )
  }
}
