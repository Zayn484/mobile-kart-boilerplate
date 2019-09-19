import React from 'react';

import './SideDrawer.css';

const sideDrawer = ({ show }) => {
  return (
    <nav className={`side-drawer ${show && 'open'}`}>
      <ul>
      <li>
          <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Bag</a>
          </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
