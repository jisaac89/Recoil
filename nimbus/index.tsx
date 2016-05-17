/// <reference path="../typings/main.d.ts" />

import '../src/less/Recoil.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import DevTools from 'mobx-react-devtools';

import App from './views/App';
import Dashboard from './views/Dashboard';
import Inventory from './views/Inventory';
import Suppliers from './views/Suppliers';
import AddSupplier from './views/AddSupplier';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
        <Route path="dashboard" component={Dashboard}>
            <Route path="inventory" component={Inventory} />
            <Route path="suppliers" component={Suppliers} />
        </Route>
    </Route>
  </Router>,
  document.getElementById('root'));
  
// reference for Recoil components
  
// import Button from '../../src/components/Button/Button';
// import Toolbar from '../../src/components/Toolbar/Toolbar';
// import Checkbox from '../../src/components/Checkbox/Checkbox';
// import Grid from '../../src/components/Grid/Grid';
// import Layer from '../../src/components/Layer/Layer';
// import Dropdown from '../../src/components/Dropdown/Dropdown';
// import Input from '../../src/components/Input/Input';
// import Wizard from '../../src/components/Wizard/Wizard';
// import Modal from '../../src/components/Modal/Modal';
// import Door from '../../src/components/Door/Door';
// import Emerge from '../../src/components/Emerge/Emerge';
// import Pane from '../../src/components/Pane/Pane';
// import Transform from '../../src/components/Transform/Transform';
// import Toggle from '../../src/components/Toggle/Toggle';
// import Shrink from '../../src/components/Shrink/Shrink';