import React, { useContext, useEffect, useState } from 'react'
import { Form, Button , Image } from 'react-bootstrap'
import { NavLink, useHistory, useNavigate } from 'react-router-dom'
import img from '../Assets/Login_Signup-01.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Login_Signup.css';
import { StateContext } from '../App';
import Api from '../Api'
function Login() {
	const [email, setEmail] = useState("");
	const [disb, setdisb] = useState(true);
	const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser, setIsLoggedIn, setMediData} = useContext(StateContext)

	function handleSubmit(event) {
		event.preventDefault();
        Api.Post('login',{email, password})
		.then(result=>{
			if (result.id) {
                setUser(result);
				setMediData(result.data)
                setIsLoggedIn(true)
                navigate('/home')
			}else console.log(result)
		})
		.catch(error=>console.log(error))
		

    }
    useEffect(()=>{
        setdisb(!validateForm())
    },[ email, password])
	  function validateForm() {
		return (email.includes('@') && email.length >8) && password.length > 3;
	  }

	return (
		<>
		<div className="login_up">
		<div className="container login ">
			<div className="row  justify-content-center align-items-center form-back border shadow">
				<div className='col-md-6 d-none d-md-block pl-0'>
				<Image  className="border-right border-black" src={img} rounded />
				</div>
				<div className="col-md-5 col-sm-12 m-sm-2 ">
					<h3 className="text-center" >Login</h3>
					<Form onSubmit={handleSubmit} >
						<Form.Group >
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}/>
							<Form.Text className="text-muted lg">
								We'll never share your email with anyone else.
		  					</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
							  value={password}
							  onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Check type="checkbox" label="Remember Me!" />
						</Form.Group>
						<div className="d-flex justify-content-center">
							<Button className="mb-3"  type="submit" disabled={disb} >
								Submit
							</Button>
						</div>
						<h6 className="text-center">New user! Register <NavLink to='/signup'>here</NavLink></h6>
					</Form>
				</div>
			</div>
		</div>
		</div>
		</>
	)
}

export default Login;
