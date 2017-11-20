import React from 'react';
import $ from 'jquery';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import queryString from 'query-string';

import { withRouter } from 'react-router';

import './Login.css';

//using turaco for oauth, we need to hit an endpoint to load the login page and authorize the application
//turaco requires paramaters of client_id, response_type, and redirect_uri 
const loginRedirect = 
  process.env.REACT_APP_TURACO_URI + 'oauth/authorize?' + 
    $.param({
      client_id: process.env.REACT_APP_UID,
      response_type: 'code',
      redirect_uri: window.location.origin + '/login'
    });

class Login extends React.Component {
  componentWillMount() {
    debugger;
    if (JSON.parse(localStorage.getItem('user'))) this.props.history.push('/');
    const params = queryString.parse(this.props.location.search);
    const code = params['code'];
    if (code != null) {
      this.props.logIn(code);
      this.props.history.push('/');
    }
  }
  redirect() {
    window.location.replace(loginRedirect);
  }
  render() {
    return (
      <Grid className="login-page">
        <Row>
          <Col className={"col-md-offset-4 col-md-4"}>
            <div className="form-login">
              <h4>Welcome to Talk Birdy.</h4>
              <div className="wrapper">
                <span className="group-btn"> 
                    <Button
                        type="submit"
                        primary
                        onClick={this.redirect}> Log In </Button>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
};


export default withRouter(Login);