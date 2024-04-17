// About.jsx
import React from 'react';

import '../index.css'

function About({ user }) {
  const { name, title, subTitle, description, quote, exp_year, address, phoneNumber, contactEmail, avatar } = user.about;

  return (
    <section className="bg-gradient-to-r bg-black py-12" >
      <div className="max-w-3xl mx-auto flex items-center justify-center flex-wrap">
        
        

<div className="relative w-64 h-64 overflow-hidden mb-4 mr-8">
  <img src={avatar.url} alt="Image" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 " />
  <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 hover:opacity-0 flex justify-center items-center">
    <p className="text-white text-4xl font-bold">{user.about.name}</p>
  </div>
</div>




        <div className="w-full md:w-2/3 mt-2 p-2">
          
          <p className="text-white mb-6 ">{description}</p>
          <p className="italic text-gray-200 mb-4">"{quote}"</p>
          <div className="flex justify-between text-white mb-4">
            <div>
              <p>Experience: {exp_year} years</p>
              <p>Address: {address}</p>
            </div>
            <div>
              <p>Phone: {phoneNumber}</p>
              <p>Email: {contactEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
