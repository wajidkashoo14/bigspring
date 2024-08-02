import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white pt-28 py-16 font-sans">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-[40rem]">
          <h1 className="text-4xl font-bold mb-4">Let us solve your critical website development challenges</h1>
          <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ducimus iusto quis similique ab sint dolorem doloremque impedit nihil labore?</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloribus.</p>
        <img src="/hero.jpg" alt="Hero Image" className="mx-auto w-full max-w-lg" />
      </div>
    </section>
  );
};

export default Hero;
