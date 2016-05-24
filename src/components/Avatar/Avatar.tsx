import * as React from 'react';
import * as classNames from 'classnames';
import './Avatar.less';

export default class Avatar extends React.Component<any, any>{
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
