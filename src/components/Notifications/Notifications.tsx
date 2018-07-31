import * as React from 'react';

import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';


import * as classNames from 'classnames';
import Portal from '../Portal/Portal';

export type NotificationType = 'success' | 'primary' | 'error' | 'default';

export interface INotificationItem {
    template: string | JSX.Element;
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
    constructor(props) {
        super(props);
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
            animationClass = 'animated fadeOut';
        }

        return this.state.view === 'visible' || this.state.view === 'hiding' ? <Toolbar block textCenter className={"p10 m0 w100 e-light e-dropShadow" + ' ' + animationClass}>{props.item.template}</Toolbar> : null
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
        let { className, dataSource } = this.props;

        let notificationClass = classNames(
            'r-Notifications',
            'dblock',
            className
        );

        return (
            <Portal open={true} portalTemplate={
                <div className={notificationClass}>
                    {dataSource.map((item, index) => {
                        return <Notification item={item} key={index} />
                    })}
                </div>
            }
            />
        );
    }
}