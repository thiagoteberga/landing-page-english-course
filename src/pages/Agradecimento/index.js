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

        <S.HomeSectionThree>
        <S.HomeContainerThree>
          <S.Card>
            <S.H4>
                Olá {nome}, obrigado por cadastrar o email {email} em nossa base de dados!
            </S.H4>
            <S.CardContainer>
                <S.LinkHome to = "/">Voltar</S.LinkHome>
            </S.CardContainer>
          </S.Card>
  
        </S.HomeContainerThree>
  
        <S.HomeFooter>
          <S.Paragrafo>
          Desenvolvido por <b><a href="https://github.com/thiagoteberga/landing-page-english-course">Thiago Teberga</a></b> - Hiring Coders
          <br/>
          Todos os direitos reservados.
          </S.Paragrafo>
        </S.HomeFooter>
      </S.HomeSectionThree>
    )
}