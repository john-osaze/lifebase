import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ServiceIcon1 from "../../assets/images/service-icon-1.png";
import ServiceIcon2 from "../../assets/images/service-icon-2.png";
import ServiceIcon3 from "../../assets/images/service-icon-3.png";
import ServiceIcon4 from "../../assets/images/service-icon-4.png";
import WhyChooseUsImg from "../../assets/images/why-choose-us.png"
import "./WhyChooseUs.css"

const WhyChooseUs = () => {
    const gridItems = [
		{
			img: ServiceIcon1,
			title: "Complete",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam incidunt nemo reiciendis placeat"
		},

		{
			img: ServiceIcon2,
			title: "Complete",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam incidunt nemo reiciendis placeat"
		},

		{
			img: ServiceIcon3,
			title: "Complete",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam incidunt nemo reiciendis placeat"
		},

        {
			img: ServiceIcon4,
			title: "Complete",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam incidunt nemo reiciendis placeat"
		},
	];

  return (
    <>
        <Container className='section why-choose-us'>
            <Row className='justify-content-between align-items-center'>
                <Col lg="8" md="6" sm="12" className='info-side'>
                    <h1 className="title">Why Choose Us</h1>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam incidunt nemo reiciendis placeat similique nostrum assumenda, culpa quidem harum quaerat laborum magni, quis earum!</p>

                    <Container className='reasons'>
                        <Row className='reasons-inner'>
                            {
                                gridItems.map((item, index) => <Col md="6" key={index} className="single-reason">
                                <div>
                                <div className="img-area">
                                <img src={item.img} alt="" />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                                </div>
                            </Col>)
                            }
                        </Row>
                    </Container>
                </Col>
                <Col lg="4" md="6" sm="12" className='img-side'>
                    <img src={WhyChooseUsImg} alt="" width={"100%"}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default WhyChooseUs;