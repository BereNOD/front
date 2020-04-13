import React from "react";
import { hot } from 'react-hot-loader/root';
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import Menu from './menu/index.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Ads />
        <Banner />
        <Menu />
      </div>
    );
  }
}

export default hot(App);
