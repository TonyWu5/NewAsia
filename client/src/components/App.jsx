import React from 'react';
import Menu from '../components/menu/Menu.jsx';
import data from '../../../testAssets/MenuData.js';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      menu: data.MenuData
    }
  }

  render() {
    return (
      <div>
        <Menu dishes={this.state.menu}/>
        <div>Hello from React</div>
      </div>
    )
  }
}

export default App;