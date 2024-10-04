import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import BrakingNews from './BrakingNews';
import Navbar from './Navbar';

const Home = () => {
    return (

       
        <div>
             <Helmet>
                <title>The Daily News | Home</title>
            </Helmet>
            <Header/>
            <BrakingNews/>
            <Navbar/>
        </div>
    );
};

export default Home;