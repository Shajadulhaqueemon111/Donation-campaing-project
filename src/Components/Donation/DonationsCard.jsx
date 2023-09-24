import React from 'react';

const DonationsCard = ({ donation, backgroundColor }) => {
  const { id, name, image, donation_name } = donation;

  const cardStyle = {
    backgroundColor: backgroundColor || '#ffffff', // Default to white if no background color is provided
  };

  return (
    <div className={`max-w-xs rounded-lg overflow-hidden shadow-lg m-4 ${backgroundColor}`} style={cardStyle}>
      <div className="relative">
        <img src={image} className="w-full h-36 object-cover" alt={name} />
      </div>
      <div className="p-4">
        <p className="bg-cyan-200">{name}</p>
        <p className="text-sm font-normal text-gray-700">{donation_name}</p>
        
      </div>
    </div>
  );
};

export default DonationsCard;
