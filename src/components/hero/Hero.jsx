import React, {useEffect, useRef } from 'react'
import styled, {keyframes} from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import cams from '../../assets/cam.glb'

export function Cam(props) {
  const ref = useRef ()
  useFrame ((state) => {
  const t = state.clock.getElapsedTime ()
  ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
  ref.current.rotation.x = Math.cos(t / 4) / 8
  ref.current.rotation.y = Math.sin(t / 4) / 8
  ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })


  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 3
    const y = (mouse.y * viewport.height) / 3
    ref.current.lookAt(x, y, 1)
  })





  const { nodes } = useLoader(GLTFLoader, cams)
  return (
    <group {...props} ref={ref} dispose={null} position={[3.5, 2, 0]}>
      <group rotation={[6.4, 4, 0]} >
      <group scale={[25,25,25]}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
      </group>
      </group>
    </group>
  )
}

function Hero() {

  useEffect(() => {

    AOS.init({duration: 2000});

  },[])


  return (
    <HeroContainer>
        <HeroTitle data-aos="fade" data-aos-once="true">
            <HeroMainTitle>Hi, my name is Matthew Bachraty</HeroMainTitle>
            <HeroSubTitle className='leading-relaxed'>Mech Engineer / Web Developer / UI Designer / Videographer <br />Toronto, Canada</HeroSubTitle>
        </HeroTitle>
        {/* <HeroImage src={sample} data-aos="fade" data-aos-once="true" data-aos-delay="50"/> */}
        <Space></Space>
        <HeroImage data-aos="fade-left" data-aos-once="true" data-aos-duration="2500">
        <Canvas >
        <ambientLight intensity={0.1} />
        <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        />
        <directionalLight color="purple" intensity={1} position={[6,0,5]} />
        <Cam />
      </Canvas>
      </HeroImage>
    </HeroContainer>
  )
}

export default Hero



const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(0deg, rgb(10, 10, 10) 1%, #3c2e40);
    opacity: 0.2;
    padding: 10vw 10vw 10vw 10vw;
    transition: all 2s ease-in-out;
   
    
    :hover {
      
      opacity: 1;
    }
    

    @media only screen and (max-width: 1050px) {
    padding: 10vw;
    /* min-height: 50vh; */
  }
    
`
const HeroTitle = styled.div`
    padding-top: 50px;
`
const Space = styled.div`
    width: 700px;
`
const HeroMainTitle = styled.h1`

    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 8rem;
    text-shadow:  3px 3px 5px rgba(0, 0, 0, 0.25);
    z-index: 100;
    @media only screen and (max-width: 1050px) {
    font-size: clamp(6rem, 9vw, 9rem);
  }
`
const HeroSubTitle = styled(HeroMainTitle)`
    font-size: 20px;
    color: ${({ theme }) => theme.portfolio.fontColor.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.med};
    
    @media only screen and (max-width: 1050px) {
        font-size: clamp(1.5rem, 2vw, 20px);
  }
`


const HeroImage = styled.div`
    justify-content: center;
    align-items: center;
   position: absolute;
   width: 100vw;
   height: 100vh;
   z-index: 1;
   
    @media only screen and (max-width: 1050px) {
    display: none;
  }
  
`


