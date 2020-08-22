import React from 'react';
import Auth from '../Auth/Auth';

import './MyNavBar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-light bg-light justify-content-between text-center">
          <h4 className="navbar-brand"><i className="fas fa-futbol fa-2x"></i></h4>
            <h1 className="title">Sports Roster</h1>
            <Auth authed={this.props.authed}/>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
