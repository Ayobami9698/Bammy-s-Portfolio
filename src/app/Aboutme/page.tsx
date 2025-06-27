"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const aboutMe = () => {
  return (
      
     <motion.div 
     initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
     
     className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 translate-y-1/8 bg-[#121212] text-white font-rajdhani text-4xl'>
      <Image src="/images/aboutlogo.png" alt="" width={500} height={500} />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>
          I am a web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Html, CSS, Git, nodejs etc. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
        </p>
    </div>
    </motion.div>
  )
  }

export default aboutMe
