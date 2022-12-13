import React from 'react';
import './ProfessionalSkill.css'

const ProfessionalSkill = () => {
    const parsent = '100%'

    const skills = [
        {
            skillName: 'HTML-5',
            percent : '95%'
        },
        {
            skillName: 'CSS-3',
            percent : '95%'
        },
        {
            skillName: 'Bootstrap',
            percent : '90%'
        },
        {
            skillName: 'Tailwind CSS',
            percent : '90%'
        },
        {
            skillName: 'React.js',
            percent : '90%'
        }
    ]
    const otherSkills = [
        {
            skillName: 'Java Script',
            percent : '70%'
        },
        {
            skillName: 'Node.js',
            percent : '50%'
        },
        {
            skillName: 'Express.js',
            percent : '50%'
        },
        {
            skillName: 'MongoDB',
            percent : '60%'
        },
        {
            skillName: 'JWT',
            percent : '70%'
        }
    ]
    return (
        <div id='skills'>
            <div className='mt-14'>
                <p className='uppercase text-[#FF014F] text-xs my-3 monoster-fonts' >The Skills I have gained as a developer</p>
                <h1 className='md:text-4xl text-2xl text-gray-600 monoster-fonts font-semibold  '>Professional Skill</h1>
          </div>
            <div className=" grid  md:grid-cols-2 gap-7 mt-5 mb-8">

                <div className='md:w-11/12 ' data-aos="fade-right" data-aos-duration="2000">
                    <h3 className='mt-5 mb-8 text-2xl font-semibold text-gray-600 lg:text-start text-center'>Front-End Skill</h3>
                    {
                        skills.map((skill, index) => <div
                            key={index}
                            className='mb-3'
                        >
                            <p className='my-2 monoster-fonts text-md text-gray-600 '> {skill.skillName}</p>
                            <div class="w-full  bg-gray-300 rounded-full ">
                                <div class=" bg-gradient text-xs font-medium text-white text-center  leading-none rounded-l-full" style={{ width: `${skill.percent}` }}> <p className='flex justify-end mr-5'>{skill.percent}</p> </div>
                            </div>
                        </div>)
                    }
               </div>
                <div className='md:w-11/12 mb-3 lg:mx-auto' data-aos="fade-left" data-aos-duration="2000">
                    <h3 className='mt-5 mb-8 text-2xl font-semibold text-gray-600 text-center lg:text-start '>Backend Skills</h3>
                    {
                        otherSkills.map((skill, index) => <div
                            key={index}
                            className='mb-3'
                            >
                            <p className='my-2 monoster-fonts text-md text-gray-600 '> {skill.skillName}</p>
                            <div class="w-full  bg-gray-300 rounded-full">
                                <div class=" bg-gradient text-xs font-medium text-white text-center  leading-none rounded-l-full" style={{ width: `${skill.percent}` }}> <p className='flex justify-end mr-5'>{skill.percent}</p> </div>
                            </div>
                        </div>)
                    }
                </div>

               
            </div>
       </div>
    );
};

export default ProfessionalSkill;