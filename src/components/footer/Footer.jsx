import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Outer>
        <Content>
            <MainText>WANT TO GET IN TOUCH?</MainText>
            <SubText rel="noreferrer" target="_blank" href="mailto:bachraty.m@gmail.com">BACHRATY.M@GMAIL.COM</SubText>
        </Content>
        <BottomText>
            <Creator>
                Matthew Bachraty <br/>
                Toronto, Ontario <br />
                2022
            </Creator>
            <Links>
            <LinkSection>
                <Link rel="noreferrer" target="_blank" href="https://www.instagram.com/matthew_bachraty/">Instagram</Link>
                <Link rel="noreferrer" target="_blank" href="https://github.com/mbachrat">GitHub</Link>
                <Link rel="noreferrer" target="_blank" href="https://fern-plough-8c1.notion.site/SINSEN-Studio-8ff2463987ed4a8f98151cd4a72cb51f">SINSEN</Link>
            </LinkSection>
            <LinkSection>
                <Link rel="noreferrer" target="_blank" href="https://fern-plough-8c1.notion.site/Matthew-Bachraty-3830f956e6a3410e8bf4d877c8cc6cf3">Resume</Link>
                <Link rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mbachraty/">LinkedIn</Link>
            </LinkSection>
            </Links>
        </BottomText>
    </Outer>
  )
}

export default Footer

const Outer = styled.div`
    background-color: ${({ theme }) => theme.portfolio.background};
    background: linear-gradient(180deg, rgb(10, 10, 10) 1%, #1b1b1b);
    padding: 0 5vw 0 5vw;
   
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
`
const MainText = styled.h1`
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 7rem;
    text-shadow:  0 0 10px black;

    @media only screen and (max-width: 1050px) {
        font-size: 4rem;
    }
`
const SubText = styled.a`
    font-family: ${({ theme }) => theme.main.fontFamily.primary};
    font-size: 5rem;
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};

    @media only screen and (max-width: 1050px) {
        font-size: 2rem;
    }
`
const BottomText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 50px;

    @media only screen and (max-width: 1050px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
    }
    
    `
const Creator = styled.p`
     font-family: ${({ theme }) => theme.main.fontFamily.primary};
     line-height: 40px;
     font-size: 2.2rem;
`
const Links = styled.div`
    display: flex;
    gap: 25px;
`

const LinkSection = styled.div`
    display: flex;
    flex-direction: column;
`
const Link = styled.a`
     font-family: ${({ theme }) => theme.main.fontFamily.primary};
     line-height: 40px;
     font-size: 2.2rem;
     width: fit-content;
     position: relative;

     &:hover {
    ::after {
      transform: scaleX(1) translateY(26px);
      transform-origin: left;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 255, 255, 0.64);
    transform: scaleX(0) translateY(26px);
    transform-origin: right;
    transition: transform 0.5s;
  }

`