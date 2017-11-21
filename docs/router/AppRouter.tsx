import * as React from 'react';
import * as ReactDom from 'react';
import {Router, Route, browserHistory, Redirect, IndexRoute} from 'react-router';
import {observer} from 'mobx-react';

import Entry from '../views/Entry';
import Dashboard from '../views/dashboard/Dashboard';
import { createHashHistory } from 'history';

@observer
export default class AppRouter extends React.Component<any, any> {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Entry}>
                    <IndexRoute component={Dashboard}/>
                </Route>
            </Router>
        );
    }
}
