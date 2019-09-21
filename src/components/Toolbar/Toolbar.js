import React from "react";
import { Link } from 'react-router-dom';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { navigationList } from '../../config';
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">E-Kart</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          {navigationList.map(({name, to}) => (
          <li key={name}>
            <Link to={to}>{name}</Link>
          </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
