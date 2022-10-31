import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../App';
import Prescriptions from '../components/Prescriptions';

function Home_Page() {
    const {mediData, isLoggedIn} = useContext(StateContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if (!isLoggedIn) {
            navigate('/')
        }
    },[isLoggedIn])
    return (
        <>
           <div className="">
                <Prescriptions mediData = {mediData} />
            </div>
        </>
    )
}

export default Home_Page
