import React from "react";
import { hot } from 'react-hot-loader/root';
import _ from 'lodash'
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import Sale from './Sale/Sale.jsx'
import New from './new/new.jsx';


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
