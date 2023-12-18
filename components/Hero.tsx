"use client";

import React from 'react'
import Image from 'next/image' 
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () =>{

    }
  return (
    <div className="hero">
        <div className='flex-1 pt-10 padding-x'>
            {/* BEM Methodology -hero is the block, title is the element within the block */}
            <h1 className='hero__title '>Find, Rent, or Book — your ideal ride with ease!</h1>
            <p className='hero__subtitle'>Unleash Your Drive, Elevate Your Style: Where Dreams Meet the Open Road!</p>
            <CustomButton 
              title="Discover your drive"
              containerStyles="bg-[#588157] text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
              <Image src="/hero.png" alt="car-image" fill className='object-contain'/>                
            </div>
            <div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero