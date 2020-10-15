import React, { FormEvent, useState } from 'react';

import PageHeader from '../../../components/PageHeader';

import './styles.css';
import Input from '../../../components/Input';
import warningIcon from '../../images/icons/warning.svg';
import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface ScheduleItem {
    week_day: string;
    from: string;
    to: string;
}


function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [ scheduleItems, setScheduleItems ] = useState<ScheduleItem[]>([]);

    function addNewScheduleItem() {

        setScheduleItems([
            ...scheduleItems,
            {
                week_day: '1',
                from: '8:00',
                to: '10:00'
            }
        ]);
    }

    function setScheduleItemValue(index: number, field: string, value: string) {

        const updateScheduleItems = scheduleItems.map( ( scheduleItem, key ) => {

            if( key === index ) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        } )

        setScheduleItems(updateScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {

        e.preventDefault();

        const data = { name, avatar, whatsapp, bio, subject, cost, schedule: scheduleItems }

        console.log( data )

        api.post( 'classes', data ).then( resp => {

            alert('Cadastrado')

            history.push('/')
        } )
        .catch(( err ) => {
            
            alert(`Erro: ${err}`)
        })
    }

    return (
        <div id="page-teacher-form" className="container" >
            <PageHeader 
                title="Que incrível que você quer dar aula."
                description="O primeiro passo é preencher esse formulário de inscrição"
            >            
            </PageHeader>

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                            name="name" 
                            label="Nome completo" 
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar" 
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp" 
                            type="number" 
                            placeholder="Insira somente os números com o DDD" 
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <TextArea 
                            label="Biografia" 
                            name="biografia" 
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria" 
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) } }
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
                        <Input 
                            name="cost" 
                            label="Custo da sua hora por aula" 
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                        
                    {
                        scheduleItems.map( ( scheduleItem, key ) => 
                    
                            <div key={ key } className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana"
                                    value={scheduleItem.week_day}
                                    onChange={e => { setScheduleItemValue(key, 'week_day', e.target.value) }} 
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
                                    name="from" 
                                    label="Das" 
                                    type="time" 
                                    className="center" 
                                    value={scheduleItem.from}
                                    onChange={e => { setScheduleItemValue(key, 'from', e.target.value) }}
                                />
                                <Input 
                                    name="to" 
                                    label="Até" 
                                    type="time" 
                                    className="center" 
                                    value={scheduleItem.to}
                                    onChange={e => { setScheduleItemValue(key, 'to', e.target.value) }} 
                                />
                            </div>
                        )
                    }
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Messagem importante" />
                            Importante !<br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>

        </div>
    );
}

export default TeacherForm;