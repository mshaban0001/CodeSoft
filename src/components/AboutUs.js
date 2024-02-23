import React from 'react';

const AboutUs = () => {
  return (
    <div
      className='flex w-full h-[30rem] bg-cover bg-yellow-200'
      style={{
        backgroundImage: 'url(/images/contentImg4.jpg)',
        backgroundSize: '100% 100% ', // or 'cover' or '100% 100%' based on your preference
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='flex flex-col w-1/2  text-start justify-center items-start gap-6'>
        <div className='flex flex-col gap-6 relative left-[20rem]'>
          <h1 className='uppercase text-3xl font-bold'>About Us</h1>
          <h1 className='text-start text-xl font-bold'>
            15 years, we passionate about achieving better results <br /> for
            our clients
          </h1>
          <h1 className='text-justify font-medium'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            <br /> et ipsa hic dolor laborum quasi alias ullam a unde similique
            ipsam <br />
            sapiente soluta, aliquam illum odit. Eius error exercitationem
            <br />
            pariatur sequi sint iusto autem officia rem corrupti velit, ducimus
            <br />
            at nulla enim. Laudantium nesciunt tempore sunt accusantium, optio,
            <br />
            illo eligendi quidem cumque aspernatur itaque porro veniam beatae
            <br />
            exercitationem eius? Unde consectetur doloremque aspernatur
            architecto <br /> aliquid.
          </h1>
          <button className=' w-40 h-12 text-lg bg-gradient-to-r from-orange-300 to-pink-500 rounded-full px-4 py-2 text-white font-semibold'>
            Read More
          </button>
        </div>
      </div>
      <div className='w-1/2 '></div>
    </div>
  );
};

export default AboutUs;
