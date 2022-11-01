import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { StateContext } from '../App';
import Header from '../components/Header/Header';
import Prescriptions from '../components/Prescriptions';
import Sidebar from '../components/Sidebar/Sidebar';
import '../Css/Home.css';
import Dashboard from './Dashboard/Dashboard';

function Home_Page() {
    const { mediData, isLoggedIn } = useContext(StateContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLoggedIn) {
            // navigate('/')
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
                            <Route path='/' exact element={<Dashboard/>} />
                        </Routes>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home_Page
