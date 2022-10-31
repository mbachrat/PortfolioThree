import React from 'react'
import styled from 'styled-components'
import WebHistory from './WebHistory'
import WebOne from "../assets/images/webOne.png"
import WebTwo from "../assets/images/webTwo.png"

const InputWeb = ({ }) => {
  return (
    <Outer>
        <Header>Archives</Header>
        <Content>
        <WebHistory
        weblink = "https://mbachrat.github.io/react-deploy/"
        date = "Feb 2022"
        src = {WebOne}
        title = "Website 1.0"
         />
        <WebHistory
        weblink = "https://mbachrat.github.io/websitetwo/"
        date = "Aug 2022"
        src = {WebTwo}
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
padding-left: 20px;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 7rem;
    text-shadow:  0 0 10px black;
`
const Content = styled.div`     
    display: flex;
    flex-wrap: wrap;
`
