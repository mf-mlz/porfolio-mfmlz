import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/img/portfolio/FoodWhite.png';
import Img1Dark from '../assets/img/portfolio/FoodDark.png';
import Img2 from '../assets/img/portfolio/PokeWhite.png';
import Img2Dark from '../assets/img/portfolio/PokeDark.png';
import Img3 from '../assets/img/portfolio/SamifyWhite.png';
import Img3Dark from '../assets/img/portfolio/SamifyDark.png';


const Work = ({ theme }) => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
           variants={fadeIn('riight', 0.5)}
           initial ="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.3}}
           className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 mt-8'>
            <div>
              <h2 className='h2 leading-tight text-accent font-poppins mt-4'>
                My personal projects.
              </h2>
              <p className='max-w-lg mb-16 font-poppins text-black dark:text-white'>
              Among some small projects that I have done, they range from exercises to small pages made with Bootstrap or Tailwind CSS, also to practice consuming a REST API like Pokemon's, and a small Spotify made with Node JS, Mongo DB and Angular (which is still in development).
              </p>
              <button className='btn btn-sm font-poppins'>
                <a href='https://mf-mlz.github.io/mf-mlz/proyectos.html' target='_blank'>View All Projects</a></button>
            </div>
            <div className='group relative overflow-hidden border-2 border-black/70 dark:border-white/50 rounded-xl h-96'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={theme === 'dark' ? Img1Dark : Img1} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient font-poppins'>Website developed with Tailwind CSS.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white font-poppins'>PLATZI FOOD</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
           variants={fadeIn('left', 0.2)}
           initial ="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.3}}
           className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-black/70 dark:border-white/50 rounded-xl h-96'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={theme === 'dark' ? Img2Dark : Img2} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient font-poppins'>Exercise for consuming a REST API using promises,<br/> using JavaScript.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white font-poppins'>POKEDEX</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-black/70 dark:border-white/50 rounded-xl h-96'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={theme === 'dark' ? Img3Dark : Img3} alt=''></img>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient font-poppins'>Spotify style web page made with Angular,<br/> Node JS and Mongo DB.</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white font-poppins'>SAMIFY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
