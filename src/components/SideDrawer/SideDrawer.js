import React from 'react';
import { Link } from 'react-router-dom';
import { navigationList } from '../../config';
import './SideDrawer.css';

const sideDrawer = ({ show }) => {
  return (
    <nav className={`side-drawer ${show && 'open'}`}>
      <ul>
        {navigationList.map(({name, to}) => (
          <li key={name}>
            <Link to={to}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default sideDrawer;
