import React from 'react';
import logo_img from "./logo.png";


class logo extends React.Component {
  render() {
    return (

        <div className="Logo_Wrapper">
          <img src={logo_img}/>
        </div>
      )
    }
  }


export default logo;
