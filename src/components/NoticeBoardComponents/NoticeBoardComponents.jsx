import React from 'react';
import { Media,Image } from 'react-bootstrap';

import { FaRegClock } from "react-icons/fa";

import './NoticeBoardComponents.css'

const NoticeBoardComponents = () => {
    return (
        <>
            <ul className="notice-board list-unstyled">
                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>

                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span  className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>

                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span  className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>
                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span  className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>
                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span  className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>
                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span  className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>
                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span  className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>
                <Media as="li">
                    <Image
                    width={30}
                    height={30}
                    className="mr-3"
                    src={require('../../assets/user/user1.jpg')}
                    rounded 
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                       <h6 className="m-b-5">My User</h6>
                        <p className="text-muted">Your notifications goes here</p>
                        <p className="text-muted"><span  className="mr-2"><FaRegClock></FaRegClock></span>12 hours ago</p>
                    </Media.Body>
                </Media>
            </ul>
        </>
    )
}

export default NoticeBoardComponents
