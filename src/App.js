import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { sideDrawerOpen } = this.state;

    const { children } = this.props;

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {sideDrawerOpen && <Backdrop click={this.backdropClickHandler} />}
        <main style={{ marginTop: "120px" }}>
          {children}    
        </main>
      </div>
    );
  }
}

export default App;
