import React from 'react';
import Swal from 'sweetalert2';

const PageCard = ({ donation }) => {
  const { id, description, price, image } = donation || {};

  const handelAddToDonation = () => {
      const addedFavoritesArray = [];
      const favoritesItems = JSON.parse(localStorage.getItem('donation')) || [];

      if (!favoritesItems.length) {
          addedFavoritesArray.push(donation);
          localStorage.setItem('donation', JSON.stringify(addedFavoritesArray));
          Swal.fire(
              'Product added successfully!',
              'You clicked the button!',
              'success'
          );
      } else {
          const isExist = favoritesItems.find(donation => donation.id === id);

          if (!isExist) {
              addedFavoritesArray.push(...favoritesItems, donation);
              localStorage.setItem('donation', JSON.stringify(addedFavoritesArray));
              Swal.fire(
                  'Product added successfully!',
                  'You clicked the button!',
                  'success'
              );
          } else {
              Swal.fire(
                  'No duplicate!',
                  'You clicked the button!',
                  'error'
              );
          }
      }
  }

  return (
    <div className='flex justify-center items-center'>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
            alt="Donation"
          />
        </div>
        <div   style={{
              position: 'relative',
              width:'355px',
              height:'80px',
              top: '-80px',
              left: '15px',
              padding:'10px',
              backgroundColor: 'rgba(11, 11, 11, 0.50)',
            }}     className="p-6 pt-0 train bg-slate-400" >
          <button
            onClick={handelAddToDonation}
            className="rounded-md p-2 text-white bg-red-500"
          
          >
            Donate ${price}
          </button>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Good Education
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"></p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageCard;
