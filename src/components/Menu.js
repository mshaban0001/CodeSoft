import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const Menu = () => {
  const menuItems = [
    'Name',
    'Blog',
    'Page',
    'Services',
    'Testimonials',
    'Contact',
    'Buy Now',
  ];

  return (
    <div className='w-full h-20  flex'>
      <div className='w-1/3  flex justify-center items-center gap-2'>
        <img
          className='w-14 h-14 relative left-[6.5rem]'
          src='/images/landing-page.png'
          alt='landingpage logo'
        />
        <h1 className='text-3xl font-bold relative left-[6.5rem]'>
          Landing Page
        </h1>
      </div>
      <div className='w-2/3 h-full  flex '>
        <div className='flex h-full items-center font-semibold cursor-pointer relative left-16 text-lg'>
          {/* Map through the menuItems array */}
          {menuItems.map((item, index) => (
            <span
              key={index}
              className='hover:bg-orange-200 p-6 transition-all duration-500'>
              {item}
            </span>
          ))}
        </div>
        <div className='h-full bg-black relative left-56 w-10 flex justify-center items-center'>
          <IoSearchSharp className='text-white text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Menu;
