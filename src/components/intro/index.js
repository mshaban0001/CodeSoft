import React from 'react';

import { FaArrowDownLong } from 'react-icons/fa6';
import { Link, animateScroll as scroll } from 'react-scroll';

const Intro = () => {
  const scrollToAbout = () => {
    scroll.scrollTo('about', {
      smooth: true,
      offset: 70, // Adjust this value as needed
      duration: 500, // Adjust the duration of the scroll animation as needed
    });
  };
  return (
    <div className='w-full flex justify-center items-center h-[100vh] '>
      <div className='w-2/4 h-full bg-[#f0f2f5]'></div>
      <div className='w-2/4 h-full flex items-center flex-col justify-center '>
        <h1 className='text-2xl font-extrabold relative left-[-29.75rem] xl:left-[-29.75rem] lg:left-[-15rem] uppercase tracking-widest text-[#3e64ff] '>
          Hey ! I Am
        </h1>
        <h1 className='text-5xl xl:text-5xl lg:text-4xl font-extrabold relative left-[-29rem] xl:left-[-29rem] lg:left-[-15rem] top-4  tracking-wide '>
          Muhammad Shaban
        </h1>
        <h1 className='text-3xl xl:text-3xl lg:text-xl font-extrabold relative left-[-29rem] xl:left-[-29rem] lg:left-[-15rem] top-8  tracking-wide '>
          I'm a{' '}
          <span className='text-[#3e64ff]'>
            Front-end Web Application Developer
          </span>
        </h1>
        <div class='relative left-[-29.85rem] xl:left-[-29.85rem] lg:left-[-16.5rem] top-40'>
          <div class='w-20 h-20 bg-[#f0f2f5] transform rotate-45'></div>
          <div className='w-12 h-12 bg-[#f0f2f5] relative top-[-5rem]'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}>
              <FaArrowDownLong
                onClick={scrollToAbout}
                className='animate-bounce w-4 h-8 cursor-pointer text-[#3e64ff] relative left-10 top-6'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
