import React from 'react'
import styled from 'styled-components'


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
            
            <ImageLoader 
            src={src}
            />
            
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
                        <ButtonText>Live Preview</ButtonText>
                    </Button>
                </a>
                <a rel="noreferrer" target="_blank" href={codeLink}>
                    <Button>
                        <ButtonText>View Code</ButtonText>
                    </Button>
                </a>
                </LinkContainer>
            </RightContent>
        </ContentBox>
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
    padding-top: 30px;
    display: flex;

    @media only screen and (max-width: 1050px) {
    flex-direction: column;
    }
`
const RightContent = styled.div`
flex: 5;
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
    flex: 6;
   border: solid;
   width: 100%;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Info = styled.div`
    
`
const InfoHeader = styled.h3`
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.med};
    font-size: 3.2rem;
`
const Description = styled.p`
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
    font-size: 2.5rem;
    padding-top: 10px;
`
const Data = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 20px;
`
const Tech = styled.div`
    padding-top: 30px;
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
    gap: 5px;
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
    
`
const Button = styled.button`
    
`
const ButtonText = styled.p`
    
`
