import React from 'react';
import { Button } from '../components/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/herovideo.mp4' autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>what are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Get Started
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Watch Trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
