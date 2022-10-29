import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home_Page from './pages/Home_Page';
import Landing_Page from './pages/Landing_Page';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
          <Route exact path='/' component={Landing_Page}></Route>
          {/* <Route exact path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup} ></Route> */}
          <Route path='/home' component={Home_Page} ></Route>
          {/* <Route path='/add' component={AddForm} ></Route> */}
      </Routes>
    </>
);
}

export default App;