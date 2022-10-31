import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Home_Page from './pages/Home_Page';
import Landing_Page from './pages/Landing_Page';
import Signup from './pages/Signup';
import Login from './pages/Login';

export const StateContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [user, setUser] = useState({})
  const [mediData, setMediData] = useState([]);
  
  const noUrl = ['404', 'login', 'signup']
  const location = useLocation();
  useEffect(()=>{
    setShowHeader(true)
    // console.log(location.pathname)
    noUrl.forEach(url=>{
      if (location.pathname.search(url)!=-1) {
        return setShowHeader(false)
      }

    })
  },[location])
  return (
    <StateContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, mediData, setMediData}}>
      {showHeader && <Header />}
      <Routes>
          {/* <Route exact path='/login' element={<Login />}/> */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home_Page />} />
          {/* <Route path='/add' element={<AddForm />} /> */}
          <Route exact path='/' element={<Landing_Page />}/>
          <Route path='/404' element={<PageNotFound/>} />
          <Route path='*' element={<PageNotFound/>} />
          
      </Routes>
    </StateContext.Provider>
);
}

export default App;