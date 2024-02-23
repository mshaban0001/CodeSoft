import React from 'react';
import { GiAbstract079 } from 'react-icons/gi';

const Education = () => {
  const EducationData = [
    {
      icon: <GiAbstract079 />,
      year: '2012 - 2014',
      degreeName: 'Matric with Science',
      universityName: 'GOVT High School',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: '2015 - 2017',
      degreeName: 'ICS with Physics',
      universityName: 'GOVT Higher Secondry School',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: '2017 - 2021',
      degreeName: 'Software Engineering (BSSE)',
      universityName: 'The University Of Faisalabad (TUF)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      icon: <GiAbstract079 />,
      year: 'Aug 2021 - Dec 2021',
      degreeName: 'MERN Stack Course',
      universityName: 'Gamica Cloud',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
  ];
  return (
    <>
      <div id='education'>
        <h1 className='text-3xl font-extrabold text-[#3e64ff]'>Education</h1>
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
              <div className='text-3xl font-bold pb-3'>{data.degreeName}</div>
              <div className='text-base font-bold pb-3'>
                {data.universityName}
              </div>
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

export default Education;
