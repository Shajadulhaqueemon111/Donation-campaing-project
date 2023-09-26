import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationsCard from './DonationsCard';
import PageCard from './PageCard';

const DonationPages = () => {
   
    const [donation,setDonations]=useState()
    const {id}=useParams()
    console.log(id)
    const donations=useLoaderData()
    console.log(DonationsCard)

    useEffect(()=>{

        const findCategory=donations?.find(donation=>donation.id===id)
        console.log(findCategory)
        setDonations(findCategory)
    },[id,donations])
    return (
        <div>
       <PageCard donation={donation}></PageCard>
        </div>
    );
};

export default DonationPages;
