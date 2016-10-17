import * as React from 'react';
import './Notifications.less';

import Button from '../Button/Button';

import * as classNames from 'classnames';

export interface NotificationItem {
    title: string;
    type?: 'success' | 'primary' | 'error' | 'default';
}

export interface NotificationProps {
    item: NotificationItem;
}

export interface NotificationState {
    view?: 'visible' | 'hiding' | 'removed';
}

class Notification extends React.Component<NotificationProps, NotificationState>{
    constructor() {
        super();
        this.state = {
            view: 'visible'
        }
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

export interface NotificationsProps {
    dataSource: Array<any>;
    className: string;
}

export default class Notifications extends React.Component<NotificationsProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            dataSource: props.dataSource || []
        }
    }

    componentWillReceiveProps(nextProps) {
        const self = this;
        if (nextProps.dataSource != this.props.dataSource) {
            self.setState({
                dataSource: nextProps.dataSource
            })
        }
    }

    render() {
        let {dataSource} = this.state;
        let props = this.props;

        let notificationClass = classNames(
            'r-Notifications',
            props.className
        )

        return (
            <div className={notificationClass}>
                {dataSource.map((item, index) => {
                    return <Notification item={item} key={index} />;
                }) }
            </div>
        );
    }
}