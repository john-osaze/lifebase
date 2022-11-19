import React from 'react'
import { Form, Button, Image } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/images/Login_Signup-01.svg';
import '../login/Login_Signup.css';

function Signup() {	return (
		<>
		<div className="signup_up">
		<div className="container signup">
			<div className="row justify-content-center border-class form-back border shadow">
				<div className='col-md-6 col-sm-12 d-none d-md-block pl-0'>
				<Image  className="border-right border-black img1"src={img}  />
				</div>
				<div className="col-md-5 col-sm-12 ">
					<h3 className="text-center" >SignUp</h3>
					<Form>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter Name"/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
		  					</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password"/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Password"/>
						</Form.Group>
						<div className="d-flex justify-content-center" >
						<Button variant="primary" className="mb-3" type="submit">
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
