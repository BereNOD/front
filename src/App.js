import React from "react";
import { hot } from 'react-hot-loader/root';
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
<<<<<<< HEAD
import Sale from './Sale/Sale.jsx'
=======
import New from './new/new.jsx';
>>>>>>> master

class App extends React.Component {
  render() {
    return (
      <div>
        <Ads />
        <Banner />
<<<<<<< HEAD
        <Sale />
=======
        <New />
>>>>>>> master
      </div>
    );
  }
}

export default hot(App);
