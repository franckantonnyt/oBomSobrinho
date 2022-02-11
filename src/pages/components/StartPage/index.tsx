import styles from './styles.module.scss';

const StartPage = () => {
  return (
    <section className={styles.startPage}>
      <div className={styles.containerTitleButton}>
        <h1>Simplificamos a Emissão de suas Notas Fiscais!</h1>
        <p>
          Tenha todos os controles essenciais do seu negócio em um único lugar.
        </p>
        <button>Faça seu orçamento</button>
      </div>
      <div className={styles.containerImages}>
        <div className={styles.backgroundImage} />
      </div>
    </section>
  );
};

export default StartPage;
