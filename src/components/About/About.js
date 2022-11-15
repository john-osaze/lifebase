import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
import AboutImg from "../../assets/images/about-img.png";
import "./About.css"

const About = () => {
    return (
        <>
            <Container className='section' id='about'>
                <Row className="about-us justify-content-between align-items-center">
                    <Col lg="6" md="6" sm="12" className="about-img">
                        <img src={AboutImg} alt="about" width="100%"/>
                    </Col>

                    <Col lg="6" md="6" sm="12" className="about-info">
                        <h1 className='title'>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolores repudiandae praesentium aperiam eius iure doloribus voluptatem numquam, non cupiditate cum ducimus ratione, dolorum hic quos eveniet laborum voluptatum omnis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime nam unde repudiandae repellendus facere hic, ea voluptates at placeat distinctio iste ducimus quas dolore, dolor doloremque magnam eum blanditiis?</p>

                        <Button color='primary' className='mt-4'>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;