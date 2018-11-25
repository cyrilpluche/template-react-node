import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom'

/** COMPONENTS */
import _helper from '../helpers'
import AdminDashboard from './admin/AdminDashboard'
import Home from './home/Home'

class App extends Component {

    render() {
        return (
            <Router history={_helper.History}>
                <Switch>
                    <Route path="/admin-dashboard" component={AdminDashboard}/>
                    <Route path="/home" component={Home}/>
                    <Route path='*' render={() => <Redirect to="/home" />}/>
                </Switch>
            </Router>
            );
    }
}

export default App;
