import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import styles from './styles.module.scss';

const StartPage = () => {
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
    <section className={styles.startPage}>
      <div className={styles.containerTitleButton}>
        <h1>Quer<br />Vender<br />Mais ?</h1>
        <p>
          Aumente suas vendas na internet com nossa solução de marketing integrado, fidelizando e conquistando mais clientes e fazer do seu negócio uma referência na distribuição do mercado. <b>Nossa missão é ajudar seu negócio a vender mais !</b>
        </p>
        <Link to="/contato" smooth={true} duration={1500}>
          <button>Quero saber como vender mais</button>
        </Link>
      </div>
      <div className={styles.containerBackground}>
        <img src="assets/images/background_gradient_fluid_business.png" alt="background" />
      </div>
    </section>
  );
};

export default StartPage;
