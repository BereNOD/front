import React from "react";
import { hot } from "react-hot-loader/root";
import _ from 'lodash';
// import Ads from "./ads/index.jsx";
// import Banner from "./banner/banner.jsx";
// import Popularcard from "./popularcard/popularcard.jsx";


class Oksana extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts }));
  }

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      < div >
        <input type='text' value={this.state.message}
          onChange={this.handleMessage} />
        {_.size(this.state.message) === 0 ? (
          <span>Field  must be filled</span>
        ) : null}
        {_.map(this.state.posts, post => (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}

      </div >
    );
  }
}

export default hot(Oksana);



// class App extends React.Component {

//   render() {
//     return (
//       <div>
//         <Ads />
//         <Banner />
//         <Popularcard />
//         {/* <Oksana /> */}
//       </div>
//     );
//   }
// }

// export default hot(App);
