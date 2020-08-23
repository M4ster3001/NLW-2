import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../../components/PageHeader';

import './styles.css';

import imgUser from '../../images/userprof.png';

import whatsappIcon from '../../images/icons/whatsapp.svg';
import TeacherItem from '../../../components/TeacherItem';


function TeacherList() {

    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dias da semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
            
        </div>
    );
}

export default TeacherList;