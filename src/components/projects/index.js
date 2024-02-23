import React from 'react';

const Projects = () => {
  const services = [
    {
      img: '/images/proj1.webp',
      category: 'web design',
      title: 'Branding & Illustration Design',
    },
    {
      img: '/images/proj2.webp',
      category: 'web design',
      title: 'Branding & Illustration Design',
    },
    {
      img: '/images/proj3.webp',
      category: 'web design',
      title: 'Branding & Illustration Design',
    },
    {
      img: '/images/proj4.webp',
      category: 'web design',
      title: 'Branding & Illustration Design',
    },
    {
      img: '/images/proj5.webp',
      category: 'web design',
      title: 'Branding & Illustration Design',
    },
    {
      img: '/images/proj6.webp',
      category: 'web design',
      title: 'Branding & Illustration Design',
    },
  ];

  const statics = [
    { title: 'Awards', result: '100' },
    { title: 'Complete Projects', result: '1,200' },
    { title: 'Happy Customers', result: '1,000' },
    { title: 'Cups of coffee', result: '600' },
  ];

  return (
    <>
      <div className='w-full h-auto  flex flex-col items-center' id='projects'>
        <h1 className='text-5xl font-extrabold mt-52'>Our Projects</h1>
        <p className='text-xl font-semibold text-[#999999] pt-8'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>

        <div className='grid grid-cols-3 mt-16 pb-4 '>
          {services.map((service, index) => (
            <div className='flex' key={index}>
              <div className='relative w-[40rem] h-[22rem]'>
                <div
                  className='relative inset-0 w-full h-full bg-cover bg-center'
                  style={{ backgroundImage: `url(${service.img})` }}></div>
                <div className='absolute inset-0 w-full h-full bg-[#3e64ff] opacity-0 transition-opacity duration-300 hover:opacity-90'>
                  <div className='h-full  text-center flex flex-col justify-center items-center gap-2'>
                    <div className='text-white cursor-pointer text-2xl font-semibold'>
                      {service.title}
                    </div>
                    <div className='text-[#ffffff] opacity-80 tracking-widest  text-base font-medium'>
                      {service.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-4 mt-16 pb-4 gap-16'>
          {statics.map((statics, index) => (
            <div className='flex' key={index}>
              <div className='w-96 h-[10rem]   bg-white shadow-left-right-bottom rounded-md flex flex-col items-center justify-center '>
                <div className='text-[#3e64ff] text-4xl font-bold pb-2'>
                  {statics.result}
                </div>
                <div className='text-[#000000cc] text-base font-normal'>
                  {statics.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
