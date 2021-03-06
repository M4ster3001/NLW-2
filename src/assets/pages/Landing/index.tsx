import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import logoImg from '../../images/logo.svg';
import landingImg from '../../images/landing.svg';

import studyIcon from '../../images/icons/study.svg';
import giveClassesIcon from '../../images/icons/give-classes.svg';
import purpleHeartIcon from '../../images/icons/purple-heart.svg';

import './styles.css';

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {

        api.get('connections').then( resp => {
            const total = resp.data.total

            setTotalConnections( total )
        } )
    }, [])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy Logo"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>

                    <a href="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar" />
                        Dar aulas
                    </a>
                </div>

                <span className="total-connections">
                    Total de { totalConnections ? totalConnections : 0 } conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;