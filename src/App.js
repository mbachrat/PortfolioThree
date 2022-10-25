import './App.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles/>
      <div className="App">
        <Nav/>
        <Hero/>
        <Portfolio />
      </div>
      </ThemeProvider>
    
  );
}

export default App;
