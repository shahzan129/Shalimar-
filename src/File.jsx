import React from 'react';
import { FaHeart } from "react-icons/fa";
import { IoMdCart, IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiAlignJustify } from "react-icons/fi";
import SimpleSlider from './SimpleSlider';
import AutoPlay from './AutoPlay';
import Bottom from './Bottom';

const File = () => {
  return (
    <div className='bg-white'>
      <div className='sticky top-0 z-50'>
        {/* Header */}
        <div className='h-20 w-full bg-blue-500 flex justify-around items-center'>
          {/* Mobile Menu Icon */}
          <div className='lg:hidden block text-white'>
            <FiAlignJustify size={24} />
          </div>

          {/* Logo */}
          <div className='h-10 w-32'>
            <img src='https://logos.textgiraffe.com/logos/logo-name/Shalimar-designstyle-smoothie-m.png' alt='Shalimar Logo' className='h-full w-full object-contain' />
          </div>

          {/* Desktop Search */}
          <div className='lg:block hidden w-1/3'>
            <div className='relative'>
              <input
                className='bg-white w-full h-10 rounded-full border-none pl-4 pr-10'
                type='text'
                placeholder='Search for Products, Brands'
              />
              <IoIosSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500' size={20} />
            </div>
          </div>

          {/* Wishlist */}
          <div className='flex items-center text-white'>
            <div className='lg:block hidden mr-4'>
              Wishlist
              <div className='flex gap-2 items-center'>
                <span>0 items</span>
                <FaHeart />
              </div>
            </div>
            <div className='lg:hidden block'>
              <FaHeart size={24} />
            </div>
          </div>

          {/* Cart */}
          <div className='flex items-center text-white'>
            <div className='lg:block hidden mr-4'>
              <span>0 Items</span>
              <div className='flex gap-2 items-center'>
                <span>₹ 0</span>
                <IoMdCart />
              </div>
            </div>
            <div className='lg:hidden block'>
              <IoMdCart size={24} />
            </div>
          </div>

          {/* Account */}
          <div className='flex items-center text-white'>
            <div className='lg:block hidden'>
              My Account
              <div className='flex gap-2 items-center'>
                <span>Sign In</span>
                <CgProfile />
              </div>
            </div>
            <div className='lg:hidden block'>
              <CgProfile size={24} />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='lg:block hidden bg-white shadow-sm'>
          <div className='flex justify-evenly py-3 font-semibold text-gray-700'>
            <div>Books & More</div>
            <div>Mobiles & Tablets</div>
            <div>Tv's & Electronics</div>
            <div>Laptop & Accessories</div>
            <div>Computer & Peripherals</div>
            <div>Smart Technology</div>
            <div>Mobile Accessories</div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className='lg:hidden block bg-red-500 w-full h-10 flex items-center justify-center sticky top-20 z-40'>
        <div className='relative w-11/12'>
          <input
            className='bg-white w-full rounded-xl h-8 pl-4 pr-10'
            type='text'
            placeholder='Search for Product, Brands'
          />
          <IoIosSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500' size={20} />
        </div>
      </div>

      {/* Hero Section */}
      <div>
        <SimpleSlider />
      </div>

      {/* Brands Section */}
      <div className='flex gap-3 overflow-x-auto p-4 bg-white'>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/One-Plus.png" alt="OnePlus" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/xiaomi_6ErGXLc.png" alt="Xiaomi" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/portronics.png" alt="Portronics" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/Oppo.png" alt="Oppo" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/boat.png" alt="Boat" />
        </div>
        <div className='p-2 min-w-[70px]'>
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/jbl.png" alt="JBL" />
        </div>
        <div className='p-2 min-w-[70px]'>
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/motorola.png" alt="Motorola" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/fire-bolt.png" alt="Fire-Bolt" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/Redme.png" alt="Redmi" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/xiaomi.png" alt="Xiaomi" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/lava.png" alt="Lava" />
        </div>
        <div className="rounded-full border border-gray-400 p-2 min-w-[70px]">
          <img src="https://crazzyhub.s3.amazonaws.com/media/brand/image/lenovo.png" alt="Lenovo" />
        </div>
      </div>

      {/* Portion-1: Mobiles & Tablets */}
      <div className='my-5'>
        {/* Desktop View */}
        <div className='lg:flex hidden'>
          <div className='w-1/4'>
            <img src='https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80_1.jpg' alt='Mobile and Tablets banner' className='w-full h-full object-cover' />
          </div>
          <div className='w-3/4 bg-gray-100 p-4'>
            <h2 className='text-2xl font-bold mb-4'>Mobiles & Tablets</h2>
            <div className='flex gap-4 overflow-x-auto'>
              {/* Product Card 1 */}
              <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
                <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-a26-5g-black-128gb-8gb-ram-Front-bAck-view.webp' alt='Samsung Galaxy A26' />
                <p className='text-sm mt-2'>Samsung Galaxy A26 5G (Awesome Black 128 GB) (8GB RAM)</p>
                <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
                <div className='font-bold mt-1'>₹22999</div>
              </div>
              {/* Product Card 2 */}
              <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
                <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/Samsung-Galaxy-A36-5G-Awesome-Blaack-Main.webp' alt='Samsung Galaxy A36' />
                <p className='text-sm mt-2'>Samsung Galaxy A36 5G (Awesome Black, 256 GB) (12 GB RAM)</p>
                <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
                <div className='font-bold mt-1'>₹38999</div>
              </div>
              {/* Product Card 3 */}
              <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
                <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/POCO_C61_DIAMOND_DUST_BLACK.webp' alt='POCO C61' />
                <p className='text-sm mt-2'>POCO C61 (Diamond Dust Black, 64 GB) (4 GB RAM)</p>
                <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
                <div className='font-bold mt-1'>₹5799</div>
              </div>
              {/* Product Card 4 */}
              <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
                <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/vivo-v50e-5g-sapphire-blue-128gb-8gb-ram-Front-Back-view.webp' alt='Vivo V50e 5G' />
                <p className='text-sm mt-2'>vivo V50e 5G (Sapphire Blue, 128 GB) (8 GB RAM)</p>
                <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
                <div className='font-bold mt-1'>₹27999</div>
              </div>
              {/* Product Card 5 */}
              <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
                <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/vivo-y400-pro-5g-freestyle-white-256gb-8gb-ram-Front-Back-View.webp' alt='VIVO Y400 Pro 5G' />
                <p className='text-sm mt-2'>VIVO Y400 Pro 5G (Freestyle White, 128 GB) (8 GB RAM)</p>
                <div className='text-green-700 font-semibold text-xs mt-1'>In Stock</div>
                <div className='font-bold mt-1'>₹24999</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className='lg:hidden block mx-2 my-5'>
          <h2 className='text-xl font-bold mb-2'>Mobiles & Tablets</h2>
          <div className='grid grid-cols-2 gap-4'>
            <div className='border border-gray-400 p-2 h-60 rounded-sm'>
              <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-a26-5g-black-128gb-8gb-ram-Front-bAck-view.webp' alt='Samsung Galaxy A26' />
              <p className='text-xs mt-2'>Samsung Galaxy A26 5G (Awesome Black 128 GB) (8GB RAM)</p>
            </div>
            <div className='border border-gray-400 p-2 h-60 rounded-sm'>
              <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/Samsung-Galaxy-A36-5G-Awesome-Blaack-Main.webp' alt='Samsung Galaxy A36' />
              <p className='text-xs mt-2'>Samsung Galaxy A36 5G (Awesome Black, 256 GB) (12 GB RAM)</p>
            </div>
            <div className='border border-gray-400 p-2 h-60 rounded-sm'>
              <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/POCO_C61_DIAMOND_DUST_BLACK.webp' alt='POCO C61' />
              <p className='text-xs mt-2'>POCO C61 (Diamond Dust Black, 64 GB) (4 GB RAM)</p>
            </div>
            <div className='border border-gray-400 p-2 h-60 rounded-sm'>
              <img className='w-24 h-24 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/vivo-v50e-5g-sapphire-blue-128gb-8gb-ram-Front-Back-view.webp' alt='Vivo V50e 5G' />
              <p className='text-xs mt-2'>vivo V50e 5G (Sapphire Blue, 128 GB) (8 GB RAM)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className='my-5'>
        <img src='https://crazzyhub.s3.amazonaws.com/media/banner/Banner_-_iPhone_16_pro.webp' alt='iPhone 16 Pro banner' className='w-full' />
      </div>

      {/* Portion-2: TVs & Electronics */}
      <div className='lg:flex hidden my-5'>
        <div className='w-3/4 bg-gray-100 p-4'>
          <h2 className='text-2xl font-bold mb-4'>Tv's & Electronics</h2>
          <div className='flex gap-4 overflow-x-auto'>
            {/* Product Card 1 */}
            <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
              <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T174342.jpg' alt='Mi Q1 TV' />
              <p className='text-sm mt-2'>Mi Q1 138.8 cm (55 inch) QLED Ultra HD (4K) Smart Android TV...</p>
            </div>
            {/* Product Card 2 */}
            <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
              <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T175538.jpg' alt='Mi 5X TV' />
              <p className='text-sm mt-2'>Mi 5X 138.8 cm (55 inch) Ultra HD (4K) LED Smart Android TV...</p>
            </div>
            {/* Product Card 3 */}
            <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
              <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-21T190331.jpg' alt='Mi 4C TV' />
              <p className='text-sm mt-2'>Mi 4C 80 cm (32 inch) HD Ready LED Smart Android TV...</p>
            </div>
            {/* Product Card 4 */}
            <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
              <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-22T095858.jpg' alt='LG UQ7500 TV' />
              <p className='text-sm mt-2'>LG UQ7500 108 cm (43 inch) Ultra HD (4K) LED Smart WebOS TV...</p>
            </div>
            {/* Product Card 5 */}
            <div className='border border-gray-300 p-2 rounded-sm min-w-[200px]'>
              <img className='w-40 h-40 object-contain mx-auto' src='https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_-_2023-03-22T100826.jpg' alt='LG OLED TV' />
              <p className='text-sm mt-2'>LG 121 cm (48 inch) OLED Ultra HD (4K) Smart WebOS TV...</p>
            </div>
          </div>
        </div>
        <div className='w-1/4'>
          <img src='https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80_1.jpg' alt='TVs and Electronics banner' className='w-full h-full object-cover' />
        </div>
      </div>

      
      <Bottom />
    </div>
  );
};

export default File;
