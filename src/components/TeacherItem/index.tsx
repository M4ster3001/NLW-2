import React from 'react';

import './styles.css';

import imgUser from '../../assets/images/userprof.png';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {

    return (
        <>
            <article className="teacher-item">
                <header>
                    <img src={imgUser} alt="Prof. Aldo Junior" />

                    <div>
                        <strong>Aldo Junior</strong>
                        <span>Informatica</span>
                    </div>
                </header>

                <p>
                    Apaixonado pela area de TI e entusiasta das melhores tecnologias na parte de programação.
                    <br/>
                    Ama misturar linguages para ver no que dá.
                </p>

                <footer>
                    <p>
                        Preço/ Hora
                        <strong> R$ 100,00</strong>
                    </p>

                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>

            <article className="teacher-item">
                <header>
                    <img src={imgUser} alt="Prof. Aldo Junior" />

                    <div>
                        <strong>Jaqueline</strong>
                        <span>Investigação</span>
                    </div>
                </header>

                <p>
                    Apaixonado por misterios e enigmas.
                    <br/>
                    Considerada por três anos seguidos a melhor investigadora de Mirandopolis.
                </p>

                <footer>
                    <p>
                        Preço/ Hora
                        <strong> R$ 250,00</strong>
                    </p>

                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>          
        </>
    );
}

export default TeacherItem;