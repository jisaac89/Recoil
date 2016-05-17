import * as React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {appState} from '../state/AppState';
import {inventoryState} from '../state/InventoryState';
import {supplierState} from '../state/SupplierState';
import { browserHistory, Router, Route, Link } from 'react-router';

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

import Login from './Login';
import Header from './Header';

@observer
export default class App extends React.Component<any, any> {
    render() {
        const { pathname } = this.props.location;
        const key = pathname;
        return (
            <Layer scrollY fill overflow className={appState.nightmode ? 'e-NightMode pt50' : 'pt50'}>
                <Login />
                <Header />
                {React.cloneElement(this.props.children || <div />, { key: key})}
                
            </Layer>
        );
     }
};

// <DevTools />
