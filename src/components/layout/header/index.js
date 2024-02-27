import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center items-center h-20 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
        <div className='w-[90vw] xl:w-[90vw] lg:w-[90vw] md:w-full md:p-8 max-w-6xl xl:max-w-6xl lg:max-w-6xl md:max-w-6xl h-full   flex justify-start items-center gap-[22rem] xl:gap-[22rem] lg:gap-60 md:gap-36 '>
          <div className='text-3xl font-extrabold'>
            <span className='text-white bg-[#3e64ff] rounded-full  px-3 py-0'>
              S
            </span>
            <span className='relative left-[-10px]'>haban</span>
          </div>
          <div className=' flex gap-16 xl:gap-16  lg:gap-10 md:gap-8 text-black font-normal justify-center items-center'>
            <Link
              to='hero'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer relative text-lg inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3e64ff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
              Home
            </Link>

            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer relative text-lg inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3e64ff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
              About
            </Link>
            <Link
              to='resume'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="cursor-pointer relative text-lg inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3e64ff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
              Resume
            </Link>
            <Link
              to='services'
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
              className="cursor-pointer relative text-lg inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3e64ff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
              Services
            </Link>
            <Link
              to='projects'
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className="cursor-pointer relative text-lg inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3e64ff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
              Projects
            </Link>

            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer relative text-lg inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3e64ff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
