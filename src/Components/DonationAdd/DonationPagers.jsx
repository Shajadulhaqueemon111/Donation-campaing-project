import React from 'react';

const DonationPagers = ({donation}) => {
    // const { id, description, price, image } = donation || {};

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
        <div className='flex justify-center md:mx-10 items-center my-7 text-center'>
        <div className="relative flex w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"  style={cardStyle}>
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src={image}
              className="h-full w-full object-cover"
              alt="Donation"
            />
          </div>
          <div style={categoryStyle}>
            <h2>{category}</h2>
          </div>
          <div>
            <h2 style={categoryTitleStyle}>{title}</h2>
          </div>
          <div style={categoryStyle}>
            <p> ${price}</p>
          </div>
          <div  className="p-6">

            <button style={buttonStyle}
             
              className="rounded-md p-2 text-white"
            
            >
                vew details
              
            </button>
            
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                
              </p>
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"></p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
         
            </p>
          </div>
        </div>
      </div>
    );
    
};

export default DonationPagers;