import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Outer>
        <Content>
            <MainText>WANT TO GET IN TOUCH?</MainText>
            <SubText href="mailto:bachraty.m@gmail.com">BACHRATY.M@GMAIL.COM</SubText>
        </Content>
        <BottomText>
            <Creator>
                Matthew Bachraty <br/>
                Toronto, Ontario <br />
                2022
            </Creator>
            <Links>
            <Link href="https://www.instagram.com/matthew_bachraty/">Instagram</Link>
            <Link href="https://www.instagram.com/matthew_bachraty/">Instagram</Link>
            <Link href="https://www.instagram.com/matthew_bachraty/">Instagram</Link>
            <Link href="https://www.instagram.com/matthew_bachraty/">Instagram</Link>
            <Link href="https://www.instagram.com/matthew_bachraty/">Instagram</Link>
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
`
const SubText = styled.h1`
    font-family: ${({ theme }) => theme.main.fontFamily.primary};
    font-size: 5rem;
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
`
const BottomText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 20px;
    
    `
const Creator = styled.p`
     font-family: ${({ theme }) => theme.main.fontFamily.primary};
     line-height: 30px;
     font-size: 2.5rem;
`
const Links = styled.div`
    display: flex;
    flex-direction: column;
`
const Link = styled(Creator)`
    
`