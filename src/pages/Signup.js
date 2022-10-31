import React, { useContext, useEffect, useState } from 'react'
import { Form, Button,Image } from 'react-bootstrap'
import { NavLink, unstable_HistoryRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Assets/Login_Signup-01.svg';
import '../Css/Login_Signup.css';
import { StateContext } from '../App';
import Api from '../Api';

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCPassword] = useState("");
	const [disb, setdisb] = useState(true);
	// const history = unstable_HistoryRouter();
	function validateForm() {
		return name.length > 3 && (email.includes('@') && email.length > 8) && password.length >= 1 && password === cpassword
	}
	function handleSubmit(event) {
		event.preventDefault();
		Api.Post('signup', {name, email, password})
		.then(result=>{
			if (result) {
				alert(result.message)
			}
		})
		.catch(error=>console.log(error))
		}

		useEffect(()=>{
			setdisb(!validateForm())
		},[name, email, password, cpassword])
	return (
		<>
		<div className="signup_up">
		<div className="container signup">
			<div className="row justify-content-center border-class form-back border shadow">
				<div className='col-md-6 col-sm-12 d-none d-md-block pl-0'>
				<Image  className="border-right border-black img1"src={img}  />
				</div>
				<div className="col-md-5 col-sm-12 ">
					<h3 className="text-center" >SignUp</h3>
					<Form onSubmit={handleSubmit} >
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter Name"
								value={name} onChange={(e) => setName(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email"
								value={email} onChange={(e) => setEmail(e.target.value)} />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
		  					</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
								value={password} onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Password"
								value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
						</Form.Group>
						<div className="d-flex justify-content-center" >
						<Button variant="primary" className="mb-3" type="submit" disabled={disb} >
							Submit
						</Button>
						</div>
						<h6 className="text-center">Already a User ! Login <NavLink to='/login'>here</NavLink></h6>
					</Form>
				</div>
			</div>
		</div>
		</div>
		</>
	)
}


export default Signup;
