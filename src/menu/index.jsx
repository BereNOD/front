import React from 'react';
import MenuImage from './imageMenu/cat-icon.svg';
import MenuImage1 from './imageMenu/dog-icon.png';
import MenuImage2 from './imageMenu/mouse-icon.png';
import MenuImage3 from './imageMenu/fish-icon.png';
import MenuImage4 from './imageMenu/chicken-icon.png';
import MenuImage5 from './imageMenu/pig-icon.png';

import "./styles.scss";

class Menu extends React.Component {
    render() {
      return (
        <section className="sectionMenu">
                    <div className="menu">
                        <div className="categoryAnimal firstLeftAnimal" title="Кошки">
                            <img src={MenuImage} alt="" className="imageIcon" width="33px" height="35px" />
                            <span className="imageText">Кошки</span>
                        </div>
                        <div className="categoryAnimal" title="Собаки">
                            <img src={MenuImage1} alt="" className="imageIcon" width="33px" height="35px" />
                            <span className="imageText">Собаки</span>
                        </div>
                        <div className="categoryAnimal" title="Грызуны">
                            <img src={MenuImage2} alt="" className="imageIcon" width="33px" height="35px" />
                            <span className="imageText">Грызуны</span>
                        </div>
                        <div className="categoryAnimal" title="Рыбы">
                            <img src={MenuImage3} alt="" className="imageIcon" width="33px" height="35px" />
                            <span className="imageText">Рыбы</span>
                        </div>
                        <div className="categoryAnimal" title="Птицы">
                            <img src={MenuImage4} alt="" className="imageIcon" width="33px" height="35px" />
                            <span className="imageText">Птицы</span>
                        </div>
                        <div className="categoryAnimal" title="Сельхоз Животные">
                            <img src={MenuImage5} alt="" className="imageIcon" width="33px" height="35px" />
                            <span className="imageText">Сельхоз Животные</span> 
                        </div>
                    </div>
        </section>
      )
    }
  }
  
  export default Menu;