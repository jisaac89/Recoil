import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../state/AppState';
import {inventoryState} from '../state/InventoryState';
import { browserHistory, Router, Route, Link } from 'react-router';

import Button from '../../src/components/Button/Button';
import Toolbar from '../../src/components/Toolbar/Toolbar';
import Layer from '../../src/components/Layer/Layer';
import Grid from '../../src/components/Grid/Grid';
import Emerge from '../../src/components/Emerge/Emerge';
import Door from '../../src/components/Door/Door';
import Input from '../../src/components/Input/Input';
import Wizard from '../../src/components/Wizard/Wizard';

@observer
export default class Inventory extends React.Component<any, any> {
    render() {
        const { pathname } = this.props.location;
        const key = pathname;
  
        let imageTemplate = (data) => {
                return (
                    <img height={65} width={65} src={data.item.imageUrl}/>
                )
            }

            let infoTemplate = (data) => {
                return (
                    <div>
                        <h3>
                            <strong>${data.price}</strong>
                        </h3>
                        <small>{data.item.description}</small>
                    </div>
                )
            }
            
            let columns = [
                {name: 'item', template: imageTemplate, width: 65},
                {name: 'item', template: infoTemplate}
            ]
            
            return (
                <Emerge if={key  === '/dashboard/inventory'}>
                    <Layer className="p10 ps20">
                        <Wizard>
                            <div>
                                <h1>Inventory List</h1>
                                <Toolbar block className="mtb10">
                                    <Input focusOnMount block type="text" title="Find Item by keyword or tag name." />
                                </Toolbar>
                                <Toolbar spacing block className="mb10">
                                    <Button icon="plus" onClick={this.gotoSuppliers}>Add Inventory</Button>
                                </Toolbar>
                                <Grid hideHeader numberPerPage={inventoryState.inventoryLength} dataSource={inventoryState.inventory.reverse()} columns={columns} />
                            </div>
                            <div>
                                {React.cloneElement(this.props.children || <div/>, { key: pathname })}
                            </div>
                        </Wizard>
                    </Layer>
                </Emerge>
            )
     }
     
     gotoSuppliers = () => {
         browserHistory.push('/dashboard/suppliers');
     }
};