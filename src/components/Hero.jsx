// Hero.jsx
import React from 'react';

import '../index.css'
function Hero({ title, subTitle }) {
  return (
    <section className="bg-black  text-white p-8">
      <h1 className="text-4xl animate-bounce font-bold ">{title}</h1>
      <p className="text-lg ">{subTitle}</p>
    </section>
  );
}

export default Hero;
