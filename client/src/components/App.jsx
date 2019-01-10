import React from 'react';
import Menu from './Menu.jsx';
import data from '../../../testAssets/MenuData.js';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      menu: data
    }
  }

  render() {
    return (
      <div>
        <Menu dishes={this.state.menu.MenuData}/>
      </div>
    )
  }
}

export default App;