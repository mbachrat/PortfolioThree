import React, {useEffect} from 'react'
import styled from 'styled-components'
import YoungMatt from '../../assets/images/YoungMatt.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

    useEffect(() => {

        AOS.init({duration: 2000});
    
      },[])




  return (
    <Outer >
        <Anchor id="about"></Anchor>
        <Header data-aos="fade" data-aos-once="true">
            About
        </Header>
        
        <Content>
            <LeftContent data-aos="fade-right" data-aos-once="true">
                <Desc>
                I'm a Web Developer based in 🍁 Toronto.

My focus area for the past year and a half has been front-end development with React, building components to help startups with their launches.

I love building clean, usable and accessible UIs, both on the user-facing and dev-facing sides. 

                </Desc>
                <Skills>
                    <Skill>
                        <SkillHeader>FrontEnd</SkillHeader>
                        <SkillItem>React</SkillItem>
                        <SkillItem>Javascript</SkillItem>
                        <SkillItem>HTML</SkillItem>
                        <SkillItem>CSS</SkillItem>
                    </Skill>
                    <Skill>
                        <SkillHeader>Design</SkillHeader>
                        <SkillItem>Figma</SkillItem>
                        <SkillItem>Photoshop</SkillItem>
                        <SkillItem>Illustrator</SkillItem>
                        <SkillItem>Premier</SkillItem>
                        <SkillItem>After Effects</SkillItem>
                    </Skill>
                </Skills>
            </LeftContent>
            <RightContent data-aos="fade-left" data-aos-once="true">
                <Image src={YoungMatt} width={600} />
            </RightContent>
        </Content>

        <Break/>
    </Outer>
  )
}

export default About

const Outer = styled.div`
    background-color: ${({ theme }) => theme.portfolio.background};
    padding: 0 5vw 0 5vw;
`
const Anchor = styled.a`
    display: block;
    position: relative;
    top: -80px;
    visibility: hidden;
`
const Header = styled.h1`
    padding-top: 50px;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 7rem;
    text-shadow:  0 0 10px black;
`
const Content = styled.div`
    display: flex;
`
const RightContent = styled.div`
display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1050px) {
        display: none;
    }
`
const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const Desc = styled.p`
      color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
    font-size: 2.5rem;
    padding-top: 50px;
    line-height: 35px;
`
const Skills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 50px;
`
const Skill = styled.div`
    
`
const SkillHeader = styled.h2`
    font-family:  ${({ theme }) => theme.main.fontFamily.med};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
    padding-bottom: 10px;
`
const SkillItem = styled.p`
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
    font-size: 2.5rem;
`
const Image = styled.img`
    
`

const Break = styled.hr`
    border-style: inset;
    height: 1px;
    background-color: ${({ theme }) => theme.portfolio.line};
    border: 0 none;
    margin-top: 60px;
`