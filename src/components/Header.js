import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaPhoneVolume,
} from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { LuMailOpen } from 'react-icons/lu';

const Header = () => {
  const icons = [
    {
      icon: <FaTwitter className='text-white hover:bg-blue-500' />,
      hoverColor: 'bg-blue-500',
    },
    {
      icon: <BsInstagram className='text-white hover:bg-pink-500' />,
      hoverColor: 'bg-pink-500',
    },
    {
      icon: <FaFacebookF className='text-white hover:bg-indigo-500' />,
      hoverColor: 'bg-indigo-500',
    },
    {
      icon: <AiOutlineYoutube className='text-white hover:bg-red-500' />,
      hoverColor: 'bg-red-500',
    },
    {
      icon: <FaPinterestP className='text-white hover:bg-purple-500' />,
      hoverColor: 'bg-purple-500',
    },
    {
      icon: <FaLinkedinIn className='text-white hover:bg-green-500' />,
      hoverColor: 'bg-green-500',
    },
    {
      icon: <FaPhoneVolume className='text-white hover:bg-yellow-500 ' />,
      hoverColor: 'bg-yellow-500',
    },
  ];

  return (
    <div className='w-full h-16 bg-gradient-to-r from-orange-300 to-pink-500 flex'>
      <div className='w-1/3 h-full flex justify-end items-center'>
        <div className='w-3/5 h-full flex justify-center items-center'>
          {icons.map((item, index) => (
            <span
              key={index}
              className={`text-white border-l border-r border-white  hover:${item.hoverColor} transition-all duration-300 px-4 h-full flex justify-center items-center  cursor-pointer`}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
      <div className='w-1/3 h-full flex items-center  justify-center '>
        <div className='flex justify-center items-center border-r border-white px-4 '>
          <FaPhoneVolume className='text-white' />
          <span className='text-white'>+12-256-5826</span>
        </div>
        <div className='flex justify-center items-center px-4  gap-2'>
          <LuMailOpen className='text-white ' />
          <span className='text-white'>Demolandingpage@gmail.com</span>
        </div>
      </div>
      <div className='w-1/3 flex justify-center py-3 '>
        <button className='flex justify-center items-center border-2 px-4 py-2 rounded-full text-white font-medium hover:bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-500'>
          Request Consult
        </button>
      </div>
    </div>
  );
};

export default Header;
