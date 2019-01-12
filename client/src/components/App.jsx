import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home.jsx';
import History from './History.jsx';

class App extends React.Component {
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
          </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={History} />
        </div>
      </Router>
    )
  }
}

export default App;