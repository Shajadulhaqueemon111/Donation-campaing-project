
// import React, { useEffect, useState } from 'react';

// import PageCard from './PageCard';
// import Donation from './Donation';

// const Donations = () => {
//     const [donations, setDonations] = useState([]);
//     const [noFound, setNoFound] = useState(false);

//     useEffect(() => {
//         const categoryItem = JSON.parse(localStorage.getItem('donation')) ;
//         console.log('categoryItem:', categoryItem);
    
//         if (categoryItem) {
//             setDonations(categoryItem);
//         } else {
//             setNoFound("not found");
//         }
//     }, []);
    

//     return (
//         <div>
            
//              {noFound?<p>{noFound}</p> :<div>
                
                
//                 </div>}
//                 <div>
//                     {
//                         donations.map(donation=><PageCard key={donation.id} donation={donation}> </PageCard>)
//                     }
//                 </div>
              
//         </div>
//     );
// };

// export default Donations;


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
