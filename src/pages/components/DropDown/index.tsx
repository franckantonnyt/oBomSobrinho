import { Link } from 'react-scroll';
import { HiOutlineX } from 'react-icons/hi';

import { MenuData } from '../../../constants/menuDataNav';

import styles from './styles.module.scss';

const DropDown = ({ selectedMenu, toggle }) => {
  return (
    <div className={styles.containerDropDown}>
      <header className={selectedMenu ? styles.activeDropDown : ''}>
        <HiOutlineX onClick={toggle} />
        <nav>
          <ul>
            {MenuData.map(({ title, link }, index) => {
              return (
                <li key={index}>
                  <Link onClick={toggle} to={link} smooth={true} duration={1000}>
                    <h3>{title}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default DropDown;
