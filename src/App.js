// Dependencies
import * as state from './settings/state';
import * as merge from 'lodash.merge';

// React
import React from 'react';
import { store } from './app/store'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
// import * as Fabric from '@fabric/core';

// Stylesheets
import './App.css';
import './semantic.css';
import './index.css';

// Components
/* import {
  Container,
  Divider,
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
  // Visibility
} from 'semantic-ui-react'; */

// Fabric Types
import Actor from '@fabric/core/types/actor';
import FabricComponent from './types/component';

// Fabric Components
import FabricBridge from './components/FabricBridge';
import FabricDebugger from './components/FabricDebugger';
// import FabricIdentityManager from './components/FabricIdentityManager';
// import FabricNodeList from './components/FabricNodeList';
import FabricTransactionList from './components/FabricTransactionList';

// Portal
import Home from './Home';

/**
 * The Portal web application.
 */
class App extends FabricComponent {
  constructor (settings) {
    super(settings);

    const state = store.getState();
    this.settings = merge({}, state, settings);

    // this.fabric = new Fabric();
    this.state = merge({
      actor: null,
      host: 'localhost',
      integrity: null,
      snapshots: []
    }, state, settings);

    return this;
  }

  _handleBridgeChange (event) {
    console.log('bridge change:', event);
  }

  componentDidMount () {
    const proof = new Actor(this.state);
    return this;
  }

  render () {
    return (
      <react-application id='root'>
        <Router>
          <div className='pusher'>
            <Routes>
              <Route path='/' exact element={<Home state={this.state} balances={this.state.balances} keys={this.state.keys} host={this.state.host} />} />
              <Route path='/transactions' element={<FabricTransactionList state={this.state} balances={this.state.balances} keys={this.state.keys} />} />
            </Routes>
            {/*
            <Segment className='ui inverted vertical footer segment'>
              <Container className='ui container'>
                <FabricDebugger />
                <Divider />
                <FabricBridge onChange={this._handleBridgeChange.bind(this)} port={this.settings.port} />
              </Container>
            </Segment>
            */}
          </div>
        </Router>
      </react-application>
    );
  }
}

export default App;
