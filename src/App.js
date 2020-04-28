import React from "react";
import { hot } from 'react-hot-loader/root';
import _ from 'lodash'
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import Sale from './Sale/Sale.jsx'
import New from './new/new.jsx';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Button from './pages/button';
import Sale from '.pages/sale'


class App extends React.Component {


  render() {
    return (
      <div>
           <Ads />
           <Banner />
           <Sale />
           <New />
      </div>
    );
  }
}

export default hot(App);
