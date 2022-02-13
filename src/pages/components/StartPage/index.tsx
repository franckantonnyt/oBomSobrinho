import styles from './styles.module.scss';

import Form from '../Form';

const StartPage = () => {
  return (
    <section className={styles.startPage}>
      <div className={styles.containerTitleButton}>
        <h1>Aumente suas vendas na internet com nossa solução de marketing integrado.</h1>
        <p>
          Cadastre seus dados e receba uma CONSULTORIA GRATUITA focada em trazer mais clientes qualificados com a internet e aumentar as vendas do seu negócio!
        </p>
        <span>Nossa missão é ajudar seu negócio a vender mais!</span>
      </div>
      <div className={styles.containerForm}>
        <Form />
      </div>
    </section>
  );
};

export default StartPage;
