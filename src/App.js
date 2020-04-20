import React from "react";
import { hot } from 'react-hot-loader/root';
// import Header from './header/header.jsx';
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import New from './new/new.jsx';
import './header/header.scss';

class App extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts: posts }));
  }
  render() {
    return (
      <div ClassName="BoxFather">
        {_.map(this.state.posts, post => (
          <div class ClassName="Comment">
          <h2>{post.title}</h2>
          <p ClassName="CommentBody">{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default hot(App);
