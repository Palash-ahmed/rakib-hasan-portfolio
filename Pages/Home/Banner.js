import React from 'react';
import './Banner.css'
import bannerPhoto from '../../../src/Assests/Images/last.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook, FaInstagram, FaLinkedinIn ,FaGitAlt,FaGitSquare,FaGithub} from 'react-icons/fa';
import react from '../../../src/Assests/icons/atom.png'
import java from '../../../src/Assests/icons/js.png'
import node from '../../../src/Assests/icons/nodejs.png'


const Banner = () => {

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    const handleType = () => {
        console.log(`Done after 5 loops!`)
    }


    return (
        <div className="md:grid  grid-cols-1 md:grid-cols-5  mx-auto  md:my-0 gap-8 " >

            

            <div className='md:col-span-2' >
                <div className='bg-purple-100 card-shadow rounded-lg lg:w-[428px] lg:h-[466px] lg:p-[14px] p-4  ' data-aos="fade-right" data-aos-duration="2000">
                    
                    <img src="https://i.ibb.co/rpS24yf/last.jpg" alt="" className=' rounded-lg lg:w-[400px] lg:h-[440px] ' />
                
                </div>

            </div>

            <div className='md:col-span-3 lg:mt-5  mt-12 lg:ml-5' data-aos="fade-left" data-aos-duration="2000">
                <h1 className='lg:text-5xl md:text-4xl text-4xl font-semibold  monoster-fonts text-center md:text-left'>
                    Hi, I'm <span className='lg:text-5xl md:text-4xl font-semibold top-font monoster-fonts text-4xl text-center md:text-left'>Rakib Hasan</span>
                </h1> 
                <h1 className='lg:text-6xl md:text-4xl text-3xl font-semibold  monoster-fonts text-center md:text-left'>a
                    <span className='lg:text-4xl md:text-3xl text-2xl font-semibold mt-4 monoster-fonts top-font ml-5'>
                        <Typewriter
                            words={['Web Developer.', 'Front End Developer.', 'MERN Stack Developer.', 'React Developer.']}
                            loop={100}
                            cursor
                            cursorStyle='।'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                
                </h1>

                <p className='w-11/12 lg:mt-8 mt-5 text-gray-600 hidden lg:block flex justify-center '>
                    I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.
                </p>

                <div className=' md:flex lg:gap-28 lg:mt-14 mt-8 md:gap-3'>
                    <div>
                        <h5 className='md:text-md  text-gray-600 mt-5 lg:mt-0 md:text-left text-center text-xl '>Find With Me</h5>
                        
                        <div className='flex  mt-3 gap-5 md:gap-3 lg:gap-5 justify-center md:justify-start'>
                            <a href='https://www.facebook.com/rakibkst17' target='_blank' className='p-4 rounded-lg card-shadow bg-gray-100 shadow-slate-400 hover:bg-[#FF014F]   cursor-pointer block text-gray-600 hover:text-white ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <FaFacebook className=' text-2xl  ' />
                            </a>
                            <a href='https://github.com/RakibHasanDev' target='_blank' className='p-4 rounded-lg card-shadow bg-gray-100 shadow-slate-400 hover:bg-[#FF014F]  hover:text-white cursor-pointer block '>
                                <FaGithub className='text-2xl  ' />
                            </a>
                            <a href='https://www.linkedin.com/in/rakib-hasan-ahnaf/' target='_blank' className='p-4 rounded-lg card-shadow bg-gray-100 shadow-slate-400   cursor-pointer block hover:text-white hover:bg-[#FF014F] '>
                                <FaLinkedinIn className=' text-2xl  ' />
                            </a>
                           
                           

                        </div>
                    </div>
                    <div className='mt-8 md:mt-0' >
                        <h5 className='md:text-md  text-gray-600 mt-5 lg:mt-0 md:text-left text-center text-xl'>Best Skill On</h5>
                        <div className='flex  mt-3 gap-5 lg:gap-5 md:gap-3 justify-center md:justify-start'>
                            <div className=' py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-400  card-shadow'>
                                <img src={react} className='w-10 h-10 rounded-md'  alt="" />
                            </div>
                            <div className='py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-400  card-shadow'>
                                <img src={java} className='w-10 h-10 rounded-md'  alt="" />
                            </div>
                            <div className='py-2 px-2 rounded-lg shadow-2xl bg-gray-100 shadow-slate-400  card-shadow'>
                                <img src={node} className='w-10 h-10 rounded-md'  alt="" />
                            </div>
                           
                           

                        </div>
                    </div>

                   

                </div>
            

            </div>
        
        
        </div>
    );
};

export default Banner;