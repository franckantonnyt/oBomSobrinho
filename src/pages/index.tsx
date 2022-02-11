import { useState } from 'react';

import Header from './components/Header';
import DropDown from './components/DropDown';
import StartPage from './components/StartPage';
import Functionalities from './components/Functionalities';
import AvailableSystems from './components/AvailableSystems';
import PartnersCompanies from './components/PartnersCompanies';
import Contact from './components/Contact';

import styles from './home.module.scss';

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState(false);

  const toggler = () => {
    setSelectedMenu(!selectedMenu);
  };

  return (
    <div className={styles.landingPage}>
      <DropDown selectedMenu={selectedMenu} toggle={toggler} />
      <Header toggle={toggler} />
      <StartPage />
      <Functionalities />
      <AvailableSystems />
      <PartnersCompanies />
      <Contact />
    </div>
  );
};

export default Home;
