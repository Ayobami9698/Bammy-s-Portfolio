import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Projects() {
  return (
    <div>
      <div className='absolute flex flex-col items-start'>
        <Image
        alt='weather-app'
        src='/images/weather.png'
        width={250}
        height={250}
        className='border border-black rounded-lg shadow-xl mb-3'
        />
      <Link 
        href='https://bammy-weather-info.netlify.app/' 
        className=' ml-7'
        target="_blank">
          Bammy's Weather App
      </Link>
      </div>
    </div>
  );
}