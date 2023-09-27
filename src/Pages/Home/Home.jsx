import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
// import Donation from '../../Components/Donation/Donation';
import DonationsCart from '../../Components/Donation/DonationsCart';

const Home = () => {

    const [data, setData]=useState('null')
    const handelSubmit=(e)=>{
         e.preventDefault()
           setData(e.target.name.value)
    }
    console.log(data)
    const donations = useLoaderData()
    return (
        <div>
            <div className='body'>

                <div className="content">
                    <p className='text-3xl font-bold mb-7 '>I Grow By Helping People In Need</p>
                    <div className="search-container">
                          
                        <form onSubmit={handelSubmit}>

                            <input type="text" name='name' placeholder="Enter your text" className="text-input" />
                            <input  type='submit' className=" px-5 py-3 rounded-lg border-0 bg-red-500 " value='search'/>

                        </form>
                    </div>
                </div>
            </div>
            

       <div>
      {
        (data==='null')? <DonationsCart donations={donations}></DonationsCart >:<Banner data={data} donations={donations}></Banner>
      }
       </div>

        </div>
    );
};

export default Home;