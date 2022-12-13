import React from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { BiPen } from 'react-icons/bi';
import {  FaArrowRight } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import Slider from './Slider/Sliders';

const ProjectModal = ({ project }) => {
    const { name,   link, client , server, technology, descriptions } = project
    return (
        <div  >
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative project-color   w-11/12 max-w-6xl ">
                    <label htmlFor="project-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 py-5'>

                        {/* <div>

                            <img src={img} alt="" className='w-11/12 mx-auto h-64 lg:h-96 rounded-lg' />
                        </div> */}
                        <div className=' lg:h-96 h-64 items-center'>
                            <Slider project={project}></Slider>
                        </div>
                        
                        <div className='text-gray-600 lg:relative'>

                            <h1 className='text-xl font-semibold  flex items-center gap-5'> <AiOutlineProject className='text-[#FF014F]' />{name}</h1>
                            <p className='mt-2 flex gap-5'> <BiCategoryAlt className='w-10 h-10 text-red-500' /> Used Technology: {technology}</p>
                            <div className='mt-3'>
                                {
                                    descriptions?.map((description, index) => <p
                                        key={index}
                                        className='flex items-center gap-5 my-2 lg:my-2.5 text-gray-700'>  <BiPen className='text-[#FF014F] w-10 h-10 ' /> {description}  </p>)
                                }
                            </div>
                            

                            <div className=' lg:flex justify-around lg:absolute lg:bottom-2 lg:gap-10 '>
                                <a href={link} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md  text-sm   flex gap-1 items-center lg:my-0 mb-4'> Live Site <FaArrowRight /> </a>
                                <a href={client} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md  text-sm   flex gap-1 items-center lg:my-0 mb-4'>GitHub client <AiFillGithub /> </a>
                                <a href={server} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md  text-sm   flex gap-1 items-center lg:my-0 mb-4 text-center'> GitHub Server <BiGitBranch className='text-center' /> </a>
                            </div>

                            
                            

                        </div>

                    </div>
                    

                
                </div>
            </div>

        </div>
    );
};

export default ProjectModal;