import React, { useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import styles from './styles.module.scss';

const Form = ({ clickButton }) => {
    const form = useRef();
    const [sendForm, setSendForm] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSendForm(true);
        // emailjs.sendForm('gmailMessage', 'template_2o1veye', form.current, 'user_gIl675C0HvKoRsyaMH4kO')
        //     .then((result) => {
        //         console.log(result);
        //     }, (error) => {
        //         console.log(error);
        //     });
        setTimeout(() => {
            setSendForm(false);
            clickButton(!sendForm);
        }, 1500);
    };

    return (
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <h1>Cadastre-se para agendar<br /> sua consultoria gratuita!</h1>
            <input type="text" name="name" placeholder="Nome:" />
            <input type="email" name="email" placeholder="E-mail:" />
            <InputMask placeholder="DDD + Telefone:" name="phone" mask="(99) 99999-9999" />
            <input type="text" name="place" placeholder="Empresa:" />
            <input type="text" name="site" placeholder="Site: (Opcional)" />
            <button className={sendForm && styles.desactive} onSubmit={(e) => e} type="submit">Receber consultoria gratuita</button>
        </form>
    );
};

export default Form;
