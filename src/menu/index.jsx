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
                    <nav className="menu">
                        <ul className="categoryBar">
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage}></img><span>Тварь</span></a>
                            <ul className="submenu">
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage}></img><span>Тварь</span></a>
                          <ul className="submenu">
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                                <li className="submenuList"><a href="#" className="submenuLink">Раздел</a></li>
                            </ul></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage}></img><span>Тварь</span></a></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage}></img><span>Тварь</span></a>
                          </li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage}></img><span>Тварь</span></a></li>
                          <li className="categoryName"><a href="#" className="categoryLink"><img src={MenuImage}></img><span>Тварь</span></a>
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