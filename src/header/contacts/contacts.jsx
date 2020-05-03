import React from 'react';

import phone_icon from "./img/phone_icon.png";
import location_icon from "./img/location_icon.png";
import '../header.scss';

class contacts extends React.Component {
  render() {
    return (
      <div className="Contacts">
        <div className="Telnumber">
        <img src={phone_icon}/>
        <a link="white" hover='#68D6F4' href="#"><b> +7(930) 635-65-25</b></a>
      </div>

      <div className="location_icon">
        <img src={location_icon}/>
        <a link="white" hover='#68D6F4' href="#"><b> г.Тула,ул.Пузакова, 44</b></a>
      </div>
    </div>
    )
  }
}

export default contacts;
