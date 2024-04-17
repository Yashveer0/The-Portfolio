import React from 'react';

function Service({ name, charge, desc, image }) {
  return (
    <>
      <div className='bg-black p-4 mb-0'>
        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
          <img src={image.url} alt={name} className="w-32 h-32 mx-auto mb-4 rounded-full" />
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">{desc}</p>
          <p className="text-gray-700 font-semibold">{charge}</p>
        </div>
      </div>
    </>
  );
}

function Services({ services }) {
  return (
    <>
      <h2 className='text-2xl bg-black p-3 underline text-white text-center font-bold'>Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} {...service} />
        ))}
      </div>
    </>
  );
}

export default Services;
