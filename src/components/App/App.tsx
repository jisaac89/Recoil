import * as React from 'react';
import * as classNames from 'classnames';
import './App.less';

export default class App extends React.Component<any, any> {
    render() {

        const self = this;
        const props = self.props;

        let appClass = classNames(
            'r-App',
            { 'e-NightMode': (props.nightmode)},
            props.className
        );

        return (
            <div className={appClass}>
                {this.props.children}
            </div>
        );
    }
}
