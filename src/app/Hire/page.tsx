'use client'

import React from 'react';
import { useState } from 'react';

const hire = () => {
   
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can integrate an API, email service, or backend here
    setSubmitted(true);
  };
  
  return (
    <div className='bg-[#121212] text-white px-8 bg-cover min-h-screen bg-center bg-no-repeat font-rajdhani'>
      <h2 className="text-4xl font-extrabold mb-4 text-center py-6 text-primary-500 font-lora">Meet Me</h2>
      <p className="text-primary text-center mb-6">I'd love to hear from you. Fill out the form below:</p>

      {submitted ? (
        <div className="text-secondary-600 text-center font-semibold">Thanks! I'll get back to you soon.👍
</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full  bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white py-2 rounded-lg hover:bg-blue-700 transition hover:text-black shadow-md shadow-slate-100"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}


export default hire
