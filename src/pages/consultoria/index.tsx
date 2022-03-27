import { useState } from 'react';

import Form from '../components/Form';
import AvailableSystems from '../components/AvailableSystems';

import styles from './styles.module.scss';
import { HiOutlineX } from 'react-icons/hi';
import IconWhatsapp from '../../../public/assets/icons/icon-whatsapp.svg';

const Consultoria = () => {
    const [modal, setModal] = useState(false);

    return (
        <>
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
                        <h1>Aumente exponencialmente <br /> suas vendas com nossa solução de marketing integrado.</h1>
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
            <div className={styles.containerFree}>
                <section>
                    <header>
                        <h1>Receba nossa consultoria <b>gratuita</b> <br />e comece a vender mais na internet !</h1>
                    </header>
                    <p>
                        Se você não tem uma solução de marketing integrada, de qualquer forma, você já está <b>perdendo</b> vendas para seus <b>concorrentes</b> !
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
            </div>
            <AvailableSystems />
            <footer className={styles.containerFooter}>
                <p>
                    O Bom Sobrinho – Agência Digital © Todos os Direitos Reservados
                </p>
                <p>
                    Termos de Uso - Políticas de Privacidade
                </p>
            </footer>
        </>
    );
}

export default Consultoria;