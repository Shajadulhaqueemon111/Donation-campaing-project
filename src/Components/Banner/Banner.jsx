import React from 'react';
import './Banner.css';
import DonationsCard from '../Donation/DonationsCard';

const Banner = ({data,donations}) => {

    const dataValue=data.toLowerCase()
   const Filter=donations.filter((item)=> item.category.toLowerCase().includes(dataValue))
   console.log(Filter)
    return (
        <div>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
               Filter?.map(donation=><DonationsCard donation={donation}></DonationsCard>)
            }
        </div>
        </div>
    );
};

export default Banner;