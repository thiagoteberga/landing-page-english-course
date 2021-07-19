import styled from 'styled-components';
import backgroundOne from '../../assets/images/background/bg1.jpg';
import backgroundTwo from '../../assets/images/background/bg2.jpg';
import backgroundThree from '../../assets/images/background/bg3.jpg';

export const HomeSectionOne = styled.section`
    width: 100vw;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundOne})
    `;

export const HomeContainerOne = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;    
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    //background-color: yellow;
    grid-template-columns: auto auto;
    grid-gap: 35px 35px;
    `;

export const HomeHeader = styled.div`
    width: 100vw;
    height: 100px;
    align-items: center;
    text-align: center;
    justify-content: center;   
    display: grid;
    //background-color: green;
    `;

export const TextoCabecalho = styled.h1`
    //background-color: green;
    color: white;
    font-size: 40px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Staatliches', cursive;
    `;

export const TextoCabecalhoA = styled.span`
    //background-color: green;
    color: white;
    font-size: 40px;
    color: #ffe63d;
    text-shadow: 2px 2px 4px #000000;
    font-family: 'Staatliches', cursive;
    `;

    
export const ContentPartOne = styled.div`

    display: grid;
    align-items: center;
    justify-content: center;
    //background-color: grey;
    `;

export const ContentPartTwo = styled.div`

    display: grid;
    align-items: center;
    justify-content: center;
    //background-color: green;
`;

export const Img = styled.img`
    height: 200px;
    width: 400px;    
    transition: 0.3s;

    &:hover{
        transform: scale(1.05)
    }
    `;

    export const ImgLogo = styled.img`
    height: 150px;
    width: 300px;    
    transition: 0.3s;

    &:hover{
        transform: scale(1.05)
    }
    `;


    export const HomeSectionTwo = styled.section`
    width: 100vw;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundTwo})
    `;

export const HomeContainerTwo = styled.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    height: 100vh;
    width: 85%;
    margin: 0 auto;
    grid-template-columns: auto auto auto;
    grid-gap: 35px 35px 35px;
    `;

 export const CardTwo = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-align: center;
    padding: 10px;
    margin: 25px;
    border-radius: 15px; /* 5px rounded corners */
    background-color: white;
    width: 200px;
    height: auto;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    `;

export const CardContainerTwo = styled.div`
    padding: 15px;
    height: 100%
    transition: 0.3s;
    backgorund-color: white;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 35px 35px;
    `;

export const ImgBandeira = styled.img`
    height: 100px;
    width: 100px;    
    transition: 0.3s;

    &:hover{
        transform: scale(1.05)
    }
    `;

    export const ParagrafoCurso = styled.p`
    font-family: sans-serif;
    font-size: 12px;
    text-align: center;
    color: #3a3a3a;   
    transition: 0.3s;
    
    & a {
        text-decoration: none;
        color: white;
    }
    `;

export const ValorAnterior = styled.p`
    font-family: sans-serif;
    font-size: 10px;
    text-align: center;
    color: #c80000;
    text-decoration: line-through;
    
    & a {
        text-decoration: none;
        color: white;
    }
    `;

export const ValorNovo = styled.p`
    font-family: sans-serif;
    font-size: 12px;
    text-align: center;
    color: #3a3a3a;   
    transition: 0.3s;
    
    & a {
        text-decoration: none;
        color: white;
    }

    &:hover{
        transform: scale(1.3)
    }
    `;
    

export const HomeSectionThree = styled.section`
    width: 100vw;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundThree})
    `;

export const HomeContainerThree = styled.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    height: 100vh;
    width: 75%;
    margin: 0 auto;
    //background-color: pink;
    `;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 15px; /* 5px rounded corners */
    background-color: white;
    width: 350px;
    height: auto;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    `;

export const CardContainer = styled.div`
    padding: 15px;
    height: 100%
    transition: 0.3s;
    backgorund-color: white;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 35px 35px;
    `;

export const H4 = styled.h4`
    //background-color: green;
    color: black;
    font-size: 10px;
    padding: 10px;
    text-align: justify;
    color: #314d55;
    font-family: 'Arial';
    `;
    
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 15px;
    padding: 10px;
    border-radius: 10px; 

    &:focus,
    &:active {
        outline: none;
        box-shadow: 0 0 1em #81c2ff;
    }
`;

export const Button = styled.button`
    height: 30px;

    border: 1px solid #000;
    background: #314d55;
    color: #fff;
    border-radius: 5px; 

        &:focus,
        &:active {
            outline: none;
            box-shadow: none;
        }
`;


export const HomeFooter = styled.div`
    width: 100vw;
    height: 45px;
    display: grid;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #314d55;
    `;

export const Paragrafo = styled.p`
    font-family: sans-serif;
    font-size: 10px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    & a {
        text-decoration: none;
        color: white;
    }
    `;

export const Content = styled.div`
    width: 100vw;
    display: grid;
    align-items: center;
    justify-content: center;
    `;


export const ErrorMsg = styled.span`
    display: block;
    font-size 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
    `;