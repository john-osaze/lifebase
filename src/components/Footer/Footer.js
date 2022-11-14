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
                            <Row className="container justify-content-between">
                                <Col md="3" className="home-footer-wrap">
                                    <div className="home-footer-brand-wrap">
                                        <a href="/" aria-current="page" className="home-footer-logo-link w-inline-block w--current">
                                            <h2>Lifebase.</h2>
                                        </a>

                                        <div className="footer-info-wrap">
                                            <div className="paragraph-small inline">
                                                <a href="mailto:hello@picnichealth.com?subject=Hello%20Picnichealth">hello@picnichealth.com</a>
                                                <span className="semibold"><br /></span>
                                                <a href="tel:(415)801-0572">(415) 801-0572</a>
                                                <span className="semibold"><br /></span>
                                            </div>

                                            <div className="paragraph-small">
                                                <span className="semibold">HQ&nbsp; Address:<br />
                                                </span>850 Folsom St, San Francisco, CA 94107
                                            </div>

                                            <div className="paragraph-small">
                                                <span className="semibold">Address for Medical Records:</span><br />350 Frank H Ogawa Plaza 7th Fl, Ste 700 Oakland, CA 94612
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
                                    <a href="/careers" className="home-footer-nav-link">Careers
                                        <span className="home-footer-nav-link-callout"> - We're growing!</span>
                                    </a>
                                    <a href="/blog" className="home-footer-nav-link">Blog</a>
                                </Col>

                                <Col className="home-footer-nav-list">
                                    <div className="home-footer-nav-title">Support</div>
                                    <a href="https://help.picnichealth.com/" className="home-footer-nav-link">FAQs</a>
                                    <a href="/privacy-policy" className="home-footer-nav-link">Privacy Policy</a>
                                    <a href="/terms-of-use" className="home-footer-nav-link">Terms of Use</a>
                                    <a href="/contact" className="home-footer-nav-link">Contact</a>
                                </Col>


                                <Col className="login-social-wrap d-flex">
                                    <a href="https://app.picnichealth.com/login">
                                        <Button color='primary'>Login</Button>
                                    </a>
                                    <div className="home-footer-social-links">
                                        <a href="https://facebook.com/picnichealth" className="lp-footer-social-link w-inline-block">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                        <a href="https://twitter.com/PicnicHealth" className="lp-footer-social-link w-inline-block">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/picnichealth/" className="lp-footer-social-link w-inline-block">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </div>
                                </Col>
                            </Row>

                            <div className="copyright-wrap text-center">
                                <p className="home-footer-copyright-copy mb-0">
                                    <strong>©</strong>
                                    <strong className="copyright-year">2022</strong>
                                    <strong> PicnicHealth,</strong> Established 2014
                                </p>
                            </div>
                        </Container>
                    </Container>
                </footer>
            </>
        )
    }
}
