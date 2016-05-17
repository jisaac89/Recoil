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

@observer
export default class Dashboard extends React.Component<any, any> {
    render() {
        const {key} = this.props;
        const {loggedIn} = appState;
        const { pathname } = this.props.location;
        return (
            <Door open={loggedIn}>
                <Toolbar spacing block className="p10 border-bottom">
                    <Button ghost checked={pathname === "/dashboard/inventory"} onClick={this.gotoPage.bind(this,"/dashboard/inventory")}>Inventory</Button> 
                    <Button ghost checked={pathname === "/dashboard/suppliers"} onClick={this.gotoPage.bind(this,"/dashboard/suppliers")}>Suppliers</Button>
                </Toolbar>
                {React.cloneElement(this.props.children || <div />, { key: key })}
            </Door>
        );
     }
     
   gotoPage(page) {
       appState.gotoPage(page);
   }
};