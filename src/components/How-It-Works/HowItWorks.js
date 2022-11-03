import { Container, Row, Col } from 'reactstrap';
import ServiceIcon1 from "../../assets/images/service-icon-1.png";
import ServiceIcon2 from "../../assets/images/service-icon-2.png";
import ServiceIcon3 from "../../assets/images/service-icon-3.png";
import "./HowItWorks.css"

const HowItWorks = () => {
    const gridItems = [
		{
			img: ServiceIcon1,
			title: "Complete",
			text: "All your records in one place guaranteed"
		},

		{
			img: ServiceIcon2,
			title: "Complete",
			text: "All your records in one place guaranteed"
		},

		{
			img: ServiceIcon3,
			title: "Complete",
			text: "All your records in one place guaranteed"
		},
	];

  return (
    <>
        <Container className='section'>
				<section className="medical-showcase how-it-works">
					<h1 className='text-center heading'>How It Works</h1>

					<Container className="showcase-grid justify-content-center">
						<Row className=" align-items-center">
							{
								gridItems.map((item, index) => <Col key={index} lg="4" md="6" sm="12" className='text-center'>
								<img src={item.img} alt=""/>
								<h5>{item.title}</h5>
								<p>{item.text}</p>
							</Col>)
							}
						</Row>
					</Container>
				</section>
			</Container>

    </>
  )
}

export default HowItWorks;