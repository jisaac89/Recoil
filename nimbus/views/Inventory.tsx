import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../state/AppState';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';

@observer
export default class Inventory extends React.Component<any, any> {
    render() {
        const { pathname } = this.props.location;
        const key = pathname.split('/')[1] || 'root';
        
        return (
            <div>    
                <Button onClick={this.toggleNightMode}>
                    Toggle Night Mode {appState.nightmode ? 'true' : 'false'}
                </Button>
            </div>
        );
     }
     
     toggleNightMode = () => {
         appState.toggleNightMode();
     }
};