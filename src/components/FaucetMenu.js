import merge from 'lodash.merge';

import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// Semantic Types
import {
  Icon
} from 'semantic-ui-react';

// Components
import FabricIdentity from './FabricIdentity';
// import FabricIdentityManager from './FabricIdentityManager';

class Menu extends Component {
  constructor (props) {
    super(props);

    this.settings = merge({
      explain: false,
      keys: []
    }, props);

    // TODO: prepare Fabric
    // i.e., use _state here, then import from getter and apply properties
    // _from_ @react
    this.state = {
      explain: true,
      xprv: this.settings.xprv,
      integrity: 'sha256-deadbeefbabe',
      status: 'PAUSED'
    };
  }

  render () {
    return (
      <>
        <Link to='/' className='active item'><Icon name='home' /> Home</Link>
        <Link to='/transactions' className='item'><Icon name='tasks' /> Transactions</Link>
        <div className='ui right borderless menu'>
          <FabricIdentity xprv={this.state.xprv} />
        </div>
      </>
    );
  }

  isVisible () {
    if (this.state.explain) return true;
    return false;
  }

  _handleGenerateClick () {
    console.log('generate request click');
  }

  _handleGenerateKeyPress (e) {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      console.log('Button received click with keyboard');
    }
  }
}

export default Menu;
