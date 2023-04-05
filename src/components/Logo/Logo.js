import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png';

const Logo = () => {
	return (
		<Tilt className='Tilt'>
      <img alt='brainpic' src={brain}/>
	  </Tilt>
    )
}

export default Logo;