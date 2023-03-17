import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';

import AboutLayout from './pages/About/AboutLayout';
import About from './pages/About/PresentSkills';

import Past from './pages/About/Past'
import Present from './pages/About/Present';
import Future from './pages/About/Future';

import MyPortfolio from './pages/MyPortfolio';
import MyPortfolioJobsDetails from './components/MyPortfolio/MyPortfolioJobsDetails';

import { useState, useEffect } from 'react';
import '../server';

function App() {

  const [DarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("DarkMode")) || false)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(DarkMode))
  }, [DarkMode])

  const DarkStyle = {
    backgroundColor: DarkMode == true ? 'rgb(5,27,59)' : 'rgb(100,255,218)',
    background: DarkMode == true ?
      'linear-gradient(180deg, rgba(5,27,59,1) 0%, rgba(53,141,139,1) 80%, rgba(100,255,218,1) 100%)' :
      'linear-gradient(180deg, rgba(100,255,218,1) 0%, rgba(77,199,179,1) 70%, rgba(53,141,139,1) 100%)',
    color: DarkMode == false ? '#020c1b' : 'white',
    transition: 'background-color 1s ease-in-out, filter 1s ease-in-out',
  }


  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout style={DarkStyle} toggleDarkMode={toggleDarkMode} DarkMode={DarkMode} />} >
          <Route path='/' element={<Home DarkMode={DarkMode} />} />

          <Route path='/About' element={<AboutLayout DarkMode={DarkMode} />}>
            <Route index element={<Past />} />
            <Route path='Present' element={<Present DarkMode={DarkMode} />} />
            <Route path='Future' element={<Future />} />
          </Route>

          <Route path='/MyPortfolio' element={<MyPortfolio DarkMode={DarkMode} />} />
          <Route path="MyPortfolio/:id" element={<MyPortfolioJobsDetails DarkMode={DarkMode} />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;
