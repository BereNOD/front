import React from 'react';

import user_icon from "./user_icon.png";
import '../header.scss';
import './profile.sass';

class header extends React.Component {
  render() {
    return (
      <div className="Profile">

        <a href="#" style={{ color: '#68D6F4' }} className="Profile_link">
            <img width="25" height="27" src={user_icon}/>
            <span className="Contact_data_Modalprofile">Личный кабаинет
          </span>
        </a>
     </div>

     )
   }
 }


export default header;
