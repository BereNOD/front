import React from 'react';
import logo from "./logo.png";
import '../header.scss';

class logo extends React.Component {
  render() {
    return (
      <div className="Header">
      <div className="Top_header">
        <div className="Logo_Wrapper">
          <img src={logo}/>
        </div>
      )
    }
  }


export default logo;
