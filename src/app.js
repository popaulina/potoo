
import React, { Component } from "react";
import { withRouter, Route } from "react-router";
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" >
			  <Route path="/login:code?" component={Login}/>
        </Route>
      </div>
    );
  }
}

export default withRouter(App);