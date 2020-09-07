import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../../components/PageHeader';

import './styles.css';

import TeacherItem from '../../../components/TeacherItem';
import Input from '../../../components/Input';
import Select from '../../../components/Select';


function TeacherList() {

    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">

                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Ciencias', label: 'Ciencias' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Portugues', label: 'Portugues' }
                        ]}
                    /> 

                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        options={[
                            { value: '1', label: 'Domingo' },
                            { value: '2', label: 'Segunda-feira' },
                            { value: '3', label: 'Terça-feira' },
                            { value: '4', label: 'Quarta-feira' },
                            { value: '5', label: 'Quinta-feira' },
                            { value: '6', label: 'Sexta-feira' },
                            { value: '7', label: 'Sabado' }
                        ]}
                    />
                    <Input name="time" label="Hora" type="time" className="center" />

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
            
        </div>
    );
}

export default TeacherList;