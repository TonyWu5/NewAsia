import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={History} />
        <Route exact path="/menu" render={(props)=><Menu dishes={this.state.menu}/>}/>
        </div>
      </Router>
    )
  }
}

export default App;