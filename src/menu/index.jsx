import React from 'react';
import MenuImage from './imageMenu/cat-icon.svg';
import MenuImage1 from './imageMenu/dog-icon.svg';
import MenuImage2 from './imageMenu/mouse-icon.svg';
import MenuImage3 from './imageMenu/fish-icon.svg';
import MenuImage4 from './imageMenu/chicken-icon.svg';
import MenuImage5 from './imageMenu/pig-icon.svg';

import "./styles.scss";

class Menu extends React.Component {
    render() {
      return (
        <section className="sectionMenu">
                    <nav className="menu">
                        <ul className="categoryBar">
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage}></img><span>Кошки</span></a>
                            <ul className="submenu">    
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage1}></img><span>Собаки</span></a>
                          <ul className="submenu">
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage2}></img><span>Грызуны</span></a>
                          <ul className="submenu">    
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage3}></img><span>Аквариум</span></a>
                          <ul className="submenu">    
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage4}></img><span>Птицы</span></a>
                          <ul className="submenu">    
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage5}></img><span>Сельхоз животные</span></a>
                          <ul className="submenu">
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                        </ul>
                    </nav>
        </section>
      )
    }
  }
  
  export default Menu;