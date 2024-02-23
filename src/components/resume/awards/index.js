import React from 'react';
import { GiAbstract079 } from 'react-icons/gi';

const Awards = () => {
  const EducationData = [
    {
      icon: <GiAbstract079 />,
      year: '2012 - 2014',
      position: 'top position in school',
      CompanyName: 'GOVT High School',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: '2015 - 2017',
      position: 'HTML CSS competition Winner in class',
      CompanyName: 'GOVT Higher Secondary School ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: '2017 - 2021',
      position: ' Developer Award',
      CompanyName: 'The University Of Faisalabad',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
  ];
  return (
    <>
      <div id='awards'>
        <h1 className='text-3xl font-extrabold text-[#3e64ff]'>Awards</h1>
      </div>
      <div className='flex w-full flex-col pb-20'>
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

export default Awards;
