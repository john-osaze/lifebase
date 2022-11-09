import React, { useState } from 'react'
import { Button, Form, Modal, Col, Row, Breadcrumb } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

import './AppointmentModal.css';

const AppointmentModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id="content-view-appointment">
            <div className="container-fluid">
                <section className="block-header">
                    <div className="row">
                        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                            <Breadcrumb className="breadcrumb-style">
                                <Breadcrumb.Item>Appointments</Breadcrumb.Item>
                                <Breadcrumb.Item><FaHome></FaHome></Breadcrumb.Item>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item active href="#">Book Appointment</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </section><div className="vaccinate-appointment-create--modal">
                    <Button variant="primary" className="addNew-btn" onClick={handleShow}>
                        Add New
                    </Button>

                    <Modal
                        className="vaccinate-appointment-create-modal--content"
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">Appointment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="patientName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="date">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="date" placeholder="Date" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="phone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" placeholder="Phone" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="doctorName">
                                        <Form.Label>Doctor Name</Form.Label>
                                        <Form.Control type="text" placeholder="Doctor Name" />
                                    </Form.Group>

                                    {/* <Form.Group as={Col} controlId="vaccine">
                                        <Form.Label>Vaccine</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Oxford</option>
                                        </Form.Control>
                                    </Form.Group> */}
                                </Form.Row>
                                <fieldset>
                                    <Form.Group>

                                        <Form.Check
                                            type="radio"
                                            inline
                                            label="Male"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            inline
                                            label="Female"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        {/* <Form.Check
                                            type="radio"
                                            inline
                                            label="Third"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        /> */}

                                    </Form.Group>
                                </fieldset>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="close-btn" variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className="submit-btn" variant="primary" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>

    )
}

export default AppointmentModal
