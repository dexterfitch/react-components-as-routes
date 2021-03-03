import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  padding: '12px',
  margin: '0 12px 0 0',
  background: '#ffa5ea',
  textDecoration: 'none',
  color: '#333'
}

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: '#f72ec5'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#f72ec5'
          }}
        >About</NavLink>
        <NavLink
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: '#f72ec5'
          }}
        >Signup</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: '#f72ec5'
          }}
        >Login</NavLink>
        <NavLink
          to="/messages"
          exact
          style={link}
          activeStyle={{
            background: '#f72ec5'
          }}
        >Messages</NavLink>
      </div>
    )
  }
}