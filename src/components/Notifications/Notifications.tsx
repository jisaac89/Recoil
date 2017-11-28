import * as React from 'react';

import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

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
        }, 20000);
    }

    render() {
        const self = this;
        const props = self.props;

        let animationClass;

        if (this.state.view === 'visible') {
            animationClass = 'animated fadeInUp';
        } else if (this.state.view === 'hiding') {
            animationClass = 'animated';
        } else {
            //animationClass = 'hide';
        }

        return this.state.view === 'visible' ? <Toolbar block textCenter className="p10 w100"><Button block theme={props.item.type ? props.item.type : 'default'} className={animationClass}>{props.item.title}</Button></Toolbar> : null
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
            'dblock',
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