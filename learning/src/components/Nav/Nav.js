import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="Navbar-div">
            <h3 className="nav-title">Post Malone</h3>
            <ul className="list-items-div">
                <li>Home</li>
                <li>Music</li>
                <li>About Us</li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
