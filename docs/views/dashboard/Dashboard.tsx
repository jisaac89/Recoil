import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../../state/_Store';
import {Align, Button, Toolbar, Table, Checkbox, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../src/index';

export interface P {
    children: React.ReactChild
}

export interface S {}

@observer
export default class Dashboard extends React.Component<P,S>{
    render() {
        const self = this;
        let gridProps = [
            {
                "description": 'Provide a dataSource object to render',
                "type": 'Array<{}>',
                "prop": "dataSource",
            },
            {
                "description" : "Define a columns object {name, title, hideHeader, template, headerTemplate}",
                'type': 'Array<{}>',
                "prop": "columns",
            },
            {
                "description" : "Columns are sortable",
                "type": 'boolean',
                "prop": "sortable",
            }
        ];

        return (
            <Emerge className="text-center">
                <h1 className="super mtb30"><strong>React</strong> Recoil</h1>
                <div className="w50 center-width">
                    <Table 
                        dataSource={gridProps}
                        />
                </div>
            </Emerge>
        )
    }
}