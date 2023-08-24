import React, {useEffect} from 'react'
import PortfolioSection from './PortfolioSection'
import styled from 'styled-components'
import Finsta from '../../assets/images/Finstagram.png'
import Archive from '../../assets/images/Archive.png'
import PPM from "../../assets/images/PPM.png"
import SMS from "../../assets/images/sms.png"
import THGP from "../../assets/images/THGP.png"
import {FiArrowUpRight} from "react-icons/fi"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = ({ portfolioref }) => {

  useEffect(() => {

    AOS.init({duration: 2000});

  },[])

  return (
    <Container id='portfolio'>
    <Inner>
      <Header data-aos="fade" data-aos-once="true">Portfolio</Header>
      <Break/>
      <Feed data-aos="fade-up" data-aos-once="true">
        <PortfolioSection
          header="Web App"
          sub="SMS LOOPS"
          desc="Application that allows companies to create effective referral campaigns using text."
          src={SMS}
          codeLink="https://fern-plough-8c1.notion.site/SMS-LOOPS-OVERVIEW-6cb7f40519e84beaad1165bc7eea1635"
          demoLink="https://smsloops.com/"
          tech="React.js, TypeScript, Tailwind, Node.js, Gatsby, Postgres"
          date="2023"
          codeText="OVERVIEW"
        />
        <PortfolioSection
          header="Online Store"
          sub="The Hungry Goat Pizza"
          desc="Online reservation for local pizza business"
          src={THGP}
          codeLink="https://dribbble.com/shots/22361602-THE-GOAT-PIZZA"
          demoLink="https://www.thehungrygoatpizza.com/"
          tech="Next.js, TypeScript, Tailwind, PostgresSQL, Firebase Authentication and Storage"
          date="2023"
          codeText="OVERVIEW"
        />
        {/* <PortfolioSection
          header="Website Build"
          sub="Progress Property Managment Revamp"
          desc="Updating a websites design and features. Static home and contact page, built with Render as a backend"
          src={PPM}
          codeLink="https://fern-plough-8c1.notion.site/PROGRESS-PROPERTY-MANAGEMENT-WEB-REDESIGN-ba7e37b6bcb044f480df45eb95c35d3e"
          demoLink="https://ppmweb.onrender.com/"
          tech="React.js, Render, React-Router, Styled Components"
          date="2022"
          codeText="OVERVIEW"
        />
        <PortfolioSection
          header="Finstagram"
          sub="Instagram Clone"
          desc="A clone of Instagram's features. Currently built with firebase as a back end to manage photo storage and user sign in."
          src={Finsta}
          codeLink="https://github.com/mbachrat/instagram-clone"
          demoLink="https://instagram-clone-8f5dd.firebaseapp.com/"
          tech="React.js, Firebase, CSS"
          date="2022"
          codeText="VIEW CODE"
        /> */}
        <PortfolioSection
          header="Portfolios"
          sub="Personal Website updates"
          desc="My personal website updates throughout my learning journey. A front end portfolio built with React, React Router, and CSS."
          src={Archive}
          demoLink="/webhistory"
          codeLink="https://github.com/stars/mbachrat/lists/web-portfolios"
          tech="React.js, React Router, CSS"
          date="2021"
          codeText="VIEW CODE"
        />
        
      </Feed>
      <ButtonContainer
        rel="noreferrer"
        target="_blank"
        href="https://github.com/mbachrat?tab=repositories" >
        <ButtonText>View More</ButtonText>
        <FiArrowUpRight size={37} />
      </ButtonContainer>
      <Break/>
    </Inner>
  </Container>
);
};

export default Portfolio

const Container = styled.div`
    background-color: ${({ theme }) => theme.portfolio.background};
    padding: 0 5vw 0 5vw;
`
const Inner = styled.div`
    
`
const Header = styled.h1`
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 7rem;
    text-shadow:  0 0 10px black;
`
const Feed = styled.div`
    padding-top:30px ;
`
const ButtonContainer = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    width: fit-content;
    cursor: pointer;
    
    transition: text-shadow 0.5s;

    &:hover {
        
        text-shadow: 0px 0px 10px rgb(170, 170, 170);
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }
`
const ButtonText= styled.p`
    font-family:  ${({ theme }) => theme.main.fontFamily.med};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    background-color: transparent;
   
`

const Break = styled.hr`
    border-style: inset;
    height: 1px;
    background-color: ${({ theme }) => theme.portfolio.line};
    border: 0 none;
`