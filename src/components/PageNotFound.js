import React, {useContext, useEffect} from 'react';
import { StateContext } from '../App';
import {NavLink, useNavigate} from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/404')
    },[])
    const {isLoggedIn} = useContext(StateContext);
    return (
        <div>
            <h1>ERROR</h1>
            <h2>PAGE NOT FOUND</h2>

            {isLoggedIn?
                <NavLink to='/home'>Home</NavLink>
            : 
                <NavLink to='/'>Home</NavLink>
            }
        </div>
    )
}
export default PageNotFound;