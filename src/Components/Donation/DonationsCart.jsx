


import React from 'react';
import DonationsCard from './DonationsCard';

const DonationsCart = ({donations}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
                donations?.map(donation=><DonationsCard donation={donation}></DonationsCard>)
            }
        </div>
    );
};

export default DonationsCart;
