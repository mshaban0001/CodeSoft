import React from 'react';
import { GiAbstract079 } from 'react-icons/gi';

const Experience = () => {
  const EducationData = [
    {
      icon: <GiAbstract079 />,
      year: 'Feb 2022 - August 2022',
      position: 'InternShip',
      CompanyName: 'Gamica Cloud',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: 'Oct 2022 - April 2023',
      position: 'Internship',
      CompanyName: 'Teknovation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: 'May 2023 - Nov 2023',
      position: 'Junior Web Application Front-End Developer',
      CompanyName: 'TeknoVation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: 'Nov 2023 - Present',
      position: 'Front-end Developer',
      CompanyName: 'Freelancer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
  ];
  return (
    <>
      <div className='pt-12' id='experience'>
        <h1 className='text-3xl font-extrabold text-[#3e64ff]'>Experience</h1>
      </div>
      <div className='flex w-full flex-col pb-8'>
        {EducationData.map((data, index) => (
          <div
            key={index}
            className='flex items-center pt-8 justify-start pb-8 border-b-2'>
            <div className='text-3xl bg-[#3e64ff] rounded-full px-3 py-3 flex justify-start items-start text-white relative top-[-2.5rem]'>
              {data.icon}
            </div>
            <div className='ml-4'>
              <div className='text-xl text-[#3e64ff] font-semibold pb-1'>
                {data.year}
              </div>
              <div className='text-3xl font-bold pb-3'>{data.position}</div>
              <div className='text-base font-bold pb-3'>{data.CompanyName}</div>
              <div className='text-sm font-bold text-[#999999]'>
                {data.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
