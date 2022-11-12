import { Container } from 'reactstrap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./Testimonial.css"
import Testifier1 from "../../assets/images/testifier-1.png";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            testifierImg: Testifier1,
            testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium eos perferendis incidunt omnis est minus dolore voluptate veritatis temporibus officia necessitatibus facere ea architecto numquam, optio deleniti vitae maxime!`,
            testifierName: "Harry Jacobs",
            testifierDesc: "Prostrate cancer survivor, Author of Silver Lining"
        },
        {
            id: 2,
            testifierImg: Testifier1,
            testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium eos perferendis incidunt omnis est minus dolore voluptate veritatis temporibus officia necessitatibus facere ea architecto numquam, optio deleniti vitae maxime!`,
            testifierName: "Harry Jacobs",
            testifierDesc: "Prostrate cancer survivor, Author of Silver Lining"
        },
        {
            id: 3,
            testifierImg: Testifier1,
            testimony: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium eos perferendis incidunt omnis est minus dolore voluptate veritatis temporibus officia necessitatibus facere ea architecto numquam, optio deleniti vitae maxime!`,
            testifierName: "Harry Jacobs",
            testifierDesc: "Prostrate cancer survivor, Author of Silver Lining"
        }
    ]

    return (
        <>
            <Container className="testimonials section">
                <Splide className="testimonial" options={{
                    rewind: true,
                    pagination: false,
                    autoplay: true,
                    type: "loop",
                    pauseOnHover: true,
                }}
                    aria-label="My Favorite Images">
                    {testimonials.map(testify => {
                        return (
                            <SplideSlide className="testimony" key={testify.id}>
                                <div className="testifier-img">
                                    <img src={testify.testifierImg} alt="" />
                                </div>
                                <div className="testifier-info">
                                    <div className="testimonial-title text-uppercase">
                                        <h4>Real People, Real Stories</h4>
                                    </div>
                                    <div className="testimony-text">
                                        <p>{testify.testimony}</p>
                                    </div>

                                    <div className="testifier">
                                        <h5>{testify.testifierName}</h5>
                                        <p>{testify.testifierDesc}</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        )
                    }
                    )}
                </Splide>
            </Container>
        </>
    )
}

export default Testimonial;