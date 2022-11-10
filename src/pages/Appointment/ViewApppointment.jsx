import React,{useState} from 'react'
import { Fragment } from 'react'

import { FaHome,FaSearch } from "react-icons/fa";
import { Breadcrumb, Button, Card, FormControl, InputGroup,Pagination } from "react-bootstrap";

import './ViewAppointment.css';

import FrontLinerUserTable from './../../components/AppointmentsComponents/FrontLinerUserTable/FrontLinerUserTable';
// import VaccinateUserTable from './../../components/AppointmentsComponents/VaccinateUserTable/VaccinateUserTable';

const ViewAppointment = () => {
    return (
        <Fragment>
            <div id="content-view-appointment">
                <div className="container-fluid">
                    <section className="block-header">
                        <div className="row">
                            <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                                <Breadcrumb className="breadcrumb-style">
                                <Breadcrumb.Item>Appointments</Breadcrumb.Item>
                                <Breadcrumb.Item><FaHome></FaHome></Breadcrumb.Item>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item active href="#">View Appointments</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </section>
                    <section className="section--front-liner-appointment">
                        <div className="row">
                            <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                                <Card className="card-style">
                                    <Card.Header>
                                    FontLiner View Appointment
                                    </Card.Header>
                                    <Card.Body>
                                    <FrontLinerUserTable/>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </section>
                    <section className="section--vaccinated-appointment">
                        <div className="row">
                            <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                                <Card className="vaccinate-appointment__card card-style">
                                    <Card.Header>
                                    Vaccinated Appointment List
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="vaccinate-appointment__content">
                                            <div className="vaccinated-appointment--header">
                                                <div className="row">
                                                    <div className="offset-md-3 col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                        <div className="vaccinate-appointment--search">
                                                            <InputGroup className="mb-3">
                                                                <FormControl
                                                                placeholder="Search"
                                                                aria-label="Search"
                                                                aria-describedby="basic-addon2"
                                                                />
                                                                <InputGroup.Append>
                                                                <Button variant="outline-secondary" className="search-btn"><FaSearch></FaSearch></Button>
                                                                </InputGroup.Append>
                                                            </InputGroup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="vaccinate-appointment--list">
                                                <VaccinateUserTable/>
                                            </div> */}
                                            <div className="vaccinate-appointment--pagination float-right">
                                            <Pagination>
                                                <Pagination.First />
                                                <Pagination.Prev />
                                                <Pagination.Item>{1}</Pagination.Item>
                                                <Pagination.Ellipsis />

                                                <Pagination.Item>{10}</Pagination.Item>
                                                <Pagination.Item>{11}</Pagination.Item>
                                                <Pagination.Item active>{12}</Pagination.Item>
                                                <Pagination.Item>{13}</Pagination.Item>
                                                <Pagination.Item disabled>{14}</Pagination.Item>

                                                <Pagination.Ellipsis />
                                                <Pagination.Item>{20}</Pagination.Item>
                                                <Pagination.Next />
                                                <Pagination.Last />
                                            </Pagination>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
        </Fragment>
    )
}

export default ViewAppointment
