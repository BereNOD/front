import React from 'react';

import Modal from "./Modal";
import useModal from './modalHooks.js';


import user_icon from "./user_icon.png";
import '../header.scss';
import './profile.sass';


const AppModal = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className="Profile">
      <a href="#" style={{ color: '#68D6F4' }} className="Profile_link" onClick={toggle}>
         <img width="25" height="27" src={user_icon}/>
         <span className="Contact_data_Modalprofile">Личный кабаинет
       </span>
     </a>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
   );
  };
 

export default AppModal;
