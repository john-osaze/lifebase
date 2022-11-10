import "./Header.css";
import { useRef, useEffect } from 'react';
import { Container, Button } from 'reactstrap';

const navLinks = [
    {
        linkText: "Home",
        url: "#home"
    },

    {
        linkText: "About",
        url: "#about"
    },

    {
        linkText: "Research",
        url: "#research"
    },

    {
        linkText: "Contact",
        url: "#contact"
    }
]

const Header = (args) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("header-active")
            } else {
                headerRef.current.classList.remove("header-active")
            }
        })

        return () => {
            window.removeEventListener("scroll", this);
        }

    }, [])

    const menuToggle = () => {
        menuRef.current.classList.toggle("menu-active")
    }

    return (
        <>
            <header className="header container-fluid" ref={headerRef}>
                <Container>
                    <div className="nav-wrapper">
                        <div className="logo">
                            <h2>Medic.</h2>
                        </div>


                        <nav className="nav-menu" ref={menuRef}>
                            <ul className="nav-list">
                                {
                                    navLinks.map((item, index) => <li className="nav-item" key={index}>
                                        <a href={item.url}>{item.linkText}</a>
                                    </li>)
                                }
                                <span className="mobile-menu close" onClick={menuToggle}><i className="ri-close-line"></i></span>
                                <div className="social-icons">
                                    <i className="ri-facebook-fill"></i>
                                    <i className="ri-instagram-line"></i>
                                    <i className="ri-twitter-fill"></i>
                                    <i className="ri-linkedin-fill"></i>
                                    <i className="ri-google-fill"></i>
                                </div>
                            </ul>
                        </nav>


                        <div className="nav-btns">
                            <Button color="primary" outline className="btn-secondary">Log In</Button>
                            <Button color="primary">Sign Up</Button>
                            <span className="mobile-menu open" onClick={menuToggle}><i className="ri-menu-3-line"></i></span>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;