import React from 'react'
import styled from 'styled-components'
import {FiArrowUpRight} from "react-icons/fi"

//write code that counts every project that runs then alternates CSS

const PortfolioSection = ({
    header,
    sub,
    desc,
    src,
    tech,
    date,
    codeLink,
    demoLink,
    codeText,
    headerTwo,
    subTwo,
    descTwo,
    srcTwo,
    techTwo,
    dateTwo,
    codeLinkTwo,
    demoLinkTwo,
    codeTextTwo,
  }) => {
  return (
    <Outer>
        <BoxOne>
            <TitleBox>
                <Title>{header}</Title>
                <SubTitle>{sub}</SubTitle>
            </TitleBox>
            <ContentBox>
                <LeftContent href={demoLink} target="_blank">
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
                            <ButtonText>{codeText}</ButtonText>
                            <FiArrowUpRight size={27}/>
                        </Button>
                    </a>
                    </LinkContainer>
                </RightContent>
                
            </ContentBox>
            <Break/>
        </BoxOne>
        
        <BoxOne>
            <TitleBox>
                <Title>{headerTwo}</Title>
                <SubTitle>{subTwo}</SubTitle>
            </TitleBox>
            <ContentBoxTwo>
               
                
                <RightContent>
                    <Info>
                        <InfoHeader>Summary</InfoHeader>
                        <Description>{descTwo}</Description>
                    </Info>
                    <Data>
                        <Tech>
                            <TechHeader>Technologies</TechHeader>
                            <Technologies>{techTwo}</Technologies>
                        </Tech>
                        <Date>
                            <DateText>Date</DateText> 
                            <DateYear>{dateTwo}</DateYear>
                        </Date>
                    </Data>
                    <LinkContainer>
                    <a rel="noreferrer" target="_blank" href={demoLinkTwo}>
                        <Button>
                            <ButtonText>LIVE PREVIEW</ButtonText>
                            <FiArrowUpRight size={27}/>
                        </Button>
                    </a>
                    <a rel="noreferrer" target="_blank" href={codeLinkTwo}>
                        <Button>
                            <ButtonText>{codeTextTwo}</ButtonText>
                            <FiArrowUpRight size={27}/>
                        </Button>
                    </a>
                    </LinkContainer>
                </RightContent>

                <LeftContent href={demoLinkTwo} target="_blank">
                    <ImageLoader 
                    src={srcTwo}
                    className="theTest"
                    />
                    <ImageClear
                    src={srcTwo}
                    />
                </LeftContent>
            </ContentBoxTwo>
            <Break/>
        </BoxOne>
    </Outer>
  )
}

export default PortfolioSection

const Outer = styled.div`
   
    
`
const TitleBox = styled.div`

  
`
const ContentBox = styled.div`
    padding-top: 80px;
    display: flex;
   
    gap: 50px;
    @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    }
`
const ContentBoxTwo = styled.div`
    padding-top: 80px;
    display: flex;
   
    gap: 50px;
    @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column-reverse;
    }
`
const BoxOne = styled.div`
     width: 100%;
    padding-bottom: 30px;
    
`
const RightContent = styled.div`
flex: 5;
`
const LeftContent = styled.a`
    display: flex;
    flex: 6;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    &:hover .theTest {
        filter: blur(12px) brightness(480%);
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
  filter: blur(25px) brightness(480%);
  
  opacity: 0.5;
  
  

  
  @media only screen and (max-width: 1050px) {
    filter: blur(10px) brightness(480%);
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