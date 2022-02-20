import styles from './styles.module.scss';

const AvailableSystems = () => {
  return (
    <section className={styles.containerSystems} id='/sistema'>
      <div className={styles.containerBackground} />
      <div className={styles.systems}>
        <header>
          <h2>
            Por que você deve <strong>investir</strong> em uma <br />solução de marketing integrada ?
          </h2>
        </header>
        <div className={styles.systemsBackground}>
          <section>
            <img src="assets/images/marketing-integrado.png" alt="background" />
          </section>
          <section>
            <h3>Crescer do jeito certo</h3>
            <p>
              Com o domínio das redes sociais sobre o comportamento dos usuários da internet o cenário do marketing mudou, ficou mais barato e centenas de milhares de empresas estão anunciando para seus clientes.
            </p>
            <p>
              Isso nos leva a uma concorrência alta pela atenção dos clientes, e por isso só fazer anúncios não trás o melhor resultado.
            </p>
            <p>
              Uma solução integrada passa por todas as etapas, desde trazer a atenção dos compradores até eles se tornarem clientes e continuarem comprando.
            </p>
            <p>
              E faz isso de forma consistente e consciente para você obter o máximo de resultado com o investimento certo!
            </p>
          </section>
        </div>
      </div>
      <div className={styles.containerBackgroundBottom} />
    </section>
  );
};

export default AvailableSystems;
