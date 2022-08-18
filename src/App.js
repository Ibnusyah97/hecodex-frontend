import React, { useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
