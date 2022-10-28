import './App.css';
import {Route, Routes} from "react-router-dom"
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import InputWeb from './secondpage/InputWeb';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='/WebHistory' element = {<ThemeProvider theme={darkTheme}>
          <GlobalStyles/>
          <div>
            <InputWeb />
          </div>
          </ThemeProvider>}/>
      
      
      <Route path='/' element = { <ThemeProvider theme={darkTheme}>
          <GlobalStyles/>
          <div className="App">
            <Nav/>
            <Hero />
            <Portfolio />
            <About />
            <Footer />
          </div>
          </ThemeProvider>}/>
       
         
      </Routes>
  );
}

export default App;
