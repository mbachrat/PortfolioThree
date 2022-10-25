import React from 'react'
import styled from 'styled-components';
import sample from '../../assets/images/profilepic.png'

function Hero() {
  return (
    <HeroContainer>
        <HeroTitle>
            <HeroMainTitle>Hi my name is Matthew Bachraty</HeroMainTitle>
            <HeroSubTitle>Web Developer / UI Designer / Videographer / Content Creator <br />Toronto, Canada</HeroSubTitle>
        </HeroTitle>
        <HeroImage src={sample}/>
      
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(0deg, rgb(10, 10, 10) 1%, #1b1b1b);
    padding: 20vw;

    @media only screen and (max-width: 1050px) {
    padding: 10vw;
    /* min-height: 50vh; */
  }
    
`
const HeroTitle = styled.div`
    padding-top: 50px;
`
const HeroMainTitle = styled.h1`
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 9rem;
    text-shadow:  0 0 10px black;

    @media only screen and (max-width: 1050px) {
    font-size: clamp(6rem, 9vw, 9rem);
  }
`
const HeroSubTitle = styled(HeroMainTitle)`
    font-size: 20px;
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.med};
    
    @media only screen and (max-width: 1050px) {
        font-size: clamp(1.5rem, 2vw, 20px);
  }
`
const HeroImage = styled.img`
    justify-content: center;
    align-items: center;
    width: 35em;
   
    @media only screen and (max-width: 1050px) {
    display: none;
  }
  
`

