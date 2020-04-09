import React from "react";
import { hot } from "react-hot-loader/root";
import Ads from "./ads/index.jsx";
import Popular from "./popular/index.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Ads />
        <Popular />
      </div>
    );
  }
}

export default hot(App);
