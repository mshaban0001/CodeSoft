import React from 'react';
import { HiMiniRocketLaunch } from 'react-icons/hi2';
import { FaHeadphones } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';

const Features = () => {
  const features = [
    {
      title: 'Launch Business',
      description: `Lorem ipsum dolor sit amet, consectetur \n adipisicing elit.`,
      icon: <HiMiniRocketLaunch className='text-lg' />,
    },
    {
      title: 'Online Support Team',
      description: `Lorem ipsum dolor sit amet consectetur edit elit \n tempora delectus?`,
      icon: <FaHeadphones className='text-lg' />,
    },
    {
      title: 'Time Management',
      description: `Lorem ipsum dolor sit amet, consectetur \n adipisicing  elit.`,
      icon: <FaClock className='text-lg' />,
    },
  ];

  return (
    <div className='w-full h-56 bg-gradient-to-r from-orange-300 to-pink-500 flex justify-center items-center'>
      <div className='flex gap-72'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <div className='flex justify-center items-center gap-6'>
              <div className='icon-container text-white border-2 rounded-full p-2'>
                {feature.icon}
              </div>
              <div>
                <h1 className='uppercase text-white font-semibold'>
                  {feature.title}
                </h1>
              </div>
            </div>
            <div className='text-white text-start text-xs'>
              {feature.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
