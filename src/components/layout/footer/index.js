import React from 'react';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <div className='w-full h-[42.5rem] bg-black flex flex-col justify-center items-center'>
        <div className='w-[90vw] max-w-6xl h-3/4 flex '>
          <div className='w-1/4 '>
            <h1 className='pt-28 text-2xl font-bold text-white'>About</h1>
            <p className=' text-[#ffffffb3] w-5/6 text-lg pt-8'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className='flex pt-16 gap-6 '>
              <TfiTwitterAlt className='w-14 h-14 cursor-pointer rounded-full px-4 py-2 bg-[#ffffff1a] text-[#999999]' />
              <ImFacebook className='w-14 h-14 cursor-pointer rounded-full px-4 py-2 bg-[#ffffff1a] text-[#999999]' />
              <FaInstagram className='w-14 h-14 cursor-pointer rounded-full px-4 py-2 bg-[#ffffff1a] text-[#999999]' />
            </div>
          </div>
          <div className='w-1/4 '>
            <h1 className='pt-28 text-2xl font-bold text-white'>Links</h1>
            <div>
              <ul className='text-[#999999] text-lg font-semibold pt-8 flex flex-col gap-4 arrow-list'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className='w-1/4 '>
            <h1 className='pt-28 text-2xl font-bold text-white'>Services</h1>
            <div>
              <ul className='text-[#999999] text-lg font-semibold pt-8 flex flex-col gap-4 arrow-list'>
                <li>Web Design</li>
                <li>Web Develoment</li>
                <li>Business Strategy</li>
                <li>Data Analysis</li>
                <li>Graphic Design</li>
              </ul>
            </div>
          </div>
          <div className='w-1/4 '>
            <h1 className='pt-28 text-2xl font-bold text-white'>
              Have a Question?
            </h1>
            <div>
              <ul className='text-[#999999] text-lg font-semibold pt-8 flex flex-col gap-8'>
                <div className='flex justify-center items-start gap-12'>
                  <MdLocationOn className='w-12 h-12 text-white' />
                  <p className='pt-2'>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
                <div className='flex justify-start items-start gap-12'>
                  <FaPhone className='w-7 h-7 text-white pt-2 relative left-[-2px]' />
                  <p>+92 306 1021204</p>
                </div>
                <div className='flex justify-start items-start gap-12'>
                  <MdEmail className='w-8 h-8 text-white pt-2' />
                  <p>shaban056056@gmail.com</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-[90vw] max-w-6xl h-1/4 flex justify-center text-xl pt-8'>
          <p className='text-[#999999]'>
            Copyright ©2024 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
