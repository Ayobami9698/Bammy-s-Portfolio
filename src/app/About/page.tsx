 "use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TypeAnimation } from 'react-type-animation'
import { Rubik } from 'next/font/google'
import { easeOut, motion } from 'framer-motion'
import { Facebook, Instagram, Xrp } from 'iconsax-reactjs'
import Navbar from '../../../components/navbar'


const About = () => {
const [isVisible, setisVisible] = useState(false);
const [isCertified, setisCertified] = useState(false);
const [isProject, setisProject] = useState (false)
const [hobbies, setHobbies] = useState (false)
const [skills, setSkills] = useState(false)

const router = useRouter();
const handleClick = () => {
  router.push('/Hire');
}



  return (
    <motion.div  initial={{ opacity: 0, scale: 0.65, x: 200}}
  animate={{ opacity: 1,scale: 1, x: 0 }}
  transition={{
    duration: 0.65,
    //ease: //[0.22, 1, 0.36, 1], // Custom easing (like easeOutExpo) 
    ease: easeOut,
    type: 'spring',
    stiffness: 80,
    damping: 20,
  }}
    
    className='bg-[#121212] items-center justify-center text-center h-full w-full font-rajdhani bg-full '>
      <div className='w-full justify-between items-center'>
       <Navbar/>
      </div>
      <div className=''>
      <div className='flex mb-7 mt-5'>
        <Image
          src="/Images/IMG_20240207_235917_693.jpg"
          alt="image"
          width={400}
          height={400}
          className='border rounded-full p-3 shadow-xl shadow-yellow-50'
        />
        <h1 className='text-4xl font-bold font-rubik text-primary-500'>
          <TypeAnimation
        sequence={[
          'Hello,',
          1000,
          'I am Ayobami',
          1000,
          'A web developer from Nigeria',
          1000,
          'building apps and online experiences for industries and individuals',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ font: 'Rubik'}}
        repeat={Infinity}
        />
        </h1>
          
        {/* Hello.{" "} I'm Ayobami, a front-end web developer from Nigeria, building apps and online experiences for companies large and small. */}
      </div>
        <div className='items-center justify-center justify-items-center place-content-center space-y-10'>
      <div className="grid md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className=' mb-4 bg-primary'>
        <p className='font-semibold text-gray-800'>Certifications</p>
        <button onClick= {() => setisCertified(!isCertified)} className=' rounded shadow-lg bg-slate-200 px-12 py-10'>
        &#x2713;
        </button>
        {isCertified ?
            (
            <div className='absolute p-4 border rounded-lg bg-white/95 bg-opacity-100 w-auto h-auto text-black shadow-xl border-gray-200 inset-6 font-serif'>
             <h1 className='font-extrabold text-2xl'>
                Certifications
              </h1>
              <ul className='font-semibold mt-10'>
                <li>Open Edg entry level javascsript professional</li>
              </ul>
            
              <button onClick={() => setisCertified(false)} className='absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow mr-4 mb-4'>
                Close
              </button>
          
              
              
              </div>) :null
                
          }

        </div>
        <div className='mx-12'>
        <p className='font-semibold text-gray-900'>Projects</p>
        <button onClick= {() => setisProject(!isProject)} className=' rounded shadow-lg bg-slate-200 px-12 py-10'>
        &#x1F4BB; 
        </button>
        {isProject ?
            (
            <div className='absolute mt-4 p-4 border rounded-lg bg-white/95 bg-opacity-100 w-auto h-auto text-black shadow-xl border-gray-200 inset-6 font-serif'>
             <h1 className='font-extrabold text-2xl'>
                Projects
              </h1>
              <p className='items-center justify-center text-center text-gray-600 min-h-screen font-semibold mt-10'>Loading...</p>
            
              <button onClick={() => setisProject(false)} className='absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow mr-4 mb-4'>
                Close
              </button>
          
              
              
              </div>) :null
                
          }
        
        
        </div>
        <div className='mx-12 items-center justify-center place-items-center'>
        <p className='font-semibold text-gray-800'>Hobbies</p>
        <button onClick= {() => setHobbies(!hobbies)} className=' rounded shadow-lg bg-slate-200 px-12 py-10'>
        &#127944;
        </button>
        { hobbies?
            (
            <div className='absolute mt-4 p-4 border rounded-lg bg-white/95 bg-opacity-100  w-auto h-auto text-black shadow-xl border-gray-200 inset-6 font-serif'>
             <h1 className='font-extrabold text-2xl'>
                Hobbies
              </h1>
              <ul className='items-center justify-center text-center text-gray-600 mt-10 rounded shadow-2xl py-7 px-4 font-semibold'>
              <li>Reading </li>
              <li>draught</li>
              <li>watching Football</li>
              <li>Table tennis</li>
              <li>Reading Novels</li>
              </ul>
            
              <button onClick={() => setHobbies(false)} className='absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow mr-4 mb-4'>
                Close
              </button>
          
              
              
              </div>) :null
                
          }

        </div>
        
       <div className='mx-12'>
       <p className='font-semibold text-gray-800'>Skills(Outside Tech)</p>
       <button onClick= {() => setSkills(!skills)}className=' rounded shadow-lg bg-slate-200 px-12 py-10'>
       &#128394;
      </button>
      { skills?
            (
            <div className='absolute mt-4 p-4 border rounded-lg bg-white/95 bg-opacity-100 w-auto h-auto text-black shadow-xl border-gray-200 inset-6 font-serif'>
             <h1 className='font-extrabold text-2xl'>
                Skills
              </h1>
              <ul className='items-center justify-center text-center text-gray-600 mt-10 font-semibold'>
              <li> </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              </ul>
            
              <button onClick={() => setSkills(false)} className='absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow mr-4 mb-4 '>
                Close
              </button>
          
              
              
              </div>) :null
                
          }

       </div>
      </div>
      </div>

      <div className=''>
        <button  onClick={handleClick} className='mx-5 my-10 border-amber-50 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-amber-50 px-4 py-4 shadow-black shadow-xl hover:bg-slate-200 font-semibold'>
          Meet Me
        </button>
        <button className='mx-5 my-10 border-amber-50 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-amber-50 px-4 py-4 shadow-black shadow-xl hover:bg-slate-200 font-semibold'>
          Download My C.V
        </button>
      </div>
      </div>
      
        <section id='footer' className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        
          {/* <h2 className="text-white text-xl font-semibold mb-4">Ayobami Aina</h2> */}
          <div>
            {/* <Image
                    src="/Images/myLogo.png" // Replace with your actual image path
                    alt="Logo"
                    width={100}
                    height={100}
                    className="pt-0"
                  /> */}
            <h2 className='text-white text-xl font-semibold mb-4'>Ayobami Aina</h2>
          <p className="text-sm">"Crafting Web Excellence, One Pixel at a Time.</p>
          </div>
           
        

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/Aboutme" className="hover:text-white transition">About</a></li>
            <li><a href="/Services" className="hover:text-white transition">Services</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition ">Instagram</a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <section>Phone: 
              <ul>
                <li>08189964713</li>
                <li>07038033891</li>
                <li>09078728912</li>
              </ul>
            </section>
            <a href="#" className="hover:text-white transition">Email: baskkeydayo@gmail.com</a>
          </div>
        </div>
      </div>
      </section>
      {/* <div className='bg-[#030b12] justify-center text-amber-50 py-5 font-bold '>
        <p>
          &copy; Ayobami Aina
        </p>
      </div> */}
    </motion.div>
  )
}

export default About
