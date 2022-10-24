import React from 'react'
import styled from 'styled-components';
import sample from '../../assets/images/mvweb.mp4'

function Hero() {
  return (
    <HeroContainer>
        <HeroTitle>
            <HeroMainTitle>Hi my name is Matthew Bachraty</HeroMainTitle>
            <HeroSubTitle>Web Developer / UI Designer / Videographer / Content Creator Toronto, Canada</HeroSubTitle>
        </HeroTitle>
        <HeroImage>
            <video>
                <source src={sample} type='video/mp4'/>
            </video>
        </HeroImage>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const HeroTitle = styled.div`
    
`
const HeroMainTitle = styled.div`
    
`
const HeroSubTitle = styled.div`
    
`
const HeroImage = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  transition: opacity 1s 1.5s ease-in-out;
  object-fit: cover;
  object-position: top;
`

