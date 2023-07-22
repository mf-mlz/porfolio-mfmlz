import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { projects } from '../data';


const Projects = ({ theme }) => {
  return (
    <section id='projects' className='section'>
      <div className='container mx-auto'>

      <motion.div 
         variants={fadeIn('down', 0.3)}
         initial ="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
        className='flex-1'>
          <div className='mt-16 flex flex-col justify-center items-center'>
              <h3 className='h3 text-[45px] lg:text-[80px] leading-none mb-12 font-poppins text-black dark:text-white'>Participation in Projects</h3>
          </div>
        </motion.div>

        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial ="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        className='grid grid-cols-4 md:grid-flow-row'>
        {projects.map((project, index)=>{
              return (
              <div className="flex items-center justify-center mb-16" key={index}>
                <img className='w-24 h-24' src={project.image} alt='' />
              </div>
              );              
        })}
        </motion.div>
      </div>
    </section>

  );
};

export default Projects;
