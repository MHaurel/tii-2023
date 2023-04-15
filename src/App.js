// import logo from './logo.svg';
import './App.css';
import NavigationRail from './components/NavigationRail';
import Home from './pages/Home';
import Activities from './pages/Activities';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelpIcon from './components/HelpIcon';
import { ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const lightTheme = createTheme({
  palette: {
    mode: "light"
  }
})

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const handleChangeTheme = () => {
    if (theme === lightTheme)
      setTheme(darkTheme);
    else
      setTheme(lightTheme)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavigationRail handleChangeTheme={handleChangeTheme} theme={theme}/>
          <div className='page'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='activities' element={<Activities/>}/>
            </Routes>
          </div>
        </BrowserRouter>
        <HelpIcon/>
      </ThemeProvider>
    </div>
  );
}

export default App;
