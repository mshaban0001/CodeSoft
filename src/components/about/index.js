import React from 'react';

const About = () => {
  return (
    <>
      <div
        className='w-full  h-[92vh] flex flex-col   items-center '
        id='about'>
        <div className='w-full h-[70vh] flex'>
          <div className=' h-full w-2/4'>
            <img
              className=' inset-0 w-3/5 h-full object-cover float-right'
              src='/images/Profile2.png'
              alt=''
              srcset=''
            />
          </div>
          <div className=' h-full w-2/4 p-12'>
            <h1 className='text-5xl font-bold'>About Me</h1>
            <p className='text-base text-[#999999] leading-[1.8] font-medium pt-10'>
              A small river named Duden flows by their place and supplies it
              <br />
              with the necessary regelialia.
            </p>
            <div class='flex flex-col pt-10'>
              <div class='flex mb-5'>
                <div class='w-1/4 font-bold'>Name:</div>
                <div class='w-3/4 text-[#999999] font-medium '>
                  Muhammad Shaban
                </div>
              </div>
              <div class='flex mb-5'>
                <div class='w-1/4 font-bold'>Date of birth:</div>
                <div class='w-3/4 text-[#999999] font-medium'>
                  November 9, 198
                </div>
              </div>
              <div class='flex mb-5'>
                <div class='w-1/4 font-bold'>Address:</div>
                <div class='w-3/4 text-[#999999] font-medium'>
                  Canal Road 204 RB FSD
                </div>
              </div>
              <div class='flex mb-5'>
                <div class='w-1/4 font-bold'>Zip code:</div>
                <div class='w-3/4 text-[#999999] font-medium'>38000</div>
              </div>
              <div class='flex mb-5'>
                <div class='w-1/4 font-bold'>Email:</div>
                <div class='w-3/4 text-[#999999] font-medium'>
                  shaban056056@gmail.com
                </div>
              </div>
              <div class='flex'>
                <div class='w-1/4 font-bold'>Phone:</div>
                <div class='w-3/4 text-[#999999] font-medium'>
                  +923061021204
                </div>
              </div>
            </div>
            <button className='py-4 px-8 bg-blue-700 border rounded-full text-lg text-white font-medium relative top-16'>
              Download CV
            </button>
          </div>
        </div>
        <div className='w-[90vw]  max-w-6xl h-[22vh] xl:w-[90vw]  xl:max-w-6xl lg:w-[70vw] relative lg:left-14 xl:left-0  lg:max-w-5xl    flex justify-center items-center gap-12 xl:gap-12 lg:gap-16'>
          <img
            className='w-60 h-12 xl:w-60 xl:h-16 lg:w-36 lg:h-10 inset-0 object-cover'
            src='/images/Microsoft.png'
            alt=''
          />
          <img
            className='w-60 h-16 xl:w-60 xl:h-16 lg:w-36 lg:h-10 inset-0 object-cover'
            src='/images/Android.png'
            alt=''
          />
          <img
            className='w-40 h-20 xl:w-60 xl:h-16 lg:w-36 lg:h-10 inset-0 object-cover'
            src='/images/Java.png'
            alt=''
          />
          <img
            className='w-52 h-16 xl:w-60 xl:h-16 lg:w-36 lg:h-10 inset-0 object-cover'
            src='/images/Google.png'
            alt=''
          />
          <img
            className='w-60 h-16 xl:w-60 xl:h-16 lg:w-36 lg:h-10 inset-0 object-cover'
            src='/images/Adobe.png'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default About;
