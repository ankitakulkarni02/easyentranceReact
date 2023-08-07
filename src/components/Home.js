import React from 'react';
import HeroSection from './HeroSection';
const Home = () => {
  const data={
    
    name:'Easy Entrance',
    image:'./assets/image.jpg',
    para:"This can be used for students who are giving entrance..Here You can find all in one place...Hope You will find what u needed."
  }
  return (
    <div>
      <HeroSection {...data} />
    </div>
  )
}

export default Home;
