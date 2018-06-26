/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

const title = 'Log In';


function submitHandler(e) {
  e.preventDefault();
  console.log(e);
  //history.push('http://localhost:5000/login?id='+e);
}

class Login extends React.Component{
  constructor(props, context) {
    super(props, context);
    context.setTitle(title);
    this.state={
      userId:"",
      password:"",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({
      [event.target.id]:event.target.value
    });
  }

  render(){
    return (
        <div className="col-md-4 col-md-offset-4">
          <div className="text-center">
            <h1 className="login-brand-text">아카데미아</h1>
          </div>

          <Panel header={<h3>Please Sign In</h3>} className="login-panel">

            <form action="http://localhost:5000/login" role="form">
              <fieldset>
                <div className="form-group">
                  <FormControl
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="id"
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    name="pwd"
                    onChange={this.handleInputChange}
                  />
                </div>
                <Checkbox label="Remember Me" > Remember Me </Checkbox>
                <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
              </fieldset>
            </form>

          </Panel>

        </div>

      );
  }
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
