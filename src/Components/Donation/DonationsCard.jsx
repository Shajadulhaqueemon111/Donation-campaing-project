import React from 'react';
import { Link } from 'react-router-dom';

const DonationsCard = ({ donation }) => {
  const {
    id,
    category,
    image,
    title,
    category_bg,
    card_bg,
    text_color,
    button_bg,
    description,
    price,
  } = donation;

  const cardStyle = {
    backgroundColor: card_bg || '#ffffff',
  };
  const categoryTitleStyle={
    color: text_color || '0052FF',
  }

  const categoryStyle = {
    backgroundColor: category_bg || '#0052FF33',
    color: text_color || '0052FF',
  };

  const buttonStyle = {
    backgroundColor: button_bg || '#0052FF',
    color: text_color || '#0052FF',
  };

  return (
   
    <div className={`max-w-xs rounded-lg overflow-hidden shadow-lg m-4`} style={cardStyle}>
       <Link to={`/pages/${id}`}>
      <div className="relative">
        <img src={image} className="w-full h-36 object-cover" alt={title} />
      </div>
      <div className="p-4">

       

       <button style={buttonStyle}>
          {category}
        </button>
        <p style={categoryTitleStyle} className="text-sm font-normal text-gray-700">{title}</p>
       
       
       
      </div>
      </Link>
    </div>
  );
};

export default DonationsCard;
