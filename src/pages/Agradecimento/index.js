import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router';

export default function Agradecimento(){
    const [nome, setNome] = useState([]);
    const [email, setEmail] = useState([]);
    const history = useHistory();

    useEffect(() => {

        let nomeUsuario = localStorage.getItem('nome');
        let emailUsuario = localStorage.getItem('email');
        if(emailUsuario != null) {
            setEmail(emailUsuario);
            setNome(nomeUsuario);
            console.log(emailUsuario);
            console.log(nomeUsuario);
            localStorage.clear();
        } else {
            history.push('/');
        }
    }, []);

    return (
        <S.Container>
        <S.Title>Olá {nome}, obrigado por cadastrar o email {email} em nossa base de dados!</S.Title>
        <S.List>
        
        
        
        </S.List>
        <S.LinkHome to = "/">Voltar</S.LinkHome>
        </S.Container>
    )
}