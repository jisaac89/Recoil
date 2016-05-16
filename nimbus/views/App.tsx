import * as React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {appState} from '../state/AppState';
import { browserHistory, Router, Route, Link } from 'react-router';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';
import Pane from '../../src/components/Pane/Pane';

import Login from './Login';

@observer
export default class App extends React.Component<any, any> {
    render() {
        const { pathname } = this.props.location;
        const {loginView} = appState;
        const key = pathname.split('/')[1] || 'root';
        return (
            <Layer scrollY={false} fill overflow className={appState.nightmode ? 'e-NightMode pt50' : 'pt50'}>
                <Login appState={appState} />
                <Pane direction="top" open={!appState.loginView}>
                    <Layer type="light" className="p10">
                        <Button onClick={this.signOut}>Sign Out</Button>
                    </Layer>
                </Pane>
                {React.cloneElement(this.props.children || <div />, { key: key})}
                <DevTools />
            </Layer>
        );
     }
     
     signOut = () => {
         appState.signOut();
         browserHistory.push('/');
     }
};
