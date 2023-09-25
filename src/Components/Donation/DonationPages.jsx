// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import DonationsCard from './DonationsCard';
// import PageCard from './PageCard';

// const DonationPages = () => {
   
//     const [donation,setDonations]=useState()
//     const {id}=useParams()
//     console.log(id)
//     const donations=useLoaderData()
//     console.log(DonationsCard)

//     useEffect(()=>{

//         const findCategory=donations?.find(donation=>PaymentMethodChangeEvent.id===id)
//         console.log(findCategory)
//         setDonations(findCategory)
//     },[id,donations])
//     return (
//         <div>
//        <PageCard donation={donation}></PageCard>
//         </div>
//     );
// };

// export default DonationPages;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationsCard from './DonationsCard';
import PageCard from './PageCard';


const DonationPages = () => {
  const { id } = useParams();
  
console.log('id:', id);

  const donationsData = useLoaderData();

  
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(() => {
   
    const foundDonation = donationsData.find((donation) => donation.id === id);

    if (foundDonation) {
      setSelectedDonation(foundDonation);
    }
  }, [id, donationsData]);

  return (
    <div>
   
      {selectedDonation ? (
        <PageCard donation={selectedDonation} />
      ) : (
        <p>Donation not found</p>
      )}
     
    </div>
  );
};

export default DonationPages;
