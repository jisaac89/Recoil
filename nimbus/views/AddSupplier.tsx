import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import { browserHistory, Router, Route, Link } from 'react-router';
import {appState} from '../state/AppState';
import {inventoryState} from '../state/InventoryState';
import {supplierState} from '../state/SupplierState';

import Align from '../../src/components/Align/Align';
import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Checkbox from '../../src/components/Checkbox/Checkbox';
import Grid from '../../src/components/Grid/Grid';
import Layer from '../../src/components/Layer/Layer';
import Dropdown from '../../src/components/Dropdown/Dropdown';
import Input from '../../src/components/Input/Input';
import Wizard from '../../src/components/Wizard/Wizard';
import Modal from '../../src/components/Modal/Modal';
import Door from '../../src/components/Door/Door';
import Emerge from '../../src/components/Emerge/Emerge';
import Pane from '../../src/components/Pane/Pane';
import Transform from '../../src/components/Transform/Transform';
import Toggle from '../../src/components/Toggle/Toggle';
import Shrink from '../../src/components/Shrink/Shrink';

@observer
export default class AddSupplier extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            SupplierName: '',
            Website: ''
        }
    }
    handleChange(name, e) {
      var change = {};
      change[name] = e;
      this.setState(change);
    }
    render() {
        const {loggedIn} = appState;
        return (
            <div className="p10 ps20">
                <h1 className="mb10">Add Supplier</h1>
                <h3 className="mtb20"><strong>Supplier Defaults</strong></h3>
                <Toolbar vertical spacing block>
                    <Input onChange={this.handleChange.bind(this, 'SupplierName')} block type="text" placeholder="Supplier Name" />
                    <Input onChange={this.handleChange.bind(this, 'Website')} block type="text" placeholder="Supplier Website" />
                    <Align margin={1} className="mb10">
                        <Input block type="text" placeholder="Contact Name" />
                        <Input block type="text" placeholder="Contact Phone Number" />
                        <Input block type="text" placeholder="Contact e-mail" />
                    </Align>
                    <Align margin={1} className="mb10">
                        <Input block type="text" placeholder="Address 1" />
                        <Input block type="text" placeholder="Address 2" />
                    </Align>
                    <Align margin={1} className="mb10">
                        <Input block type="text" placeholder="City" />
                        <Input block type="text" placeholder="State" />
                        <Input block type="text" placeholder="Zip" />
                    </Align>
                </Toolbar>
                <div>
                    <h3 className="mtb20"><strong>Manage Purchase Orders</strong></h3>
                    <p className="mb10">Send purchase orders to:</p>
                    <Toolbar block flush className="">
                        <Button icon="minus" />
                        <Input type="text" placeholder="e-mail" />
                        <Button type="success" icon="plus" />
                    </Toolbar>
                <div>
                    <p className="mt20 mb10">Send Approval requests to:</p>
                    <Toolbar block className="mb10">
                        <Button className="p0" ghost>Approval Required</Button>
                        <Toggle size="small" className="ml10" />
                    </Toolbar>
                    <Toolbar block flush className="mb10">
                        <Button icon="minus" />
                        <Input type="text" placeholder="e-mail" />
                        <Button type="success" icon="plus" />
                    </Toolbar>
                    <Toolbar block spacing className="border-top pt10 text-right">
                        <Button  onClick={this.cancel}>Cancel</Button>
                        <Button  type="primary" onClick={this.addSupplier}>Add Item</Button>
                    </Toolbar>
                    </div>
                </div>
            </div> 
        );
     }
     
     cancel = () => {
        supplierState.toggleSlideIndex();
     }
     
     addSupplier = () => {
        const self = this;
        var supplier = {
            "SupplierName": self.state.SupplierName,
            "Website": self.state.Website
        };
        supplierState.addSupplier(supplier);
        supplierState.toggleSlideIndex();
     }
};