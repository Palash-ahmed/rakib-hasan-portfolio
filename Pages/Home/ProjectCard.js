import React from 'react';
import { FaRegHeart , FaArrowRight} from 'react-icons/fa';


const ProjectCard = ({ project, projectHandler }) => {
    
    const {name, img, type,link, like} = project
    return (
        <div>
            <div className=" w-[95%] card-shadow h-[26rem] mx-auto rounded-xl  my-3 relative" data-aos="zoom-in-up" data-aos-duration='1000' >
                {/* <div className="flex justify-center relative rounded-lg overflow-hidden h-52 ">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-110  rounded-md p-5">
                        <img src={img} alt="" />
                    </div>
                </div> */}
                <div className='p-5 transition-transform duration-500 transform ease-in-out hover:scale-110'>
                    <img className=" rounded-lg h-56 w-full" src={img} alt="" />
                </div>
                <div className="px-5 ">
                    <div className='flex justify-between '>
                        <p className='text-sm text-[#FF014F] monoster-fonts'>
                            {type}
                            
                        </p>
                        <p className='text-sm text-gray-600 monoster-fonts flex gap-2 items-center'>
                            <FaRegHeart/> {like}
                        </p>
                    </div>

                    <h5 className="text-xl tracking-tight text-gray-700 mt-4 mb-2 monoster-fonts">{name }</h5>

                </div>
                <div className=' px-5 mt-3'>
                    
                    
                    <label
                    
                        onClick={()=>projectHandler(project)}
                        
                        htmlFor="project-modal" className=' card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md shadow-lg text-sm absolute bottom-5 right-4  flex gap-1 items-center cursor-pointer'> View Details <FaArrowRight /> </label>

                    {/* <a href={link} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md shadow-lg text-sm absolute bottom-5 right-4  flex gap-1 items-center'> View Project <FaArrowRight /> </a> */}
                
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;