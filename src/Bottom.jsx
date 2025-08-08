import React from 'react';

const Bottom = () => {
  return (
    <div className='lg:hidden block mx-2 my-5'>
      <h2 className='text-xl font-bold mb-2'>Mobiles & Tablets</h2>
      <div className='grid grid-cols-2 gap-4'>
        {/* Product Card 1 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-a26-5g-black-128gb-8gb-ram-Front-bAck-view.webp' alt='Samsung Galaxy A26' />
          <p className='text-xs mt-2'>Samsung Galaxy A26 5G (Awesome Black 128 GB) (8GB RAM)</p>
        </div>
        {/* Product Card 2 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/Samsung-Galaxy-A36-5G-Awesome-Blaack-Main.webp' alt='Samsung Galaxy A36' />
          <p className='text-xs mt-2'>Samsung Galaxy A36 5G (Awesome Black, 256 GB) (12 GB RAM)</p>
        </div>
        {/* Product Card 3 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/POCO_C61_DIAMOND_DUST_BLACK.webp' alt='POCO C61' />
          <p className='text-xs mt-2'>POCO C61 (Diamond Dust Black, 64 GB) (4 GB RAM)</p>
        </div>
        {/* Product Card 4 */}
        <div className='border border-gray-400 p-2 h-60 rounded-sm'>
          <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/vivo-v50e-5g-sapphire-blue-128gb-8gb-ram-Front-Back-view.webp' alt='Vivo V50e 5G' />
          <p className='text-xs mt-2'>vivo V50e 5G (Sapphire Blue, 128 GB) (8 GB RAM)</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
