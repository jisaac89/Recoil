import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import { browserHistory, Router, Route, Link } from 'react-router';
import {appState} from '../state/AppState';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';
import Door from '../../src/components/Door/Door';
import Emerge from '../../src/components/Emerge/Emerge';

@observer
export default class Dashboard extends React.Component<any, any> {
    render() {
        const {key} = this.props;
        const {dashboardView} = appState;
        return (
            <Door open={dashboardView}>
                <Toolbar className="p10 border-bottom">
                    <Link to="/dashboard/inventory">Inventory</Link>
                </Toolbar>
                {React.cloneElement(this.props.children || <div />, { key: key })}
            </Door>  
        );
     }
     
     toggleNightMode = () => {
         appState.toggleNightMode();
     }
};