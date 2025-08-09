import React from 'react';

const Bottom = () => {
  return (
    <div className='lg:hidden block mx-2 my-5'>
      <h2 className='text-xl font-bold mb-2 bg-gray-200 h-10'>Tv's & Electronics</h2>
      <div className='grid grid-cols-2 gap-4'>
        {/* Product Card 1 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T174342.jpg' alt='Samsung Galaxy A26' />
          <p className='text-xs mt-2'>Mi Q1 138.8 cm (55 inch) QLED Ultra HD (4K) Smart Android TV...</p>
          <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
              <div className='font-bold mt-1'>₹22999</div>
        </div>
        {/* Product Card 2 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T175538.jpg' alt='Samsung Galaxy A36' />
          <p className='text-xs mt-2'>Mi 5X 138.8 cm (55 inch) Ultra HD (4K) LED Smart Android TV...</p>
          <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
              <div className='font-bold mt-1'>₹44999</div>
        </div>
        {/* Product Card 3 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T190331.jpg' alt='POCO C61' />
          <p className='text-xs mt-2'>Mi 4C 80 cm (32 inch) HD Ready LED Smart Android TV...</p>
          <div className='text-red-700 font-semibold text-xs mt-1'>out Stock</div>
              <div className='font-bold mt-1'>₹</div>
        </div>
        {/* Product Card 4 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-22T095858.jpg' alt='Vivo V50e 5G' />
          <p className='text-xs mt-2'>LG UQ7500 108 cm (43 inch) Ultra HD (4K) LED Smart WebOS TV...</p>
          <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
              <div className='font-bold mt-1'>₹30490</div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
