// import logo from './logo.svg';
import './App.css';
import NavigationRail from './components/NavigationRail';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelpIcon from './components/HelpIcon';
import { Paper, ThemeProvider, createTheme } from '@mui/material';
import Footer from './components/Footer';
import { AuthContextProvider } from './contexts/AuthContext';
import Signup from './pages/Signup';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  components: {
    'MuiCardContent': {
      'styleOverrides': {
        'root': {
          'color': "#000"
        }
      }
    },
    
    MuiTooltip: {
      tooltip: {
        color: 'red'
      }
    }
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
          <AuthContextProvider>
            <NavigationRail handleChangeTheme={handleChangeTheme} theme={theme}/>
              <Paper>
                <div className='page'>
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='activities' element={<Activities/>}/>
                    <Route path='profil' element={<Profil/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='signup' element={<Signup/>}/>
                  </Routes>
                </div>
                <Footer/>
                <HelpIcon/>
            </Paper>
          </AuthContextProvider>
        </BrowserRouter>  
        
      </ThemeProvider>
    </div>
  );
}

export default App;
