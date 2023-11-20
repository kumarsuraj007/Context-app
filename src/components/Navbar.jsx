import React, {useContext} from "react";
import {ThemeContext} from '../context/ThemeContext'

function Navbar() {
  const {theme} = useContext(ThemeContext)
  return (
    <div>
      <nav style={{background: theme.ui, color: theme.color}}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
