import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    color: 'white',
    background: 'rgb(190,184,229)',
    background: 'linear-gradient(17deg, rgba(190,184,229,1) 0%, rgba(71,52,151,1) 0%)',
    borderRadius: '5px',
    borderWidth: '1px',
    margin: '5px'
  }

  class Navbar extends React.Component {
    render() {
      return (
        <div>
          <NavLink to="/" exact style={link}>Home</NavLink>
          <NavLink to="/about" exact style={link}>About</NavLink>
        </div>
      )
    }
  }
  
  export default Navbar;