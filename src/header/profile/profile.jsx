import React from 'react';

import user_icon from "./kenguru/user_icon.png";
import './header.scss';

class header extends React.Component {
  render() {
    return (
      <div className="Profile">
        <img src={user_icon}/>
        <a href="#" style={{ color: '#68D6F4' }} className="Profile_link">Личный кабаинет</a>
      </div>

     )
   }
 }


export default header;
