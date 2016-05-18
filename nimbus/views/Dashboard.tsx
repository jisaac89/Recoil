import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import { browserHistory, Router, Route, Link } from 'react-router';
import {appState} from '../state/AppState';
import {supplierState} from '../state/SupplierState';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';
import Door from '../../src/components/Door/Door';
import Emerge from '../../src/components/Emerge/Emerge';

import DynamicNavigation from './DynamicNavigation';

@observer
export default class Dashboard extends React.Component<any, any> {
    render() {
        const {key} = this.props;
        const {loggedIn} = appState;
        const { pathname } = this.props.location;
        return (
            <Door open={loggedIn} className="pt50">
                <hr />
                <DynamicNavigation pathname={pathname} />
                <Door open={pathname === '/dashboard'}>
                    <Toolbar block spacing className="p10 ps20 pt100 text-center">
                        <Button onClick={this.gotoPage.bind(this, '/dashboard/take')} className="h100px ps50">
                            TAKE ITEM
                        </Button>
                        <Button className="h100px ps50">
                            STORE ITEM
                        </Button>
                    </Toolbar>
                </Door>
                <Layer>
                    {React.cloneElement(this.props.children || <div />)}
                </Layer>
            </Door>
        );
     }
   gotoPage(page) {
       appState.gotoPage(page);
   }
};
