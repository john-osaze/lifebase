import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./pages/home/Home";
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/*' element={<Home />} />
				</Routes>
			</div>
		</Router>

	);
}

export default App;