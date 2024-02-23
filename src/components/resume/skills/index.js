import React from 'react';

const Skills = () => {
  // Array of skills with their names and percentages
  const skills = [
    { name: 'CSS', percentage: 80 },
    { name: 'HTML', percentage: 82 },
    { name: 'JavaScript', percentage: 65 },
  ];
  const Otherskills = [
    { name: 'CSS3', percentage: 80 },
    { name: 'HTML5', percentage: 85 },
    { name: 'BOOTSTRAP', percentage: 75 },
    { name: 'PHOTOSHOP', percentage: 70 },
    { name: 'SEO', percentage: 65 },
    { name: 'TAILWIND CSS', percentage: 85 },
  ];

  return (
    <>
      <div
        className='w-full h-auto flex justify-center items-center pb-44 '
        id='skills'>
        <div className='w-[90vw] max-w-6xl '>
          <div className='pt-12'>
            <h1 className='text-3xl font-extrabold text-[#3e64ff] pb-2'>
              Skills
            </h1>
          </div>
          <div className='flex   '>
            {skills.map((skill, index) => (
              <div className='p-2 flex ' key={index}>
                <div className='w-72 h-[18rem]   bg-white shadow-left-right-bottom rounded-md flex justify-center pt-6'>
                  <div className='flex flex-col justify-start items-center'>
                    <h1 className='text-2xl font-bold pb-4'>{skill.name}</h1>
                    <div className='w-44 h-44 relative'>
                      <svg
                        className='relative top-0 left-0 w-full h-full'
                        viewBox='0 0 36 36'>
                        <path
                          className='text-gray-200'
                          fill='none'
                          stroke='#ddd'
                          strokeWidth='1.5'
                          d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'></path>
                        <path
                          className='text-[#3e64ff]'
                          fill='none'
                          stroke='#3e64ff'
                          strokeWidth='1.5'
                          strokeDasharray={`${skill.percentage}, 100`}
                          d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'></path>
                        <text
                          x='8'
                          y='22'
                          className='text-xs font-semibold text-center'>
                          {skill.percentage}%
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-2 gap-4 pt-4'>
            {Otherskills.map((skill, index) => (
              <div className='p-2 flex flex-col items-center ' key={index}>
                <div className='w-[27rem] flex justify-between '>
                  <h1 className='text-lg font-medium pb-4'>{skill.name}</h1>
                  <p className='mt-2 text-sm font-semibold '>
                    {skill.percentage}%
                  </p>
                </div>
                <div className='w-[27rem] h-2 bg-gray-200 rounded-full '>
                  <div
                    className='h-full  bg-[#3e64ff] rounded-full'
                    style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
