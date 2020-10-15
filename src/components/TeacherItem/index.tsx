import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemsProps {
    teacher: {
        name: string;
        subject: string;
        whatsapp: string;
        bio: string;
        cost: number;
        avatar: string;
    };
}


const TeacherItem: React.FC<TeacherItemsProps> = ({ teacher }) => {

    return (
        <>
            <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt={teacher.name} />

                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>

                <p>
                    {teacher.bio}
                </p>

                <footer>
                    <p>
                        Preço/ Hora
                        <strong> R$ {teacher.cost}</strong>
                    </p>

                    <a href={`https://wa.me/${teacher.whatsapp}`}>
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </a>
                </footer>
            </article>         
        </>
    );
}

export default TeacherItem;