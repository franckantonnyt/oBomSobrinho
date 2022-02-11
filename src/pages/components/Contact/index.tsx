import { IoLogoWhatsapp } from 'react-icons/io';

import { contactData } from '../../../constants/contactData';

import styles from './styles.module.scss';

const Contact = () => {
  return (
    <section className={styles.containerContact} id='/contato'>
      <header>
        <h1>Contato</h1>
        <h3>
          Precisa de <strong>ajuda</strong> ou quer esclarecer algum assunto?
          Entre em <strong>contato</strong> agora mesmo que resolveremos tudo
          com <strong>você.</strong>
        </h3>
      </header>
      <div className={styles.bodyContact}>
        <div className={styles.cardContact}>
          <ul>
            {contactData.map(({ id, title, kind, content }) => {
              return (
                <li key={id} className={styles.card}>
                  <h3>{title}</h3>
                  <div>
                    {kind === 'whatsapp' && <IoLogoWhatsapp />}
                    <p>{content}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.detailsContact}>teste</div>
      </div>
    </section>
  );
};

export default Contact;
