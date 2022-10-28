import React from 'react'
import styled from 'styled-components'
import WebHistory from './WebHistory'
import FakeImage from "../assets/images/Finstagram.png"

const InputWeb = ({ }) => {
  return (
    <Outer>
        <Header>Archives</Header>
        <Content>
        <WebHistory
        weblink = "https://www.matthewbachraty.com/#mySkills"
        date = "Feb 2022"
        src = {FakeImage}
        title = "Website 1"
         />
        <WebHistory
        weblink = "https://www.matthewbachraty.com/#mySkills"
        date = "Feb 2022"
        src = {FakeImage}
        title = "Website 2.0"
         />
         </Content>
    </Outer>
  )
}

export default InputWeb

const Outer = styled.div`
    background-color: ${({ theme }) => theme.portfolio.background};
    padding: 4vw 5vw 0 5vw;
`

const Header = styled.h1`
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 7rem;
    text-shadow:  0 0 10px black;
`
const Content = styled.div`     
    display: flex;
    flex-wrap: wrap;
`
