import React from "react";
import { hot } from 'react-hot-loader/root';
import _ from 'lodash'
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import Sale from './Sale/Sale.jsx'
import New from './new/new.jsx';


class App extends React.Component {
  state = {
    posts: []
  };

 componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(posts => this.setState({ posts: posts }))
 }


  render() {
    return (
      <div className="main">
      {_.map(this.state.posts, post => (
          <div className="mainPost">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          </div>
        ))}

           <Ads />
           <Banner />
           <Sale />
           <New />
      </div>
    );
  }
}

export default hot(App);
