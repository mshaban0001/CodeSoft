import React from 'react';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import Awards from './awards';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Resume = () => {
  const [activeLink, setActiveLink] = useState('');
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className='w-full flex justify-center h-auto ' id='resume'>
      <div className='w-[90vw] max-w-6xl relative  flex  justify-center items-start  '>
        <div className='h-60 w-1/4 sticky top-36 flex flex-col gap-3 pt-12 text-lg font-bold'>
          <Link
            className={`cursor-pointer ${
              activeLink === 'education' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleClick('education')}
            to='education'
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}>
            Education
          </Link>
          <Link
            className={`cursor-pointer ${
              activeLink === 'experience' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleClick('experience')}
            to='experience'
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}>
            Experience
          </Link>
          <Link
            className={`cursor-pointer ${
              activeLink === 'skills' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleClick('skills')}
            to='skills'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Skills
          </Link>
          <Link
            className={`cursor-pointer ${
              activeLink === 'awards' ? 'text-blue-500' : ''
            }`}
            onClick={() => handleClick('awards')}
            to='awards'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Awards
          </Link>
        </div>
        <div className=' h-full w-3/4 pt-12'>
          <Education />
          <Experience />
          <Skills />
          <Awards />
        </div>
      </div>
    </div>
  );
};

export default Resume;
