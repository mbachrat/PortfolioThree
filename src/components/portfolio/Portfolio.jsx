import React from 'react'
import PortfolioSection from './PortfolioSection'
import styled from 'styled-components'
import Test from '../../assets/images/profilepic.png'

const Portfolio = ({ portfolioref }) => {
  return (
    <Container>
    <Inner>
      <Header>Portfolio</Header>
      <Feed>
        <PortfolioSection
          header="Finstagram"
          sub="Instagram Clone"
          desc="A Full Stack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images."
          src={Test}
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
        href="https://github.com/joshwrn?tab=repositories"
      >
        <Button>View More</Button>
        {/* <ArrowIcon size={47} /> */}
      </ButtonContainer>
    
    </Inner>
  </Container>
);
};

export default Portfolio

const Container = styled.div`
    background-color: ${({ theme }) => theme.portfolio.background};
    padding: 0vw 10vw 0 10vw;
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
const ButtonContainer = styled.div`
    
`
const Button= styled.button`
    
`
