import React from "react";
import { hot } from 'react-hot-loader/root';
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Ads />
        <Banner />
      </div>
    );
  }
}

export default hot(App);
