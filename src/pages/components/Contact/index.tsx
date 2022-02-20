import styles from './styles.module.scss';

import Form from '../Form';

const Contact = () => {
  return (
    <section className={styles.containerContact} id='/contato'>
      <div className={styles.containerForm}>
        <section>
          <header>
            <h1>Receba nossa consultoria <b>gratuita</b> <br />e comece a vender mais na internet !</h1>
          </header>
          <p>
            Se você não tem uma solução de marketing integrada, de qualquer forma, você está <b>perdendo</b> vendas para seus <b>concorrentes</b> !
          </p>
          <p>
            Quando você tem uma solução integrada, cada peça é feita com o objetivo correto para <b>aumentar suas vendas</b>, atrair mais clientes, tornar seu negócio uma <b>referência</b> no mercado.
          </p>
          <p>
            Converse com nossos <b>especialistas</b> e descubra tudo que precisa para ter seu negócio alcançando todos os seus potenciais clientes com o poder das <b>redes e estratégias digitais</b>.
          </p>
          <p>
            Cadastre seus dados e receba uma <strong>CONSULTORIA GRATUITA</strong> focada em trazer mais clientes qualificados com a internet e aumentar as vendas do seu negócio!
          </p>
        </section>
        <section><Form /></section>
      </div>
      <footer className={styles.containerFooter}>
        <p>
          O Bom Sobrinho – Agência Digital © Todos os Direitos Reservados
        </p>
        <p>
          Termos de Uso - Políticas de Privacidade
        </p>
      </footer>
    </section>
  );
};

export default Contact;
