import React from 'react';
import MenuImage from './imageMenu/cat-icon.png';
// import MenuImage1 from './imageMenu/cat-icon.png';
// import MenuImage2 from './imageMenu/cat-icon.png';
// import MenuImage3 from './imageMenu/cat-icon.png';
// import MenuImage4 from './imageMenu/cat-icon.png';
// import MenuImage5 from './imageMenu/cat-icon.png';

import './styles.scss';

class Menu extends React.Component {
    render() {
      return (
        <section className="sectionMenu">
                    <div className="menu">
                        <div className="categoryAnimal firstLeftAnimal" title="Кошки">
                            <img src={MenuImage} alt="" className="imageIcon" />
                            <span className="imageText">Кошки</span>
                        </div>
                        <div className="categoryAnimal" title="Собаки">
                            <img src={MenuImage} alt="" className="imageIcon" />
                            <span className="imageText">Собаки</span>
                        </div>
                        <div className="categoryAnimal" title="Грызуны">
                            <img src={MenuImage} alt="" className="imageIcon" />
                            <span className="imageText">Грызуны</span>
                        </div>
                        <div className="categoryAnimal" title="Рыбы">
                            <img src={MenuImage} alt="" className="imageIcon" />
                            <span className="imageText">Рыбы</span>
                        </div>
                        <div className="categoryAnimal" title="Птицы">
                            <img src={MenuImage} alt="" className="imageIcon" />
                            <span className="imageText">Птицы</span>
                        </div>
                        <div className="categoryAnimal" title="Сельхоз Животные">
                            <img src={MenuImage} alt="" className="imageIcon" />
                            <span className="imageText">Сельхоз Животные</span> 
                        </div>
                    </div>
        </section>
      )
    }
  }
  
  export default Menu;