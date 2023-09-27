// import { PieChart } from '@mui/x-charts';
// import React from 'react';

// const Statistics = () => {
  
//   const totalDonations = 12;
//   const yourDonations = 4;


//   const yourDonationsPercentage = (yourDonations / totalDonations) * 100;
//   const othersDonationsPercentage = ((totalDonations - yourDonations) / totalDonations) * 100;


//   const data = [
//     {   label: 'Your Donation ', value: yourDonationsPercentage },
//     {    label: ' Total Donation' ,value: othersDonationsPercentage },

//   ];
  


//   const getArcLabel = (item) => `${item.value.toFixed(2)}%`;

//   return (
//     <div className='text'>

        
//       <PieChart
//         series={[
//           {
//             outerRadius: 100,
//             data,
//             arcLabel: getArcLabel,
//           },
//         ]}
//         sx={{
//           '& .MuiTypography-root': {
//             fill: 'white',
//             fontSize: 10,
//           },
//         }}
//         width={500}
//         height={500}
//       />
   
//     </div>
//   );
// };

// export default Statistics;
import { useState, useEffect } from 'react';
import Chart from './Chart';


const Statistics = () => {
  const [getCard, setGetCard] = useState([]);


  useEffect(() => {
      const getCardItems = JSON.parse(localStorage.getItem("donation"));
      setGetCard(getCardItems);
  }, []);
  console.log(getCard)

  if (getCard === null) {
      return (
          <h1 className="text-center mt-56 text-2xl font-bold">Yet You Have not Donate in Any Category</h1>
      )
  }
  else {
      return (
          <div className="flex justify-center">
              <Chart getCard={getCard}></Chart>
          </div>
      );
  }
   

    
};

export default Statistics;
