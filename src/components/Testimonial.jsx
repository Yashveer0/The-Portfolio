import React from 'react';

function Testimonials({ testimonials }) {
  return (
     <div className='bg-black p-4 mt-0'>
      <h2 className='text-2xl bg-black p-3 underline text-white text-center font-bold '>Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div key={testimonial._id} className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={testimonial.image.url}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600 italic">{testimonial.position}</p>
            <p className="text-gray-700 mt-4">{testimonial.review}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Testimonials;
