import React from 'react';

import classNames from 'classnames';
import Portal from '../Portal/Portal';
import Notification from './Notification';

export interface INotificationsProps {
  dataSource: INotificationItem[];
  className: string;
}

export interface INotificationItem {
  template: string | JSX.Element;
  type?: NotificationType;
  id?: number;
}

export type NotificationType = 'success' | 'primary' | 'error' | 'default';

export interface INotificationsState {}

export class Notifications extends React.Component<INotificationsProps, INotificationsState> {
  render() {
    const { className, dataSource } = this.props;

    const notificationClass = classNames('r-Notifications', 'w400px', 'dblock', className);

    return (
      <Portal
        open={true}
        portalTemplate={
          <div className={notificationClass}>
            {dataSource.map((item, index) => {
              return <Notification item={item} key={index} />;
            })}
          </div>
        }
      />
    );
  }
}
