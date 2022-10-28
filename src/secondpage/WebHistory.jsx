import React from 'react'
import styled from 'styled-components'



const WebHistory = ({
    src,
    date,
    weblink,
    title,
  }) => {
  return (
    
            <Content>
                <WebBox>
                    <a rel="noreferrer" target="_blank" href={weblink}>
                    <ImageBox>
                        <Image src={src} />
                    </ImageBox>
                    <Title>{title}</Title>
                    <Date>{date}</Date>
                    
                    </a>
                </WebBox>
            </Content>
   
  )
}

export default WebHistory

const Content = styled.div`
    
`
const Title = styled.h2`
    padding-left: 20px;
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.primary};
    font-size: 2.5rem;
    padding-top: 10px;
    line-height: 35px;
`
const WebBox = styled.div`

     @media only screen and ( max-width: 1050px) {
        border-bottom: solid 1px;
    }

`
const ImageBox = styled.div`
    padding: 20px;
    
`
const Image = styled.img`
    border-radius: 5px;
    width: 500px;

    @media only screen and ( max-width: 1050px) {
        width: 300px;
    }

   
`
const Date = styled.div`
    padding: 20px;
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
    font-size: 2.5rem;
    padding-top: 10px;
    line-height: 35px;
`