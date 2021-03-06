import React, {Component} from "react";
import {
  Link,
  Redirect
} from 'react-router-dom';

import Footer from '../Footer/Footer.jsx';

import './style.scss'

class SignIn extends Component {

  generateTopButtons() {
    return (
      <div className="top-buttons">
        <Link to="/">
          <img className="logo" src="src/assets/icons/JobHax-logo-white.svg" alt="JobHax-logo"/>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    )
  }

  generateSignIn() {
    return (
      <div className="sign_in-container">
        <div className="content-container">
          <h1>Sign in</h1>
          {this.props.generateSignInForm()}
        </div>
        <div className="social-buttons-container">
          <Link to="/dashboard">
            <button className="social-buttons" onClick={this.props.handleGoogleSignIn}>Sign in with GOOGLE</button>
          </Link>
        </div>
        <div className="Loading-buttons-container">
          <Link to="/signup">
            <button className="social-buttons">Sign up!</button>
          </Link>
        </div>
      </div>
    )
  }

  render() {
    console.log('signIn page toDashboard',this.props.toDashboard);
    if (this.props.toDashboard) {
      return <Redirect to='/dashboard'/>
    }
    return (
      <div className="sign_in-background">
        {this.generateTopButtons()}
        {this.generateSignIn()}
        <div className="bottom-fixed-footer">
          <Footer/>
        </div>
      </div>

    )
  }
}

export default SignIn;