import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Home,Home2} from './components';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/Home" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/Home2" activeClassName="active">Home2</NavLink></li>

            </ul>
          </div>

          <div className="App-intro">
            <Switch>

                      <Route path="/Home" component={Home} exact={true} />
                      <Route path="/Home2" component={Home2} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
