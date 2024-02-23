import React from 'react';
import { FaArchway } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiWebmoney } from 'react-icons/si';

const Contact = () => {
  const contacDetails = [
    {
      title: 'Address',
      icon: <FaArchway />,
      desc: 'Caanal Road chak 204 RB, Faisalabad',
    },
    {
      title: 'Contact Number',
      icon: <FaPhone />,
      desc: '03061021204',
    },
    {
      title: 'Email Address',
      icon: <MdEmail />,
      desc: 'shaban056056@gmail.com',
    },
    {
      title: 'Website',
      icon: <SiWebmoney />,
      desc: 'yourwebsite.com',
    },
  ];
  return (
    <>
      <div className='w-full flex  justify-center mt-28' id='contact'>
        <div className='w-[90vw] max-w-6xl justify-center items-center '>
          <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold pb-8'>Contact Me</h1>
            <p className='text-center text-base text-[#999999] font-normal'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and <br /> Consonantia
            </p>
          </div>
          <div className='grid grid-cols-4 gap-8 mt-20 pb-4  '>
            {contacDetails.map((data, index) => (
              <div className='p-2 flex  ' key={index}>
                <div className='w-[36.25rem] h-[15.5rem]   bg-white shadow-left-right-bottom rounded-md flex justify-center pt-6'>
                  <div className='flex flex-col justify-start items-center'>
                    <div className='text-6xl text-[#3e64ff] '>{data.icon}</div>
                    <p className='text-sm font-medium pt-6 border-b-2 border-[#3e64ff] pb-2'>
                      {data.title}
                    </p>
                    <span className='text-center pt-6'>{data.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='h-[34.75rem] flex w-full pt-4'>
            <div
              className='h-full w-2/4
             '>
              <img
                src='/images/Profile3.jpeg'
                alt=''
                className='w-full h-full object-cover '
              />
            </div>
            <div className='h-full w-2/4 flex bg-[#f8f9fa] '>
              <div className='flex w-full flex-col gap-6  p-8 items-center'>
                <input
                  className='w-full h-14 border rounded-md outline-none p-2'
                  placeholder='Your Name'
                  type='text'
                  name=''
                  id=''
                />
                <input
                  className='w-full h-14 border rounded-md outline-none p-2'
                  type='text'
                  placeholder='Your Email'
                  name=''
                  id=''
                />
                <input
                  className='w-full h-14 border rounded-md outline-none p-2'
                  type='text'
                  placeholder='Subject'
                  name=''
                  id=''
                />
                <textarea
                  className='w-full border rounded-md outline-none p-2'
                  placeholder='Message'
                  rows='6'
                  cols='50'
                  name=''
                  id=''
                />
                <div className='w-full pt-4'>
                  <button className='bg-[#3e64ff] rounded-full px-8 py-3 text-white text-lg font-medium '>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
