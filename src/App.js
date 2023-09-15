 import React from'react';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router';
import Home from './component/Home';
import Contest from './component/Contest';
import Sites from './component/Sitesz'
import Content from './component/Content';
import About from './component/About';
import NotFound from './pages/NotFound';
import { useState,useEffect } from 'react';
 

 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
    
  <div className=' w-screen h-screen overflow-auto overflow-x-hidden'>
     {/* Navbar */}
     <div>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}></Navbar>
     </div>
     {/* routes */}
     <Routes>
     <Route exact path='/' element={<Home  isDarkMode={isDarkMode}/>}></Route>
     <Route path='/Contest' element={<Contest   isDarkMode={isDarkMode}/>}></Route>
     <Route path='/Sites' element={<Sites  isDarkMode={isDarkMode}/>}></Route>
     <Route path='/Content/:query' element={<Content isDarkMode={isDarkMode}/>}></Route>
     <Route path='/About' element={<About  isDarkMode={isDarkMode}/>}></Route>
     <Route path='*' element={<NotFound   isDarkMode={isDarkMode}/>}></Route>
     
     </Routes>

  </div>
  );
}

export default App;
