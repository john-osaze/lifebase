import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { StateContext } from '../App';
import Header from '../components/Header/Header';
import Prescriptions from '../components/Prescriptions';
import Sidebar from '../components/Sidebar/Sidebar';
import '../Css/Home.css';
import ViewAppointment from './Appointment/ViewApppointment';
import AppointmentModal from '../components/AppointmentsComponents/AppoinmentModal/AppointmentModal';
import Dashboard from './Dashboard/Dashboard';

function Home_Page() {
    const { mediData, isLoggedIn } = useContext(StateContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])
    return (
        <>
            <div className="wrapper">
                <aside className="side-panel">
                    <Sidebar/>
                </aside>
                <main className="main-panel">
                    <Header/>
                    <div className="container-fluid">
                        <Routes>
                            <Route path='/book-appointment' element={<AppointmentModal />} />
                            <Route path='/view-appointment' element={<ViewAppointment/>} />
                            {/* <Route path='/view-appointment' element={<Docto/>} /> */}
                            <Route path='/*' exact element={<Dashboard/>} />
                        </Routes>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home_Page
