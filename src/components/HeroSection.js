import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div
        className='w-full h-[30rem] bg-cover bg-yellow-200'
        style={{
          backgroundImage: 'url(/images/business.jpg)',
          backgroundSize: '100% 100% ',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className=' flex h-full w-full justify-center items-center relative left-[-20rem]'>
          <div className='flex flex-col justify-start items-start gap-6  border-l-4 border-gradient-orange-pink  px-6'>
            <span className='text-white uppercase font-semibold text-xl'>
              We Are Creative
            </span>
            <span className=' text-white uppercase font-bold text-4xl'>
              Creative Degital Agency
            </span>
            <span className='text-white text-sm text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, dolorem. Minima quaerat <br /> accusamus accusantium
              laudantium atque soluta. Tempore est ipsum illum nemo ex.
            </span>
            <span className='flex gap-6'>
              <button className='flex justify-center items-center bg-gradient1 rounded-full px-4 py-2 text-white font-semibold hover:bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-500'>
                Read More
              </button>

              <button className='flex justify-center items-center border-2  px-4 py-2 rounded-full text-white font-medium hover:bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-500'>
                Request Consult
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
