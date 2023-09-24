import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../../Pages/Home/Home';
import Donation from '../Donation/Donation';
import Statistics from '../Statistics/Statistics';

const myCreateRouter =createBrowserRouter([
{
    path:'/',
    element:<MainLayOut></MainLayOut>,
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
    ]
}


])

export default myCreateRouter;