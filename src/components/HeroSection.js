import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import styled from 'styled-components';
import { Button } from '../button/Button';
const HeroSection = (props ) => {
  return (
    <Wrapper>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
          <p className='hero-top-data'> This is</p>
          <h1 className='hero-heading'>
            {/* <span className='span'>E</span>asy <span className='span'>E</span>ntrance */}
            {props.name}
            </h1>
          <p className='hero-para'>{props.para}</p>
        
     
        <Button className='btn Contact-me'>
          <NavLink to='/contact' >Contact Me</NavLink>
        </Button>
       <br></br><br></br>
        <a style={{ color: 'blue', marginTop: '100px' }}><NavLink to='/easy-entrance' >Get Started...</NavLink></a>
        </div>
        <div className='section-hero-image'>
          <picture>
            <img src={props.image}alt='hero-img' height={500} ></img>
          </picture>
        </div>
      </div>
    </Wrapper>
  
      
  
  );
};
const Wrapper=styled.section`
padding: 10rem 3rem 0 5rem;
.container{
  display: flex;
  width: 100%;
  padding-bottom:10rem;
}
.section-hero-data{
  justify-content: center;
}
.section-hero-data a{
margin-top:19px;
}
.hero-heading{
  text-transform: uppercase;
  font-size: 2rem;
}
.span{
  font-size:3rem;
}
.hero-img {
  // max-width: 10px;
  margin-left:3rem;
}
.hero-para{
  padding:1rem 1rem 1.6rem 0;
  dispaly:flex;
  font-size:1rem;
}
.hero-top-data{
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.helper};
}
.btn{
  border-radius:12px;
  max-width:16rem;
}
.picture{
  text-align:center;
  
}

.section-hero-image {
  // display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3.3rem;
 
}

`;


export default HeroSection;
