// import logo from './logo.svg';
import './App.css';
import NavigationRail from './components/NavigationRail';
import Home from './pages/Home';
import Activities from './pages/Activities';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationRail/>
        <div className='page'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='activities' element={<Activities/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
