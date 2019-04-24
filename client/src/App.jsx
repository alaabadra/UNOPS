import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewTicket from './component/NewTicket';
import Login from './component/Login';
import OpenTicket from './component/OpenTicket';
import MainSidebar from './component/MainSidebar'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/newticket" component={NewTicket} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/mainsidebar" component={() => <MainSidebar selected="tickets" />} />
      <Route  exact path="/openticket" component={OpenTicket} />
    </Switch>
  </BrowserRouter>
    );
  }
}

export default App;
