import * as React from 'react';

import SearchIcon from './search-icon';

import './styles.sass';

class SearchBar extends React.Component {
  static defaultProps = {
    method: 'GET'
  };

  state = {
    query: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = new URL(`http://localhost:3000${this.props.action}`);

      url.searchParams.append('query', this.state.query);

      const response = await fetch(url, { method: this.props.method });
      const result = await response.json();

      this.props.onLoaded(null, result);
    } catch (error) {
      this.props.onLoaded(error, null);
    }
    return false;
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  render = () => (
    <form action={this.props.action} method={this.props.method} className="SearchBar" onSubmit={this.handleSubmit}>
      <input
        type="text"
        className="SearchBar__input"
        placeholder="Поиск по товарам"
        value={this.state.query}
        onChange={this.handleChange}
      />
      <button className="SearchBar__button">
        <SearchIcon />
        <span className="SearchBar__buttonTitle">Найти</span>
      </button>
    </form>
  );
}

console.log(SearchBar.defaultProps);

export default SearchBar;
