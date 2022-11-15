import { Col, Container, Row } from 'reactstrap';
import "./Counter.css";
import CounterIcon1 from "../../assets/images/counter-icon-1.png"

const Counter = () => {
    return (
        <>
            <Container fluid className="counter-wrap">
                <Container className="counter-inner">
                    <h1 className="title text-center">
                        Laboratory Priority Services Delivered <br /> We Have Great Skills
                    </h1>

                    <Row>
                        <Col lg="3" md="3" sm="6" className="counter-item d-flex justify-content-center align-items-center">
                            <div className="counter-img">
                                <img src={CounterIcon1} alt="" />
                            </div>
                            <div className="counter-info">
                                <h1>10<span>K+</span></h1>
                                <p>Test Completed</p>
                            </div>
                        </Col>
                        
                        <Col lg="3" md="3" sm="6" className="counter-item d-flex justify-content-center align-items-center">
                            <div className="counter-img">
                                <img src={CounterIcon1} alt="" />
                            </div>
                            <div className="counter-info">
                                <h1>10<span>K+</span></h1>
                                <p>Test Completed</p>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="6" className="counter-item d-flex justify-content-center align-items-center">
                            <div className="counter-img">
                                <img src={CounterIcon1} alt="" />
                            </div>
                            <div className="counter-info">
                                <h1>10<span>K+</span></h1>
                                <p>Test Completed</p>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="6" className="counter-item d-flex justify-content-center align-items-center">
                            <div className="counter-img">
                                <img src={CounterIcon1} alt="" />
                            </div>
                            <div className="counter-info">
                                <h1>10<span>K+</span></h1>
                                <p>Test Completed</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Counter