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
            <img src="assets/images/marketing-integrado.jpg" alt="background" />
          </section>
          <section>
            <h3>GDOOR Sistemas</h3>
            <p>
              Emissão de NF-e, NFC-e, CF-e (SAT e MFE), NFP-e, MDF-e, CT-e,
              CT-e OS e Cupom Fiscal. Geração de arquivos fiscais (SPED,
              Sintegra). Gestão financeira completa: contas a pagar, receber,
              livro caixa, geração de boletos além de mais de 400 relatórios..
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AvailableSystems;
