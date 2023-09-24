import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Donation from '../../Components/Donation/Donation';

const Home = () => {
    const donations=useLoaderData()
    return (
        <div>
            <Banner />
            <Donation donations={donations}></Donation>
        </div>
    );
};

export default Home;