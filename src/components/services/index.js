import React from 'react';
import { FiSlack } from 'react-icons/fi';
import { FaFlaskVial } from 'react-icons/fa6';
import { FaConnectdevelop } from 'react-icons/fa6';
import { IoLogoAppleAr } from 'react-icons/io5';
import { IoCardSharp } from 'react-icons/io5';
import { MdProductionQuantityLimits } from 'react-icons/md';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      icon: <FiSlack />,
      Descrip:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      title: 'Phtography',
      icon: <FaFlaskVial />,
      Descrip:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      title: 'Web Developer',
      icon: <FaConnectdevelop />,
      Descrip:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      title: 'App Developing',
      icon: <IoLogoAppleAr />,
      Descrip:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      title: 'Branding',
      icon: <IoCardSharp />,
      Descrip:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      title: 'Product Strategy',
      icon: <MdProductionQuantityLimits />,
      Descrip:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
  ];
  return (
    <>
      <div className='w-full h-auto  flex flex-col items-center' id='services'>
        <h1 className='text-6xl font-extrabold mt-52'>Services</h1>
        <p className='text-xl font-semibold text-[#999999] pt-8'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>

        <div className='grid grid-cols-3 gap-8 mt-20 pb-4  '>
          {services.map((skill, index) => (
            <div className='p-2 flex  ' key={index}>
              <div className='w-[36.25rem] h-[18.5rem] hover:bg-[#3e64ff]   bg-white shadow-left-right-bottom rounded-md flex justify-center pt-6'>
                <div className='flex flex-col justify-start items-center'>
                  <div className='text-6xl text-[#3e64ff] '>{skill.icon}</div>
                  <p className='text-sm font-medium pt-6 border-b-2 border-[#3e64ff] pb-2'>
                    {skill.title}
                  </p>
                  <span className='text-center text-lg pt-12 px-8 font-normal text-[#999999]'>
                    {skill.Descrip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
