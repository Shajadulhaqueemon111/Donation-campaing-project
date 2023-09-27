import { PieChart } from '@mui/x-charts';
import React from 'react';

const Statistics = () => {
  
  const totalDonations = 12;
  const yourDonations = 4;


  const yourDonationsPercentage = (yourDonations / totalDonations) * 100;
  const othersDonationsPercentage = ((totalDonations - yourDonations) / totalDonations) * 100;


  const data = [
    {   label: 'Your Donation ', value: yourDonationsPercentage },
    {    label: ' Total Donation' ,value: othersDonationsPercentage },

  ];
  


  const getArcLabel = (item) => `${item.value.toFixed(2)}%`;

  return (
    <div className='text'>

        
      <PieChart
        series={[
          {
            outerRadius: 100,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          '& .MuiTypography-root': {
            fill: 'white',
            fontSize: 10,
          },
        }}
        width={500}
        height={500}
      />
   
    </div>
  );
};

export default Statistics;
