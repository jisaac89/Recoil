import * as React from 'react';
import {observer} from 'mobx-react';

import {appState} from '../state/AppState';
import {inventoryState} from '../state/InventoryState';
import {supplierState} from '../state/SupplierState';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';
import Grid from '../../src/components/Grid/Grid';
import Emerge from '../../src/components/Emerge/Emerge';
import Door from '../../src/components/Door/Door';
import Input from '../../src/components/Input/Input';
import Wizard from '../../src/components/Wizard/Wizard';

import AddSupplier from './AddSupplier';

@observer
export default class Inventory extends React.Component<any, any> {
    detailTemplate(index, item){
        return (
            <div key={index}>
                {item.SupplierName}
            </div>
        )
    }
    render() {
        const { pathname } = this.props.location;
        const key = pathname;

        let infoTemplate = (data, key) => {
            return (
                <div key={key}>
                    <h3>
                        <strong>{data.SupplierName}</strong>
                    </h3>
                    <small>{data.Website}</small>
                </div>
            )
        }
        
        let menuTemplate = (data, key) => {
            return (
                <Toolbar flush key={key}>
                    <Button size="small" onClick={this.removeSupplier.bind(this, data.SupplierName)} icon="star" />
                    <Button size="small" onClick={this.removeSupplier.bind(this, data.SupplierName)} icon="pencil" />
                    <Button size="small" onClick={this.removeSupplier.bind(this, data.SupplierName)} icon="times" />
                </Toolbar>
            )
        }

        let columns = [
            {name: 'Website', template: infoTemplate},
            {name: 'Website', width:'170', template: menuTemplate}
        ]

        return (
           <Emerge if={key  === '/dashboard/suppliers'}>
            <Layer>
                <Wizard slideIndex={supplierState.slideIndex}>
                    <div className="p10 ps20">
                        <h1>Suppliers</h1>
                        <Toolbar block className="mtb10">
                            <Input focusOnMount block type="text" title="Find Item by keyword or tag name." />
                        </Toolbar>
                        <Toolbar spacing block className="mb10">
                            <Button icon="plus" onClick={this.toggleSlideIndex}>Add Supplier</Button>
                        </Toolbar>
                        <Grid 
                            hideHeader 
                            dataSource={supplierState.suppliers.reverse()} 
                            columns={columns}
                        />
                    </div>
                    <div>
                        <AddSupplier />
                    </div>
                </Wizard>   
            </Layer>
            </Emerge>
            )
     }
     
     toggleSlideIndex = () => {
         supplierState.toggleSlideIndex();
     }
     
     removeSupplier(supplier) {
         supplierState.removeSupplier(supplier);
     }
};