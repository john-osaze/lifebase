import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import "./Hero.css"
import HeroImg from "../../assets/images/hero-img.png";

const Hero = () => {
    return (
        <>
            <Container className="section">
                <Row className='align-items-center justify-content-between'>
                    <Col lg="6" md="6" sm="12">
                        <div className="hero-info">
                            <h3>A range of programs for healthcare</h3>
                            <h1>Own your health</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic doloremque tenetur laborum, optio nulla rerum ab sit sequi adipisci rem quidem fugitad eaque vel expedita provident! Nihil, commodi!</p>
                            <Button color='primary'>Get my Records</Button>
                        </div>
                    </Col>

                    <Col lg="6" md="6" sm="12">
                    <div className="hero-img">
                        <img src={HeroImg} alt="hero" width="100%" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero;