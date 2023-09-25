import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../../Pages/Home/Home';
import Donation from '../Donation/Donation';
import Statistics from '../Statistics/Statistics';
import ErrorPage from '../ErrorPage/ErrorPage';
import DonationPages from '../Donation/DonationPages';

const myCreateRouter =createBrowserRouter([
{
    path:'/',
    element:<MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,

            loader:()=>fetch('/donation.json')
            
        },
        {
            path:'/donation',
            element:<Donation></Donation>
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'/pages/:id',
            element:<DonationPages></DonationPages>,
            loader:()=>fetch('/donation.json')
        },
    ]
}


])

export default myCreateRouter;