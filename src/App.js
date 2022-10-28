import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home_Page from './pages/Home_Page';
import Landing_Page from './pages/Landing_Page';
import 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <>
      <Switch>
          <Route exact path='/' component={Landing_Page}></Route>
          {/* <Route exact path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup} ></Route> */}
          <Route path='/home' component={Home_Page} ></Route>
          {/* <Route path='/add' component={AddForm} ></Route> */}
      </Switch>
    </>
);
}

export default App;