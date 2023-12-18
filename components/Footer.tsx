import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 px-16 md:px-6 md:py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/showroom_logo.png" alt="ShowRoom logo" width={100} height={30} className='object-contain'/>
          <p className='text-base text-gray-700'><a href="ihope.me" className='underline'>ShowRoom</a> <sup> &copy; </sup>  2023 <br/> All rights reserved </p>
        </div>
        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-gray-500'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>        
      </div>
      
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 px-16 md:px-6 md:py-10 '>
        <p>< sup> &copy; </sup>2023 <a href="ihope.me" className='underline'>ShowRoom</a> All rights reserved</p>
        <div className='footer__copyrights-link'>
          <Link href="/" className='text-gray-500'> Privacy Policy</Link>
          <Link href="/" className='text-gray-500'> Terms of use</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer