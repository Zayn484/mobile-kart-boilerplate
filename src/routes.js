import React, { Component } from "react";
import { Switch } from "react-router";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { configureStore } from "./store/configure-store";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import App from './App';

const history = createBrowserHistory();

const store = configureStore();

const Routes = () => (
    <Provider store={store}>
    <Router history={history}>
    <Switch>
       <App path="/">
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
       </App>
    </Switch>
    </Router>
    </Provider>
)

export default Routes;