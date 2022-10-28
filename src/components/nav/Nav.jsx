import React from 'react'
import styled from 'styled-components'

function Nav() {
  return (

    <Wrapper>
        <NavStart>
            <NavText>Matthew Bachraty</NavText>
        </NavStart>
        <NavEnd>
            <NavTextLink href='#portfolio'>Portfolio</NavTextLink>
            <NavTextLink href='#about'>About</NavTextLink>
            <NavTextLink href='#contact'>Contact</NavTextLink>
            
        </NavEnd>

    </Wrapper>
  )
}

export default Nav


const Wrapper = styled.div`
    padding: 1em;
    background: ${({ theme }) => theme.nav.background};
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

const NavStart = styled.div`
    
`;

const NavEnd = styled.div`
    display: flex;
    gap: 3em; 
`;

const NavText = styled.p`
    color: ${({ theme }) => theme.nav.fonts.primary};
    font-size: 17px;
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