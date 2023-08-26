import React from 'react'
import HeroSection from './HeroSection';

const About = () => {
  const data={
    name:'Ankita Kulkarni',
    image:'./assets/about',
    para:'Hello Ankita Here...I am Final Year undergrad IT Student at Government College Of Engineering Karad. Hope this web application would help you. All the Very Bestt!!'
  };
  return (
 
   <HeroSection {...data} />
  );
}

export default About;
