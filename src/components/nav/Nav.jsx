import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'


function Nav() {

   
      const [isTop, setIsTop] = useState(true)
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          setIsTop(scrollTop === 0)
          console.log(isTop)
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [isTop])
    
      
  return (

    <Wrapper>
        <NavStart>
            <NavText>Matthew Bachraty</NavText>
        </NavStart>
        <NavEnd>
            <NavTextLink href='#portfolio'>Portfolio</NavTextLink>
            <NavTextLink href='#about'>About</NavTextLink>
            <NavTextLink href='#contact'>Contact</NavTextLink>
            <NavTextLink target='blank' href='https://fern-plough-8c1.notion.site/Matthew-Bachraty-3830f956e6a3410e8bf4d877c8cc6cf3'>Resume</NavTextLink>
            
        </NavEnd>
        <Blur inputColor={isTop}></Blur>
    </Wrapper>
    
  )
}

export default Nav


const Wrapper = styled.div`
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    font-weight: bold;
    z-index: 99;
    transition: background-color 1s, border-bottom 1s;
    
    @media only screen and (max-width: 1050px) {
    display: none;
    }
`;

const Blur = styled.div`
    opacity: ${( props ) => (props.inputColor === true ? '0' : '1')};
    background: ${({ theme }) => theme.nav.background};
    backdrop-filter: blur(100px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
    width: 100vw;
    height: 70px;
    transition: all 0.5s ease;
`

const NavStart = styled.div`
    
`;

const NavEnd = styled.div`
    display: flex;
    gap: 3em; 
`;

const NavText = styled.p`
    color: ${({ theme }) => theme.nav.fonts.primary};
    font-size: 18px;
    font-family: ${({ theme }) => theme.main.fontFamily.med};
`

const NavTextLink = styled.a`
    color: ${({ theme }) => theme.nav.fonts.primary};
    background-color: transparent;
    border: none;
    font-size: 17px;
    font-family: ${({ theme }) => theme.main.fontFamily.med};
    cursor: pointer;
    transition: color 0.5s;
    &:hover {
        color: ${({ theme }) => theme.nav.fonts.hover};
        text-shadow: 0 0 10px ${({ theme }) => theme.nav.fonts.hover};
    }
`
