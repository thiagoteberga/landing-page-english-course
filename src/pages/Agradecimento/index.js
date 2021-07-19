import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Agradecimento(){
    const [nome, setNome] = useState([]);
    const [email, setEmail] = useState([]);

    useEffect(() => {

        let nomeUsuario = localStorage.getItem('nome');
        let emailUsuario = localStorage.getItem('email');
        if(emailUsuario != null) {
            setEmail(emailUsuario);
            setNome(nomeUsuario);
            console.log(emailUsuario);
            console.log(nomeUsuario);
            localStorage.clear();
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