import styled from 'styled-components';
import {Link} from 'react-router-dom';
import backgroundThree from '../../assets/images/background/bg3.jpg';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
    `;

export const LinkHome = styled(Link)`
    display: block;
    width: 150px;
    text-align: center;
    margin: 2rem auto;
    background-color: #314d55;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
    color: white;
    
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
    width: 500px;
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
    font-size: 20px;
    padding: 15px;
    text-align: justify;
    color: #314d55;
    font-family: 'Arial';
    `;

export const HomeFooter = styled.div`
    width: 100vw;
    height: 90px;
    display: grid;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    background-color: #314d55;
    `;

export const Paragrafo = styled.p`
    font-family: sans-serif;
    font-size: 18px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    & a {
        text-decoration: none;
        color: white;
    }
    `;