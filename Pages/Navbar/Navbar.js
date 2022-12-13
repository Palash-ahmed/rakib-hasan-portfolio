import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { BiCloudDownload } from 'react-icons/bi';
import navLogo from '../../../src/Assests/Images/navLogo.jpg'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const homeHandler = () => {
        window.scrollTo(0, 0);

    }
  
    return (
        <div
         
            className=" sticky top-0  z-50 nav-color w-full">
            <div
                
                className="px-2 lg:pt-8 py-3 lg:pb-4  mx-auto lg:px-10">
                <div className="relative flex items-center justify-between">
                    <NavLink
                        to='/'

                        onClick={homeHandler}
                      
                        className="inline-flex items-center"
                    >
                        <img src={navLogo} className='w-14 h-14 rounded-full ring-purple-200 ring-4' alt="" />
                        <span className="ml-4 text-md md:text-lg  tracking-wide text-gray-700 font-bold">
                            PORTFOLIO
                        </span>
                    </NavLink>
                    <ul className=" items-center hidden space-x-6 lg:flex">
                        
                        <li>
                            <Link
                                onClick={homeHandler}
                               to='/'
                                aria-label="Home"
                                title="Home"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a
                                href='#projects'

                                aria-label="projects"
                                title="projects"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                              Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href='#skills'
                                aria-label="skills"
                                title="skills"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900 "
                            >
                               My Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href='#about'
                                aria-label="about"
                                title="about"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900 "
                            >
                               About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href='#contact'
                                aria-label="contact"
                                title="contact"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                               Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://drive.google.com/u/0/uc?id=1Uh3kCGpe4MtYPhazrKg32Qoq8o--c7Ok&export=download'
                                aria-label="contact"
                                title="contact"
                                download={true}
                                className=" flex gap-1 items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                 Download Resume <BiCloudDownload className='text-lg' />
                            </a>
                        </li>
                       

                 




                    </ul>
                   
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 nav-color border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to='/'
                                                aria-label="Learn With Programming"
                                                title="Learn With Programming"
                                                className="inline-flex items-center"
                                            >
                                                <img src={navLogo} className='w-12' alt="" />
                                                <span className="ml-2 text-md font-bold tracking-wide text-gray-800 hover:text-blue-900">
                                                   PortFolio
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                  
                                        <ul className=" space-y-4">
                                            <li>
                                                <a
                                                    href='#'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='#projects'

                                                    aria-label="projects"
                                                    title="projects"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Projects
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='#skills'
                                                    aria-label="skills"
                                                    title="skills"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900 "
                                                >
                                                    My Skills
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='#about'
                                                    aria-label="about"
                                                    title="about"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900 "
                                                >
                                                    About Me
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='#contact'
                                                    aria-label="contact"
                                                    title="contact"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Contact
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href='https://drive.google.com/u/0/uc?id=1Uh3kCGpe4MtYPhazrKg32Qoq8o--c7Ok&export=download'
                                                    aria-label="contact"
                                                    title="contact"
                                                    download={true}
                                                    className=" flex gap-1 items-center font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Download Resume <BiCloudDownload className='text-lg' />
                                                </a>
                                            </li>






                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;