import React from "react";
import { hot } from 'react-hot-loader/root';
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import New from './new/new.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Ads />
        <Banner />
        <New />
      </div>
    );
  }
}

export default hot(App);
