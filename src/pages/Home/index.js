//import logo from './logo.svg';
import Logo from '../../assets/images/logo/logo.png';
import ImgEUA from '../../assets/images/elements/img-1.png';
import ImgSpain from '../../assets/images/elements/img-2.png';
import ImgGerman from '../../assets/images/elements/img-3.png';
import BlackFriday from '../../assets/images/elements/black-friday.png';
import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) { //<> são fragments - TAGS VAZIAS


  return (
    <>
    <S.HomeSectionOne>
      <S.HomeHeader>
        <S.TextoCabecalho>O gerente enlouqueceu, <br/>todos os cursos com <S.TextoCabecalhoA>50% DE DESCONTO!</S.TextoCabecalhoA></S.TextoCabecalho>
      </S.HomeHeader>
      <S.HomeContainerOne>
      <S.ContentPartOne>
        <S.Img src={BlackFriday} />
      </S.ContentPartOne>  
      <S.ContentPartTwo>
        <S.ImgLogo src={Logo} />
      </S.ContentPartTwo>        
      </S.HomeContainerOne>
    </S.HomeSectionOne>

    <S.HomeSectionTwo>
      <S.HomeContainerTwo>
        <S.CardTwo>
        <S.ImgBandeira src={ImgEUA} />
          <S.ParagrafoCurso>
            <b>Curso de Inglês - 400h.</b>
          </S.ParagrafoCurso>
          <S.ValorAnterior>
            De: R$ 1000,00
          </S.ValorAnterior>
          <S.ValorNovo>
            Por: R$ 500,00
          </S.ValorNovo>
          
          <S.CardContainerTwo>
          </S.CardContainerTwo>
        </S.CardTwo>
    
        <S.CardTwo>
          <S.ImgBandeira src={ImgSpain} />
          <S.ParagrafoCurso>
            <b>Curso de Espanhol - 400h.</b>
          </S.ParagrafoCurso>
          <S.ValorAnterior>
            De: R$ 1500,00
          </S.ValorAnterior>
          <S.ValorNovo>
            Por: R$ 750,00
          </S.ValorNovo>
          <S.CardContainerTwo>
          </S.CardContainerTwo>
        </S.CardTwo>

        <S.CardTwo>
          <S.ImgBandeira src={ImgGerman} />
          <S.ParagrafoCurso>
          <b>Curso de Alemão - 400h.</b>
          </S.ParagrafoCurso>
          <S.ValorAnterior>
            De: R$ 2000,00
          </S.ValorAnterior>
          <S.ValorNovo>
            Por: R$ 1000,00
          </S.ValorNovo>
          <S.CardContainerTwo>
          </S.CardContainerTwo>
        </S.CardTwo>
        
      </S.HomeContainerTwo>
    </S.HomeSectionTwo>

    <S.HomeSectionThree>
      <S.HomeContainerThree>
        <S.Card>
          <S.H4>
            Para receber as ofertas em primeira mão, preencha o campo abaixo com o seu melhor email:
          </S.H4>
          <S.CardContainer>
          <S.Input className="nome" type="text" placeholder="Nome"   />
          <S.Input className="email" type="email" placeholder="Insira aqui o seu melhor email..." />
          <S.Button type="button" >Cadastrar</S.Button>
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
  </>
  );
}

export default App;
