import React from 'react';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { SiAltiumdesigner } from 'react-icons/si';
import { FaDollarSign } from 'react-icons/fa6';

const Services = () => {
  const servicesData = [
    {
      imageUrl: '/images/contentImg.jpg',
      title: 'User Experience',
      icon: <IoMegaphoneOutline className='text-white text-3xl' />,
    },
    {
      imageUrl: '/images/business.jpg',
      title: 'Creative Design',
      icon: <SiAltiumdesigner className='text-white text-3xl' />,
    },
    {
      imageUrl: '/images/contentImg2.jpg',
      title: 'Retina Ready',
      icon: <FaDollarSign className='text-white text-3xl' />,
    },
  ];

  const ServiceDetails = ({ imageUrl, title, icon }) => (
    <div className='w-80 h-80 bg-yellow-200 relative'>
      <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
      <div className='relative   bg-slate-100 w-3/4 top-[-2rem] left-20'>
        <div className='flex items-center'>
          <div className='relative left-[-1.75rem] flex justify-center items-center w-16 h-16 bg-gradient-to-r from-orange-300 to-pink-500 rounded-full'>
            {icon}
          </div>
          <h1 className='text-xl font-semibold ml-2'>{title}</h1>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        className='w-full h-[30rem] bg-cover bg-yellow-200'
        style={{
          backgroundImage: 'url(/images/footerbgImg.avif)',
          backgroundSize: '100% 100% ',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className='w-full h-28  flex justify-start items-center'>
          <h1 className='uppercase text-3xl font-bold relative left-80'>
            Our Services
          </h1>
        </div>
        <div className='flex gap-40 justify-center items-center'>
          {servicesData.map((serviceDetails, index) => (
            <ServiceDetails key={index} {...serviceDetails} />
          ))}
        </div>
        {/* <div className='w-full h-full flex justify-center items-start gap-40 pt-8'>
          <div
            className='w-80 h-80 bg-cover bg-yellow-200 flex justify-end items-end '
            style={{
              backgroundImage: 'url(/images/contentImg.jpg)',
              backgroundSize: '100% 100% ',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className='w-3/4 h-16 bg-slate-100 relative top-6 flex justify-center items-center'>
              <div className='flex justify-center relative left-[-3rem]  items-center w-16 h-16 bg-gradient-to-r from-orange-300 to-pink-500 rounded-full'>
                <IoMegaphoneOutline className='text-white text-3xl' />
              </div>
              <h1 className=' text-xl font-semibold'>User Experience</h1>
            </div>
          </div>
          <div
            className='w-80 h-80 bg-cover bg-yellow-200 flex justify-end items-end '
            style={{
              backgroundImage: 'url(/images/business.jpg)',
              backgroundSize: '100% 100% ',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className='w-3/4 h-16 bg-slate-100 relative top-6 flex justify-center items-center'>
              <div className='flex justify-center relative left-[-3rem]  items-center w-16 h-16 bg-gradient-to-r from-orange-300 to-pink-500 rounded-full'>
                <SiAltiumdesigner className='text-white text-3xl' />
              </div>
              <h1 className=' text-xl font-semibold'>Creative Design</h1>
            </div>
          </div>
          <div
            className='w-80 h-80 bg-cover bg-yellow-200 flex justify-end items-end'
            style={{
              backgroundImage: 'url(/images/contentImg2.jpg)',
              backgroundSize: '100% 100% ',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className='w-3/4 h-16 bg-slate-100 relative top-6 flex justify-center items-center'>
              <div className='flex justify-center relative left-[-3.5rem]  items-center w-16 h-16 bg-gradient-to-r from-orange-300 to-pink-500 rounded-full'>
                <FaDollarSign className='text-white text-3xl' />
              </div>
              <h1 className=' text-xl font-semibold'>Retina Ready</h1>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Services;
