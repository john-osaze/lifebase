import { Container, Row, Col, Button } from 'reactstrap';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServiceIcon1 from "./assets/images/service-icon-1.png";
import ServiceIcon2 from "./assets/images/service-icon-2.png";
import ServiceIcon3 from "./assets/images/service-icon-3.png";
import ServiceIcon4 from "./assets/images/service-icon-4.png";
import About from './components/About/About';
import HowItWorks from './components/How-It-Works/HowItWorks';
import WhyChooseUs from './components/Why-Choose-Us/WhyChooseUs';
import { Fragment } from 'react';
import Testimonial from './components/Testimonial/Testimonial';
import Team from './components/Team/Team';
import Trustee1 from "./assets/images/trustee-1.png";
import Trustee2 from "./assets/images/trustee-2.png";
import Trustee3 from "./assets/images/trustee-3.png";
import Trustee4 from "./assets/images/trustee-4.png";
import Footer from "./components/Footer/Footer";

// import {Routes} from 'react-router-dom'

function App() {
	const allSections = document.querySelectorAll("section");
	const sectionInView = () => {
		for (let x = 0; x < allSections.length; x++) {
			let section = document.getElementById("section" + (x + 1));
			let menulink = document.getElementById("link" + (x + 1));
			let getSection = section.getBoundingClientRect();
	
			// Set sections as active
			if (getSection.top <= 10 && getSection.bottom >= 10) {
				section.classList.add("active-class");
				menulink.classList.add("active");
			} else {
				section.classList.remove("active-class");
				menulink.classList.remove("active");
			}
		}
	};
	document.addEventListener("scroll", sectionInView);

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

	const privateDataGrid = [
		{
			icon: ServiceIcon1,
			title: "HIPAA compliant",
			text: "We follow the highest standard set by the law"
		},

		{
			icon: ServiceIcon2,
			title: "HIPAA compliant",
			text: "We follow the highest standard set by the law"
		},

		{
			icon: ServiceIcon3,
			title: "HIPAA compliant",
			text: "We follow the highest standard set by the law"
		},

		{
			icon: ServiceIcon4,
			title: "HIPAA compliant",
			text: "We follow the highest standard set by the law"
		}
	]

	return (
		<Fragment>
			<Header />
			<Hero />
			<Container className="sponsors section">
				<div className="title text-center">
					We are trusted by the best
				</div>
				<Row className='justify-content-center align-items-center'>
					<Col lg="3" md="4" sm="6">
						<img src={Trustee1} alt="" />
					</Col>
					<Col lg="3" md="4" sm="6">
						<img src={Trustee2} alt="" />
					</Col>
					<Col lg="3" md="4" sm="6">
						<img src={Trustee3} alt="" />
					</Col>
					<Col lg="3" md="4" sm="6">
						<img src={Trustee4} alt="" />
					</Col>
				</Row>
			</Container>
			<About />
			<Container className='section'>
				<section className="medical-showcase">
					<h1 className='text-center heading'>Your Medical Data <br /> as it should be</h1>

					<Container className="showcase-grid justify-content-center">
						<Row className=" align-items-center">
							{
								gridItems.map((item, index) => <Col key={index} lg="4" md="6" sm="12" className='text-center'>
									<img src={item.img} alt="" />
									<h5>{item.title}</h5>
									<p>{item.text}</p>
								</Col>)
							}
						</Row>
					</Container>
				</section>
			</Container>
			<WhyChooseUs />
			<HowItWorks />
			<Team />
			<Container className='section data-privacy'>
				<div className="title-area text-center">
					<h1 className="title">Your private data stays private</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusantium, et quasi, dignissimos aliquam consequatur natus labore animi ipsam expedita nihil. Consequuntur enim quisquam labore rerum sapiente sunt facere in.</p>
				</div>
				<Row className='privacy-terms' >
					{
						privateDataGrid.map((item, index) => <Col lg="6" md="6" sm="12" key={index} className="d-flex align-items-center justify-content-center privacy-item">
							<div className="icon">
								<img src={item.icon} alt="" width={"50px"} height={"50px"} />
							</div>
							<div className="info">
								<h4>{item.title}</h4>
								<p>{item.text}</p>
							</div>
						</Col>)
					}
				</Row>
				<div className="text-center">
					<Button color='primary'>Learn More</Button>
				</div>
			</Container>
			<Testimonial />
			<Footer />
		</Fragment>
	);
}

export default App;
