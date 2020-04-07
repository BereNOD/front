import React from "react";
import { hot } from 'react-hot-loader/root';
import Ads from './ads/index.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Ads />
      </div>
    );
  }
}

export default hot(App);
