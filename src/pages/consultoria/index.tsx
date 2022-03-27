import { useState } from 'react';

import Form from '../components/Form';

import styles from './styles.module.scss';
import { HiOutlineX } from 'react-icons/hi';
import IconWhatsapp from '../../../public/assets/icons/icon-whatsapp.svg';

const Consultoria = () => {
    const [modal, setModal] = useState(true);

    return (
        <div className={styles.container}>
            <div className={modal ? styles.showModal : styles.hideModal}>
                <div>
                    <button type='button' onClick={() => setModal(false)}>
                        <HiOutlineX className={styles.closeIcon} />
                    </button>
                    <h1>Cadastro Efetuado!</h1>
                    <p>Em até 3 dias nossa equipe entrará <br /> em contato para agendar a consultoria.</p>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5535984774753&text=Olá, gostaria de fazer uma consultoria agora." >Se quiser fazer uma consultoria agora
                        <IconWhatsapp />
                    </a>
                </div>
            </div>
            <section className={styles.content}>
                <div className={styles.titleContainer}>
                    <img
                        src='assets/icons/logo-o-bom-sobrinho-marca-dagua.png'
                        alt='Logo O Bom Sobrinho'
                    />
                    <h1>Aumente exponencialmente <br/> suas vendas com nossa solução de marketing integrado.</h1>
                    <p>
                        Cadastre seus dados e receba uma <b>CONSULTORIA GRATUITA</b> <br />focada em trazer mais clientes qualificados e aumentar as <br /> vendas do seu negócio!
                    </p>
                    <span>
                        Nossa missão é ajudar seu negócio a vender muito mais!
                    </span>
                </div>
                <Form clickButton={(e) => setModal(e)} />
            </section>
        </div>
    );
}

export default Consultoria;