import { Container } from "reactstrap";
import TeamMember1 from "../../assets/images/team-member-1.jpg"
const Team = () => {
    const teamMembers = [
        {
            img: TeamMember1,
            name: "John Osaze",
            title: "Cardiologist"
        },
        {
            img: TeamMember1,
            name: "John Osaze",
            title: "Cardiologist"
        },
        {
            img: TeamMember1,
            name: "John Osaze",
            title: "Cardiologist"
        },
        {
            img: TeamMember1,
            name: "John Osaze",
            title: "Cardiologist"
        }
    ]

  return (
    <>
        <Container>
            <div className="team">
                {teamMembers.map((element, index) => <div className="team-member" key={index}>
                    <img src={element.img} alt="" />
                    <h1 className="member-name">{element.name}</h1>
                    <p className="member-title">{element.title}</p>
                </div>)}
            </div>
        </Container>
    </>
  )
}

export default Team;