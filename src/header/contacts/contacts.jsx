import React from 'react';

import phone_icon from "./img/phone_icon.png";
import location_icon from "./img/location_icon.png";
import './contacts.sass'


class contacts extends React.Component {
  render() {
    return (
      <div className="Contacts">

        <a className="Contact_number" link="white" hover='#68D6F4' href="#">
            <img height="17" width="17" src={phone_icon}/>
            <span className="Contact_data">+7(930) 635-65-25
          </span>
        </a>

        <a className="Contact_geo" link="white" hover='#68D6F4' href="#">
           <img height="18" width="15" src={location_icon}/>
           <span className="Contact_data">г.Тула,ул.Пузакова, 44
         </span>
       </a>

    </div>
    )
  }
}

export default contacts;
