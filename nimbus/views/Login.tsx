import * as React from 'react';
import {observer} from 'mobx-react';
import { Link, browserHistory } from 'react-router';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Input from '../../src/components/Input/Input';
import Door from '../../src/components/Door/Door';
import Emerge from '../../src/components/Emerge/Emerge';

import {appState} from '../state/AppState';

@observer
export default class Login extends React.Component<any, any> {
    
    render() {
        const {key} = this.props;
        const {loginView} = appState;
        
        return (
            <Door open={loginView} className="text-center">
                <Toolbar block vertical spacing className="p20 w400px">
                    <Emerge>
                        <div>
                            <img src="img/BlueCloud.png" className="w100 p10 mb20 floatL" />
                        </div>
                        <p className="dblock mb20">Login with your account below to get started</p>
                        <Input focusOnMount block type="text" icon="user" title="USERNAME" />
                        <Input  block type="text" icon="eye" title="PASSWORD" />
                        <Button block type="primary" className="mb10" onClick={this.signIn}>SIGN IN</Button>
                        <Button block>FORGOT PASSWORD</Button>
                    </Emerge>
                </Toolbar>
            </Door>
        );
     }
     
     signIn = () => {
        appState.toggleSignIn();
        browserHistory.push('/dashboard');
     }
    
};

