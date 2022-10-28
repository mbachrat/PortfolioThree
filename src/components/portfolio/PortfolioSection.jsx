import React from 'react'
import styled from 'styled-components'
import {FiArrowUpRight} from "react-icons/fi"


const PortfolioSection = ({
    header,
    sub,
    desc,
    src,
    tech,
    date,
    codeLink,
    demoLink,
  }) => {
  return (
    <Outer>
        <TitleBox>
            <Title>{header}</Title>
            <SubTitle>{sub}</SubTitle>
        </TitleBox>
        <ContentBox>
            <LeftContent>
                <ImageLoader 
                src={src}
                className="theTest"
                />
                <ImageClear
                src={src}
                />
            </LeftContent>
            
            <RightContent>
                <Info>
                    <InfoHeader>Summary</InfoHeader>
                    <Description>{desc}</Description>
                </Info>
                <Data>
                    <Tech>
                        <TechHeader>Technologies</TechHeader>
                        <Technologies>{tech}</Technologies>
                    </Tech>
                    <Date>
                        <DateText>Date</DateText> 
                        <DateYear>{date}</DateYear>
                    </Date>
                </Data>
                <LinkContainer>
                <a rel="noreferrer" target="_blank" href={demoLink}>
                    <Button>
                        <ButtonText>LIVE PREVIEW</ButtonText>
                        <FiArrowUpRight size={27}/>
                    </Button>
                </a>
                <a rel="noreferrer" target="_blank" href={codeLink}>
                    <Button>
                        <ButtonText>VIEW CODE</ButtonText>
                        <FiArrowUpRight size={27}/>
                    </Button>
                </a>
                </LinkContainer>
            </RightContent>
        </ContentBox>
        <Break/>
    </Outer>
  )
}

export default PortfolioSection

const Outer = styled.div`
    width: 100%;
    padding-bottom: 30px;
    
`
const TitleBox = styled.div`
  
`
const ContentBox = styled.div`
    padding-top: 80px;
    display: flex;
    gap: 50px;
    @media only screen and (max-width: 1050px) {
    flex-direction: column;
    padding-top: 40px;
    }
`
const RightContent = styled.div`
flex: 5;
`
const LeftContent = styled.div`
    display: flex;
    flex: 6;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    &:hover .theTest {
        filter: blur(12px);
        opacity: 0.5;
    }
`

const Title = styled.h2`
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 5rem;
`
const SubTitle = styled(Title)`
     color: ${({ theme }) => theme.portfolio.fontColor.secondary};
     font-family: ${({ theme }) => theme.main.fontFamily.med};
     font-size: 2rem;
`   
const ImageLoader = styled.img`
  width: 100%;
  border-radius: 8px;
  transition: opacity 0.5s 0.5s, filter 0.5s;
  filter: blur(25px);
  opacity: 0.5;
  
  

  
  @media only screen and (max-width: 1050px) {
    filter: blur(10px);
  }
`
  const ImageClear = styled.img`
  border-radius: 8px;
   width: 100%;
   margin-left: -100%;
   z-index: 5;

  
   
  `

const Info = styled.div`
    
`
const InfoHeader = styled.h3`
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.med};
    font-size: 3.2rem;

    @media only screen and (max-width: 1050px) {
        padding-top: 30px;
    }
`
const Description = styled.p`
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
    font-size: 2.5rem;
    padding-top: 10px;
    line-height: 35px;
`
const Data = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 40px;
`
const Tech = styled.div`
    padding-top: 50px;  
`
const TechHeader = styled.h3`
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.primary};
    font-size: 2.5rem;
`
const Technologies = styled.p`
     color: ${({ theme }) => theme.portfolio.fontColor.secondary};
     font-family: ${({ theme }) => theme.main.fontFamily.light};
     font-size: 2.5rem;
     padding-top: 10px;
`
const Date = styled.div`
    display: flex;
    gap: 10px;
`
const DateText = styled.p`
     color: ${({ theme }) => theme.portfolio.fontColor.primary};
     font-family: ${({ theme }) => theme.main.fontFamily.primary};
     font-size: 2.5rem;
`
const DateYear = styled.p`
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
     font-size: 2.5rem;
`
const LinkContainer = styled.div`
    padding-top: 50px ;
    display: flex;
    gap: 50px;
   
`
const Button = styled.div`
display: flex;
align-items: center;
gap: 15px;
justify-content: center;
border: none;
color: ${({ theme }) => theme.portfolio.fontColor.primary};
background-color: transparent;
cursor: pointer;
transition: text-shadow 0.5s;

&:hover {
    
      text-shadow: 0px 0px 10px rgb(170, 170, 170);
      
  }
  
`
const ButtonText = styled.p`
    font-family:  ${({ theme }) => theme.main.fontFamily.med};
    font-size: 2rem;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    


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
    top: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 255, 255, 0.64);
    transform: scaleX(0) translateY(26px);
    transform-origin: right;
    transition: transform 0.5s;
  }
`

const Break = styled.hr`
    border-style: inset;
    height: 1px;
    background-color: ${({ theme }) => theme.portfolio.line};
    border: 0 none;
    margin-top: 60px;
`