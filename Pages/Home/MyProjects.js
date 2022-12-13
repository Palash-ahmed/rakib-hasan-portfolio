import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const MyProjects = () => {


    const [ project, setProject] = useState('')

    const [Projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
        .then(data=>setProjects(data))
    },[])
    

    const projectHandler = (project) => {
        setProject( project)
    }

    return (
        <div className='mt-10  ' id='projects'>
            <p className='uppercase text-[#FF014F] text-xs my-3 monoster-fonts' >Visit My Project and give your feedback</p>
            <h1 className='lg:text-4xl text-gray-600 monoster-fonts font-semibold text-2xl'>My Projects</h1>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-7 mt-5 mb-8">
                
                {
                    Projects.map((project, index) => <ProjectCard
                        
                        projectHandler={projectHandler}
                    
                        key={index}
                    project={project}></ProjectCard>)
                }
                
                <ProjectModal 
                    project={project}

                    
                ></ProjectModal>
               


            </div>
        </div>
    );
};

export default MyProjects;