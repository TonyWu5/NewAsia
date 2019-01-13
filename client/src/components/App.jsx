import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar.jsx';
import Home from './Home.jsx';
import History from './History.jsx';
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
        <div>
          <NavigationBar />       
        </div>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={History} />
            <Route exact path="/menu" render={(props)=><Menu dishes={this.state.menu}/>}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;

