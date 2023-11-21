import React, {useContext} from "react";
import {Context} from '../context/context'
import { Link } from "react-router-dom";
import {ShoppingBagIcon} from 'lucide-react';

function Navbar() {
  const {items} = useContext(Context)
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <nav style={{width: '80vh', margin: '0px auto 10px auto'}}>
        <ul style={{display: 'flex', justifyContent: 'space-between'}}>
          <Link to='/'>
          <li>Home</li>
          </Link>
          <li>
          <Link to='/cart'>
         <ShoppingBagIcon/>
          </Link>
          {items.length}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
