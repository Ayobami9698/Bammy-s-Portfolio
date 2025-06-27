"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"


export default function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
       className="flex h-auto bg-cover bg-center bg-no-repeat items-center justify-center text-center w-auto bg-[#121212] font-rajdhani" /*style={{ backgroundImage: "url('/Images/hossein-soltanloo--NFB0DiVd8Y-unsplash.jpg')"}}*/>
     <div className="my-10 space-y-12 font-lato px-4">
      {/* <Image
        src="/Images/logo-transparent.png"
        alt="my-logo"
        width={500}
        height={500}
        className="justify-self-center mix-blend-overlay"
      /> */}
       <Image
                src="/Images/myLogo.png" // Replace with your actual image path
                alt="Logo"
                width={600}
                height={600}
                className="justify-self-center mt-0 mx-auto"
              />
      <h1 className="text-3xl font-bold text-white font-montserrat">
      “Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill
      </h1>
      <p className="mt-4 text-xl text-white font-bold my-5 font-serif">
        To know more about me?
      </p>
      <Link href='./About'>
      <motion.button className=" bg-gradient-to-r from-black to-white mt-2 px-4 py-2 rounded text-white mb-5 w-lg hover:text-black hover:delay-100"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
>Get In &rarr;</motion.button></Link>
      
     </div>
   </motion.div>
  );
}
