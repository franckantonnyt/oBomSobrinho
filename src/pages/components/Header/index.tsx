import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MenuData } from '../../../constants/menuDataNav';

import { HiMenuAlt1 } from 'react-icons/hi';

import styles from './styles.module.scss';

const Header = ({ toggle }) => {
  const [navBarColor, setNavBarColor] = useState(false);
  const changeBackgroundHeader = () => {
    if (window.scrollY >= 1) {
      setNavBarColor(true);
    } else {
      setNavBarColor(false);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', changeBackgroundHeader);
    }
  });

  return (
    <div className={styles.headerContainer}>
      <header className={navBarColor ? styles.isActive : ''}>
        <img
          src='assets/icons/logo-o-bom-sobrinho-marca-dagua.png'
          alt='Logo'
          onClick={() => scroll.scrollToTop()}
        />
        <nav>
          <ul>
            {MenuData.map(({ title, link }, index) => {
              return (
                <li key={index}>
                  <Link to={link} smooth={true} duration={1000}>
                    <h3>{title}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.menuBarMobile}>
          <HiMenuAlt1 onClick={toggle} />
        </div>
      </header>
    </div>
  );
};

export default Header;
