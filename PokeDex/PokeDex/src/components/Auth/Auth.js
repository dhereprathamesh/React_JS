import React, { Component } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./Auth.css";
import helper from "../../utils/helper";
import { Navigate, redirect } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.creds = {
      email: "prath",
      password: "12345678"
    }
  }

 
  changeHandler = (e, key) => this.setState({ [key]: e.target.value });
 
  
  handleSubmit = (e) => {
    // email , password state
    // email, password
    e.preventDefault();
    const { email, password } = this.state;
    
    if(this.creds.email === email && this.creds.password === password) {
      helper.setLocalStorage("isAuthenticated", 1);
      redirect('/overview')
      this.props.updateAuth(1)
    } else {
      alert("invalid Password")
    }
  };

  render() {
    const styles = {
      input: {
        width: "270px",
      },
    };
    return (
      <>
        <div className="main-page">
          <div className="login-page-content">
            <div className="login-text">
              <h1>Login</h1>
              <div>
                Don't have an account?{" "}
                <span className="register-name-span">Register</span>
              </div>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="input-area">
                <div className="input-div">
                  <div className="Textfield-div">
                    <TextField
                      id="outlined-basic"
                      label="Email Address"
                      variant="outlined"
                      InputProps={{ style: styles.input }}
                      onChange={(e) => this.changeHandler(e, "email")}
                    />
                  </div>
                  <div className="Textfield-div">
                    <TextField
                      type="password"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      InputProps={{ style: styles.input }}
                      onChange={(e) => this.changeHandler(e, "password")}
                    />
                  </div>
                  <div className="Textfield-div">
                    <Button variant="contained" type="submit">Login</Button>
                  </div>
                </div>

                {/* <div>
            
        </div> */}
              </div>
            </form>
          </div>

          <div className="main-page-Right-side-img">
            <img
              src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default Auth;
