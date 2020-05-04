import * as React from 'react';
import SearchIcon from './search_icon';
import './searchBar.sass';

class SearchBar extends React.Component {
  static defaultProps = {
    url: '#'
  }
  render = () => (
        <form action={this.props.url} className="SearchBar">

      <input type="text"
             placeholder="Поиск по товарам"
             className="SearchBar_input"
       />

           <button className="SearchBar_button">
                <SearchIcon></SearchIcon>
                <span className="SearchBar_buttonTitle">Найти
             </span>
          </button>
      </form>
    )
  }


export default SearchBar;
