import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.scss'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="left-container">
          <div className="jobhax-logo-container">
            <Link to="/dashboard">
              <div className="jobhax-logo"></div>
            </Link>
          </div>
          {/*<div className="search-box">
            <img className="header-icon search-icon" src="../../src/assets/icons/SearchIcon@3x.png"></img>
            <div>
              <input
                className="search-input"
                id="query"
                onChange={e => {
                  e.preventDefault()
                }}>
              </input>
            </div>
              </div>*/}       
        </div>
        <div className="right-container">
          <div className="header-icon general tooltips">
            <Link to="/dashboard">
              <img src="../../src/assets/icons/SyncIcon@3x.png"></img>
            </Link>
            <span>Dashboard</span>
          </div>
          <div className="header-icon general tooltips">
            <Link to="/metrics">
              <img src="../../src/assets/icons/StatsIcon@3x.png"></img>
              <span>Metrics</span>
            </Link>
          </div>
          <div className="header-icon general tooltips">
            <Link to="/underconstruction">
              <img src="../../src/assets/icons/NotifIcon@3x.png"></img>
              <span>Notifications</span>
            </Link>
          </div>
          <div className="header-icon user-icon">
            <Link to="/underconstruction">
              <img src="../../src/assets/icons/SeyfoIcon@3x.png"></img>
            </Link>
          </div>
          <div className="header-icon sign_out">
            <Link to="/">
              <img onClick={() => this.props.handleSignOut()} src="../../src/assets/icons/sign_out.png"></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;