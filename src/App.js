import React from "react";
import { hot } from 'react-hot-loader/root';
import Ads from './ads/index.jsx';
import Banner from './banner/banner.jsx';
import New from './new/new.jsx';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Pages
import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Button from './pages/button';

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();

      this.setState({ posts });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/button">
              <Button />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(App);
