import React, { Component } from 'react';
import searchIcon from '';

class SearchBar extends Component {
  render(){
    return(
      <form action={this.props.url}>
      <input type="text"/>
      <button>
      <img src={search_icon} alt="Лупа" />
      </button>
      </form>
    )
  }
}

export default SearchBar
