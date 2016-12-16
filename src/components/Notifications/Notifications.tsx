import * as React from 'react';
import './Notifications.less';

import Button from '../Button/Button';

import * as classNames from 'classnames';

export type NotificationType = 'success' | 'primary' | 'error' | 'default';

export interface INotificationItem {
    title: string;
    type?: NotificationType;
    id?: number;
}

export interface INotificationProps {
    item: INotificationItem;
}

export interface INotificationState {
    view?: 'visible' | 'hiding' | 'removed';
}

class Notification extends React.Component<INotificationProps, INotificationState>{
    constructor() {
        super();
        this.state = {
            view: 'visible'
        };
    }

    componentDidMount() {
        const self = this;
        setTimeout(() => {
            self.setState({
                view: 'hiding'
            });
        }, 5000);
        setTimeout(() => {
            self.setState({
                view: 'removed'
            });
        }, 6000);
    }

    render() {
        const self = this;
        const props = self.props;

        let animationClass;

        if (this.state.view === 'visible') {
            animationClass = 'animated fadeInUp';
        } else if (this.state.view === 'hiding') {
            animationClass = 'animated fadeOutDown';
        } else {
            //animationClass = 'hide';
        }

        if (this.state.view !== 'removed') {
            return (
                <div className="w100 clearfix p10"><Button right theme={props.item.type ? props.item.type : 'default'} className={animationClass}>{props.item.title}</Button></div>
            );
        } else {
            return null;
        }
    }
}

export interface INotificationsProps {
    dataSource: INotificationItem[];
    className: string;
}

export interface INotificationsState {
}

export default class Notifications extends React.Component<INotificationsProps, INotificationsState>{

    render() {
        let {className, dataSource} = this.props;

        let notificationClass = classNames(
            'r-Notifications',
            className
        );

        return (
            <div className={notificationClass}>
                {dataSource.map((item, index) => {
                    return <Notification item={item} key={item.id || index} />;
                }) }
            </div>
        );
    }
}