import React, { useState, useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  useAccordionToggle,
  AccordionContext,
  Button,
  Image,
} from "react-bootstrap";
import './Sidebar.css';
import * as FaIcons from 'react-icons/fa';
import plant from '../../assets/plant.svg'


function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    <button
      type="button"
      variant="link"
      className="menu__item px-2 py-2 border-0"
      style={{ backgroundColor: isCurrentEventKey ? "#9eafdd" : "white" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Sidebar = () => {
  return (
    <Fragment>
    {/* <img src={plant}></img> */}
      <nav id="sidebar">
        <a className="sidebar--header" href="#">
          <div className="siderbar-header__logo">
            <img className="sidebar--logo__icon" src={plant} />
          </div>
          <div className="siderbar--logo_title">
            <h3>MedicBase</h3>
          </div>
        </a>

        <ul className="sidebar--menu">
          <li className="sidebar--menu-child">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0">
                <NavLink to="./"><span><FaIcons.FaHome></FaIcons.FaHome></span>Dashboard</NavLink>
              </ContextAwareToggle>
            </Accordion>
          </li>
          <li className="sidebar--menu-child">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0">
                <NavLink to="./histories"><span><FaIcons.FaClipboardList/></span>Histories</NavLink>
              </ContextAwareToggle>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaClinicMedical/></span>Appointments</ContextAwareToggle>
              <Accordion.Collapse eventKey="0">
                <ul className="sidebar__submenu">
                  <li>
                    <NavLink to="./view-appoinment">View Appoinment</NavLink>
                  </li>
                  <li>
                    <NavLink to="./book-appoinment">Book Appoinment</NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaHospitalUser/></span>Medical Report</ContextAwareToggle>

              <Accordion.Collapse eventKey="0">
                <ul className="sidebar__submenu">
                  <li>
                    <NavLink to="./add-report">Add Report</NavLink>
                  </li>
                  <li>
                    <NavLink to="./doctors-comment">Doctor's comment</NavLink>
                  </li>
                  <li>
                    <NavLink to="./doctors-comment">My comment</NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaMedkit/></span>Prescription</ContextAwareToggle>

              <Accordion.Collapse eventKey="0">
                <ul className="sidebar__submenu">
                  <li>
                    <NavLink to="./add-prescription">Add Prescription</NavLink>
                  </li>
                  <li>
                    <NavLink to="./view-prescriptions">View Prescriptions</NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaQuestionCircle/> </span>Complaints</ContextAwareToggle>

              <Accordion.Collapse eventKey="0">
                    <ul className="sidebar__submenu">
                      <li>
                        <NavLink to="./file-complain">
                          File a complain
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="./probation-period">
                          Probation Period
                        </NavLink>
                      </li>
                    </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
