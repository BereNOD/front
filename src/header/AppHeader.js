import React from "react";
import { hot } from 'react-hot-loader/root';
import Logo from './logoProject/logoProject.jsx';
import Contacts from './contacts/contacts.jsx';
import SearchBar from './searchBar/indexSearchBar.jsx';
import Profile from './profile/AppModal.jsx';
import CartMarket from './cartMarket/cartMarket.jsx';
import './header.scss';

class AppHeader extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Topheader">
         <Logo />
         <Contacts />
         <SearchBar />
         <Profile />
         <CartMarket />
        </div>
     </div>
    );
  }
}

export default hot(AppHeader);
