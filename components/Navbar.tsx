import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-16 md:px-6 md:py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image src="/showroom_logo.png" alt="ShowRoom logo" width={100} height={30} className='object-contain'></Image>
            </Link>
            <CustomButton 
                title='Sign In'
                btnType= 'button'
                containerStyles='text-[#588157] rounded-full bg-white min-w-[130px]'
                
                />
        </nav>
    </header>
  )
}

export default Navbar