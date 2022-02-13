import styles from './styles.module.scss';

const StartPage = () => {
    return (
        <form className={styles.form}>
            <h1>Cadastre-se para agendar sua consultoria gratuita!</h1>
            <input type="text" name="name" placeholder="Nome:" aria-required="true" />
            <input type="email" name="email" placeholder="E-mail:" aria-required="true" />
            <input type="text" name="phone" placeholder="DDD + Telefone:" aria-required="true" data-fme-mask="ev-tel-ddd9" />
            <input type="text" name="place" placeholder="Empresa:" aria-required="true" />
            <input type="text" name="site" placeholder="Site: (Opcional)" />
        </form>
    );
};

export default StartPage;
