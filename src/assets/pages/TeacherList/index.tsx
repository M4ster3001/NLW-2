import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../../components/PageHeader';

import './styles.css';

import TeacherItem from '../../../components/TeacherItem';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    
    useEffect( () => {
        
        async function SearchTeachers() {
    
            const data = { subject, week_day, time }
    
            if( subject && week_day && time ){
    
                await api.get('classes', {params: data})
                .then( resp => {
                    console.log(resp)

                    setTeachers(resp.data)
                } )
                .catch( err => {
                    console.log(err)
                } )
            }
        }

        SearchTeachers()

    }, [subject, week_day, time])

    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">

                    <Select 
                        name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
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
                        value={week_day}
                        onChange={e => { setWeekDay(e.target.value) }} 
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
                    <Input 
                        name="time" 
                        label="Hora" 
                        type="time" 
                        className="center" 
                        value={time}
                        onChange={e => { setTime(e.target.value) }}
                    />

                </form>
            </PageHeader>

            <main>
                { teachers.map( (teacher, key) =>{
                    return <TeacherItem key={key} teacher={teacher} />;
                })}
            </main>
            
        </div>
    );
}

export default TeacherList;