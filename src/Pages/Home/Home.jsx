import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
// import Donation from '../../Components/Donation/Donation';
import DonationsCart from '../../Components/Donation/DonationsCart';

const Home = () => {
    const donations=useLoaderData()
    return (
        <div>
            <Banner />

            <DonationsCart donations={donations}></DonationsCart >
            
        </div>
    );
};

export default Home;