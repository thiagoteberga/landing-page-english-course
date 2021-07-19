import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router';

export default function Agradecimento(){
    const history = useHistory();
    const [nome, setNome] = useState([]);
    const [email, setEmail] = useState([]);

    useEffect(() => {
        let nome = localStorage.getItem('nome');
        let email = localStorage.getItem('email');
        if(email != null) {
            setEmail(email);
            setNome(nome);
            console.log(email);
            console.log(nome);
            localStorage.clear();
        } else {
            history.push('/');
        }
    }, []);

    return (
        <S.Container>
        <S.Title>Obrigado por se cadastrar!</S.Title>
        <S.List>
        ${nome}
        ${email}
        </S.List>
        <S.LinkHome to = "/">Voltar</S.LinkHome>
        </S.Container>
    )
}