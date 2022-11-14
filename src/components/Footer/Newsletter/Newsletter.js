import React from 'react'
import { Col, Container, Row, Form, Input, Button } from 'reactstrap';
import "./Newsletter.css"

const Newsletter = () => {
	return (
		<>
			<Container className="newsletter section">
				<Row className="row-cols-lg-auto align-items-center justify-content-between newsletter-row">
					<Col>
						<div className="newsletter-prompt">
							<h1>Subscribe to our newsletter <br /> to get in touch with any doctor</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nam.</p>
						</div>
					</Col>

					<Col>
						<Form>
							<div className="row-cols-lg-auto g-3 align-items-center">
								<Col className="subscribe-area">
									<Input id="exampleEmail" name="email" placeholder="something@idk.cool" type="email" className="subscribe-input"/>
									<Button color="primary" className="subscribe-btn">Submit</Button>
								</Col>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Newsletter