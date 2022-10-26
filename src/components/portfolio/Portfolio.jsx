import React from 'react'
import PortfolioSection from './PortfolioSection'
import styled from 'styled-components'
import Finsta from '../../assets/images/Finstagram.png'
import Test from '../../assets/images/Finstagram.png'
import {FiArrowUpRight} from "react-icons/fi"

const Portfolio = ({ portfolioref }) => {
  return (
    <Container>
    <Inner>
      <Header>Portfolio</Header>
      <Break/>
      <Feed>
        <PortfolioSection
          header="Finstagram"
          sub="Instagram Clone"
          desc="A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images."
          src={Finsta}
          codeLink="https://github.com/joshwrn/instagram-clone"
          demoLink="https://joshwrn.github.io/instagram-clone/#/"
          tech="React.js, GraphQL, MongoDB, AWS"
          date="2021"
        />
        <PortfolioSection
          header="Portfolio"
          sub="React Clothing Store"
          desc="A front end clothing store built with React, React Router, and CSS. The store allows users to browse, add, and remove items from their cart."
          src={Test}
          demoLink="https://joshwrn.github.io/shopping-cart/"
          codeLink="https://github.com/joshwrn/shopping-cart"
          tech="React.js, React Router, CSS"
          date="2021"
        />
        
      </Feed>
      <ButtonContainer
        rel="noreferrer"
        target="_blank"
        href="https://github.com/joshwrn?tab=repositories" >
        <ButtonText>View More</ButtonText>
        <FiArrowUpRight size={37} />
      </ButtonContainer>
      <Break/>
    </Inner>
  </Container>
);
};

export default Portfolio

const Container = styled.div`
    background-color: ${({ theme }) => theme.portfolio.background};
    padding: 0 5vw 0 5vw;
`
const Inner = styled.div`
    
`
const Header = styled.h1`
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 7rem;
    text-shadow:  0 0 10px black;
`
const Feed = styled.div`
    padding-top:30px ;
`
const ButtonContainer = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    width: fit-content;
    cursor: pointer;
    
    transition: text-shadow 0.5s;

    &:hover {
        
        text-shadow: 0px 0px 10px rgb(170, 170, 170);
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }
`
const ButtonText= styled.p`
    font-family:  ${({ theme }) => theme.main.fontFamily.med};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    background-color: transparent;
   
`

const Break = styled.hr`
    border-style: inset;
    height: 1px;
    background-color: ${({ theme }) => theme.portfolio.line};
    border: 0 none;
`