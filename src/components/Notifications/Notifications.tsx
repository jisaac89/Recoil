import * as React from 'react';
import './Notifications.less';

import Button from '../Button/Button';

import * as classNames from 'classnames';

class Notification extends React.Component<any, any>{
    constructor() {
        super();
        this.state = {
            view : 'visible'
        }
    }
    componentDidMount() {
        const self = this;
        setTimeout(()=> {
            self.setState({
                view: 'hiding'
            })
        }, 2000);
        setTimeout(function() {
            self.setState({
                view: 'removed'
            });
        }, 3000);
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
            animationClass = 'hide';
        }
        
        if (this.state.view !== 'removed' ) {
            return (
                <div className="w100 clearfix"><Button right type={props.item.type ? props.item.type : ''} className={animationClass}>{props.item.title}</Button></div>
            )
        } else {
            return null;
        }
    }
}

export default class Notifications extends React.Component<any, any>{

    constructor(props){
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

        return (
            <div>
                {dataSource.map((item, index) => {
                    return <Notification item={item} key={index} />;
                })}
            </div>
        )
    }
}