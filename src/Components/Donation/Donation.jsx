import React from 'react';
import DonationsCard from './DonationsCard';

const Donation = ({donations}) => {
    return (
        <div className='grid grid-col-1 lg:grid-cols-4 gap-3 py-7'>
            {
                donations?.map(donation=><DonationsCard key={donation.id} donation={donation}></DonationsCard>)
            }
        </div>
    );
};

export default Donation;