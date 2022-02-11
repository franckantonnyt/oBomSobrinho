import styles from './styles.module.scss';

const AvailableSystems = () => {
  return (
    <section className={styles.containerSystems} id='/sistema'>
      <div className={styles.styledBorderStart} />
      <div className={styles.systems}>
        <header>
          <h2>
            O <strong>Sistema</strong> certo para o seu <strong>Negócio</strong>
          </h2>
        </header>
        <div className={styles.systemsBackground}>
          <div>
            <img src='assets/images/prodo_sistemas.png' alt='Prodo Sistemas' />
            <section>
              <h3>PRODO Sistemas</h3>
              <p>
                Nosso sistema é completo e auto instalável, simples de usar e
                atende a todas as necessidades de emissão de documentos fiscais
                eletrônicos ( NFC-e, NF-e, SAT, MF-e, MDF-e e CT-e).
              </p>
            </section>
          </div>
          <div>
            <section>
              <h3>GDOOR Sistemas</h3>
              <p>
                Emissão de NF-e, NFC-e, CF-e (SAT e MFE), NFP-e, MDF-e, CT-e,
                CT-e OS e Cupom Fiscal. Geração de arquivos fiscais (SPED,
                Sintegra). Gestão financeira completa: contas a pagar, receber,
                livro caixa, geração de boletos além de mais de 400 relatórios..
              </p>
            </section>
            <img src='assets/images/gdor_sistemas.png' alt='Gdor Sistemas' />
          </div>
        </div>
      </div>
      <div className={styles.styledBorderEnd} />
    </section>
  );
};

export default AvailableSystems;
