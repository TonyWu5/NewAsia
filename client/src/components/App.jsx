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
      menu: data.MenuData,
      links: [
        {path: "/", text: "Home", isActive: false},
        {path: "/history", text: "History", isActive: false},
        {path: "/menu", text: "Menu", isActive: false},
        {path: "/events", text: "Events", isActive: false},
      ]
    }
    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab(i){
    const links = this.state.links.slice(); 
    for (let j in links) {
      links[j].isActive = i == j ;
    }
    this.setState({links});
  }

  render() {
    return (
      <div>
        <div>
          <NavigationBar handleClick={this.handleClickTab} links={this.state.links}/>       
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

