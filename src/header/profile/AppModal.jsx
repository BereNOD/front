import React from 'react';

import Modal from "./Modal";
import useModal from './modalHooks.js';


import user_icon from "./user_icon.png";
import './profile.sass';
import './modalProfile.sass';


 const AppModal = () => {
   const {isShowing, toggle} = useModal();
   return (
     <div className="AppModal">
     <div className="Profile">
       <a href="#" className="Profile_link" onClick={toggle}>
          <img width="25" height="27" src={user_icon}/>
          <span className="Contact_data_Modalprofile">Личный кабаинет
        </span>
      </a>
       <Modal
         isShowing={isShowing}
         hide={toggle}
       />
    </div>
  </div>
 );
};


export default AppModal;
