import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../state/AppState';
import {inventoryState} from '../state/InventoryState';
import {takeState} from '../state/TakeState';
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
export default class Take extends React.Component<any, any> {
    detailTemplate(key, item) {
        const self = this;
        return (
            <Toolbar flush key={key} block className="p10 text-right border-top">
                <Button type="primary" onClick={self.onRowSelect.bind(self, item)}>Add</Button>
            </Toolbar>
        )
    }
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
                        <h4>
                            <strong>{data.item.name}</strong>
                        </h4>
                        <small>{data.item.description}</small>
                    </div>
                )
            }
            
            let columns = [
                {name: 'item', template: imageTemplate, width: 65},
                {name: 'item', template: infoTemplate}
            ]
            
            return (
                <Emerge if={key  === '/dashboard/take'}>
                    <Layer className="p10 ps20">
                        <Wizard>
                            <div>
                                <Layer flex flow="center column" align="center" justify="center" className="h400px text-center">
                                        <div className="w500px center-width">
                                    <Emerge className="w100">
                                        <h1>Start by finding your Item</h1>
                                        <Toolbar block className="mtb10">
                                            <Input focusOnMount block type="text" title="Find Item by keyword or tag name." />
                                        </Toolbar>
                                    </Emerge>
                                        </div>
                                    <Door open={false}>
                                        <Grid 
                                        selected={takeState.cart}
                                        selectedKey={'guid'}
                                        detailTemplate={this.detailTemplate.bind(this)}
                                        hideHeader numberPerPage={inventoryState.inventoryLength} dataSource={inventoryState.inventory.reverse()} columns={columns} />
                                    </Door>
                                </Layer>
                            </div>
                            <div>
                                a
                            </div>
                        </Wizard>
                    </Layer>
                </Emerge>
            )
     }
     
     gotoSuppliers = () => {
         browserHistory.push('/dashboard/suppliers');
     }
     
     
     
    onRowSelect(item) {
        takeState.addItemToCart(item);
    }
};