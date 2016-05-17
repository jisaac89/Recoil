import * as React from 'react';
import {observer} from 'mobx-react';
import {browserHistory} from 'react-router';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';
import Pane from '../../src/components/Pane/Pane';
 
import {appState} from '../state/AppState';

@observer 
export default class Header extends React.Component<any,any>{
    
    render() {
        return(
            <Pane className="z5" direction="top" open={appState.loggedIn}>
                <Layer type="light">
                    <Toolbar block className="p10">
                        <Button ghost>Welcome <strong>{appState.userName}</strong></Button>
                        <Button right onClick={this.signOut}>Sign Out</Button>
                    </Toolbar>
                </Layer>
            </Pane>
        )
    }
    signOut = () => {
        appState.signOut();
        browserHistory.push('/');
    }
}