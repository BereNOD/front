import React from 'react';
import _ from 'lodash';
import Post from './post';
import {
  withRouter,
  Link,
  Redirect
} from "react-router-dom";

import './styles.scss';

class Posts extends React.Component {
  state = {
    posts: [],
    query: '',
    perPage: 10
  };

  componentDidMount = async () =>  {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    this.setState({ posts });
  };

  handleSearch = e => {
    this.setState({ query: e.target.value });
  };

  search = ({ title, body }) => {
    const pattern = new RegExp(this.state.query.replace(/\s*/g, '.*'));

    return pattern.test(title) || pattern.test(body);
  };

  render = () => {
    let page = this.props.match.params.page;

    const postsPage = _.chunk(_.filter(this.state.posts, this.search), this.state.perPage);
    const maxIndex = _.size(postsPage);

    page = _.isNaN(page) ? 0 : page;
    page = page < 0 ? 0 : page;
    page = page > maxIndex ? maxIndex : page;

    return page !== this.props.match.params.page
      ? <Redirect to={this.props.match.path.replace(':page?', page)} />
      : (
        <div className="container">
          <h1>Posts</h1>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleSearch}
          />
          <nav>
            {_.map(postsPage, (page, index) => (
              <Link to={`/posts/${index}`}>{index}</Link>
            ))}
          </nav>
          <section>
            {_.map(postsPage[page], (post, index) => (
              <React.Fragment>
                {index}
                <Post
                  key={`Post-${index}`}
                  {...post}
                />
              </React.Fragment>
            ))}
          </section>
        </div>
      );
  }

}

export default withRouter(Posts);
