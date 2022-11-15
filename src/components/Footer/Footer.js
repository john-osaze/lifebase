import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import "./Footer.css"
import Newsletter from './Newsletter/Newsletter'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <Newsletter />
                    <Container fluid className="footer-container">
                        <Container>
                            <Row className="container justify-content-between footer-row">
                                <Col lg="4" className="home-footer-wrap">
                                    <div className="home-footer-brand-wrap">
                                        <a href="/" aria-current="page" className="home-footer-logo-link w-inline-block w--current">
                                            <h2>Lifebase.</h2>
                                        </a>

                                        <div className="footer-info-wrap">
                                            <div className="paragraph-small inline contact-info">
                                                <a href="mailto:hello@lifebase.com?subject=Hello%20Lifebase">hello@lifebase.com</a>
                                            <a href="tel:(415)801-0572">+(234) 3421-801-0572</a>
                                            </div>

                                            <div className="paragraph-small">
                                                <span className="semibold">HQ&nbsp; Address:<br />
                                                </span>59, ICE Road, Innovation Hub, B/C.
                                            </div>

                                            <div className="paragraph-small">
                                                <span className="semibold">Address for Medical Records:</span><br />350b Uyi Technical Plaza 7th Fl, Ste 700 <br />Benin City, Edo State.
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col className="home-footer-nav-list">
                                    <div className="home-footer-nav-title">Research</div>
                                    <a href="/research-studies" className="home-footer-nav-link">Find a Study</a>
                                    <a href="/research" className="home-footer-nav-link">For Patients</a>
                                    <a href="/research-platform" className="home-footer-nav-link">For Life Sciences</a>
                                    <a href="/how-it-works" className="home-footer-nav-link">How it Works</a>
                                    <a href="/data-ownership" className="home-footer-nav-link">Data Ownership</a>
                                    <a href="/how-to-join" className="home-footer-nav-link">How to Join</a>
                                </Col>

                                <Col className="home-footer-nav-list">
                                    <div className="home-footer-nav-title">Company</div>
                                    <a href="/" aria-current="page" className="home-footer-nav-link w--current">Home</a>
                                    <a href="/about-us" className="home-footer-nav-link">About</a>
                                    <a href="/careers" className="home-footer-nav-link">Careers</a>
                                    <a href="/blog" className="home-footer-nav-link">Blog</a>
                                </Col>

                                <Col className="home-footer-nav-list">
                                    <div className="home-footer-nav-title">Support</div>
                                    <a href="/help" className="home-footer-nav-link">FAQs</a>
                                    <a href="/privacy-policy" className="home-footer-nav-link">Privacy Policy</a>
                                    <a href="/terms-of-use" className="home-footer-nav-link">Terms of Use</a>
                                    <a href="/contact" className="home-footer-nav-link">Contact</a>
                                </Col>


                                <Col className="login-social-wrap d-flex">
                                    <a href="/login" className="d-block">
                                        <Button color='primary'>Login</Button>
                                    </a>
                                    <div className="home-footer-social-links">
                                        <a href="https://facebook.com" className="lp-footer-social-link w-inline-block">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                        <a href="https://twitter.com" className="lp-footer-social-link w-inline-block">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/" className="lp-footer-social-link w-inline-block">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </div>
                                </Col>
                            </Row>

                            <div className="copyright-wrap text-center">
                                <p className="home-footer-copyright-copy mb-0">
                                    <strong>©</strong>
                                    <strong className="copyright-year">2022</strong>
                                    <strong> Lifebase,</strong> Established 2021.
                                </p>
                            </div>
                        </Container>
                    </Container>
                </footer>
            </>
        )
    }
}
