import { Col, Container, Row } from "reactstrap";
import TeamMember1 from "../../assets/images/team-member-1.jpg";
import "./Team.css";


const Team = () => {
    const teamMembers = [
        {
            img: TeamMember1,
            name: "John Osaze",
            title: "Cardiologist"
        },
        {
            img: TeamMember1,
            name: "Ekhator Erhun",
            title: "Cardiologist"
        },
        {
            img: TeamMember1,
            name: "Ehis Godswill",
            title: "Cardiologist"
        }
    ]

    return (
        <>
            <Container className="section">
            <h1 className='text-center heading'>Meet The Team</h1>
                <Row className="team">
                    {teamMembers.map((element, index) => <Col lg="4" md="6" sm="12" className="team-member text-center" key={index}>
                        <div className="member-img">
                            <img src={element.img} alt="" />
                        </div>
                        <h1 className="member-name">{element.name}</h1>
                        <p className="member-title">{element.title}</p>
                    </Col>)}
                </Row>
            </Container>
        </>
    )
}

export default Team;