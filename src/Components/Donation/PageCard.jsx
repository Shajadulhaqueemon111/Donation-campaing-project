import React from 'react';
import Swal from 'sweetalert2';

const PageCard = ({ donation }) => {
  const { id, description, price, image } = donation || {};

  const handelAddToDonation = () => {
    const addedDonationArray=[]
    const categoryItem = JSON.parse(localStorage.getItem('donation')) || [];
    console.log(donation);

    if (!categoryItem) {
      categoryItem.push(donation);
      localStorage.setItem('donation', JSON.stringify(addedDonationArray));

      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'You clicked the button!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Donation already added!',
      });
    }
  };

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
        <div className="p-6 pt-0 train">
          <button
            onClick={handelAddToDonation}
            className="rounded-md p-2 text-white"
            type="button"
            style={{
              position: 'relative',
              top: '-90px',
              left: '10px',
              backgroundColor: 'rgba(255, 0, 0, 0.7)',
            }}
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
