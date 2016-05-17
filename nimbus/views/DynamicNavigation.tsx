import * as React from 'react';
import {observer} from 'mobx-react';

import {appState} from '../state/AppState';
import {supplierState} from '../state/SupplierState';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';
import Door from '../../src/components/Door/Door';
import Emerge from '../../src/components/Emerge/Emerge';
import Wizard from '../../src/components/Wizard/Wizard';

@observer
export default class DynamicNavigation extends React.Component<any,any>{
    render(){
        const {pathname} = this.props;
        return (
            <div>
                <Wizard vertical slideIndex={supplierState.slideIndex}>
                    <Toolbar spacing block className="p10 border-bottom">
                        <Button size="small" checked={pathname === "/dashboard/inventory"} onClick={this.gotoPage.bind(this,"/dashboard/inventory")}>Inventory</Button> 
                        <Button size="small" checked={pathname === "/dashboard/suppliers"} onClick={this.gotoPage.bind(this,"/dashboard/suppliers")}>Suppliers</Button>
                    </Toolbar>
                    <Toolbar flush block className="p10 border-bottom">
                        <Button pointer="right" size="small" onClick={this.gotoIndex.bind(this)}>Suppliers</Button>
                        <Button size="small" checked={supplierState.slideIndex === 1}>Add</Button>
                    </Toolbar>
                </Wizard>
            </div>
        )
    }
   gotoPage(page) {
       appState.gotoPage(page);
   }
   gotoIndex() {
        supplierState.slideIndex = 0;
   }
}