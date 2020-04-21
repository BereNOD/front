import React from "react";
import { hot } from 'react-hot-loader/root';
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import Menu from './menu/index.jsx';
import Comments from './Comments/Comments'

const data = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }
]




class App extends React.Component {
  render() {
    return (
      <div>
      <Comments data = {data}/>
        {/* <Ads />
        <Banner />
        <Menu /> */}
      </div>
    );
  }
}

export default hot(App);
