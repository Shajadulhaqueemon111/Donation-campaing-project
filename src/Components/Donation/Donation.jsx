import React, { useEffect, useState } from 'react';
import DonationPagers from '../DonationAdd/DonationPagers';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setShow] = useState(false);
   

    useEffect(() => {
        const categoryItem = JSON.parse(localStorage.getItem('donation'));

        if (categoryItem) {
            setDonations(categoryItem);

           
           
        } else {
            setNoFound(true);
        }
    }, []);

    const handleRemove = () => {
        localStorage.clear();
        setDonations([]);
        setNoFound("No Data Found");
       
    };

    return (
        <div>
            {noFound ? (
                <p className='text-center mx-auto font-bold text-3xl'>No Donation</p>
            ) : (
                <div>
                    {donations.length > 0 && (
                        <button onClick={handleRemove} className='px-5 text-white bg-green-500 block mx-auto'></button>
                    )}
                   
                  
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center'>
                        {isShow ? donations.map((donation) => (
                            <DonationPagers key={donation.id} donation={donation} />
                        )) : donations.slice(0, 4).map((donation) => (
                            <DonationPagers  key={donation.id} donation={donation} />
                        ))}
                       
                    </div>
                    <button onClick={() => setShow(!isShow)} className='text-white px-5 items-center justify-center bg-green-500 block mx-auto my-4'>
                        {isShow ? 'Show Less' : 'Show All'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Donation;
