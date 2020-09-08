import React from 'react';

import PageHeader from '../../../components/PageHeader';

import './styles.css';
import Input from '../../../components/Input';
import warningIcon from '../../images/icons/warning.svg';
import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';


function TeacherForm() {

    return (
        <div id="page-teacher-form" className="container" >
            <PageHeader 
                title="Que incrível que você quer dar aula."
                description="O primeiro passo é preencher esse formulário de inscrição"
            >            
            </PageHeader>

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" type="number" placeholder="Insira somente os números com o DDD" />
                    <TextArea label="Biografia" name="biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

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
                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button">
                            + Novo horário
                        </button>
                    </legend>

                    <div className="schedule-item">
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

                        <Input name="from" label="Das" type="time" className="center" />
                        <Input name="to" label="Até" type="time" className="center"  />
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Messagem importante" />
                        Importante !<br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>

        </div>
    );
}

export default TeacherForm;