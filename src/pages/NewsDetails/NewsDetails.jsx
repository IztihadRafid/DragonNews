import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from "../shared/RightSideNav/RightSideNav"
import { useParams } from 'react-router-dom';
import Navbar from "../shared/Navbar/Navbar"
const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <div className='grid grid-cols-4'>
            <div className='col-span-3'>
        <h1>News Details</h1>
        <p>{id}</p>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default NewsDetails;