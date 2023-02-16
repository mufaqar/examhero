import {Container} from '@/constant/imports'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import {Logo} from './imports'
import {RxDoubleArrowRight} from 'react-icons/rx'

const Footer = () => {
  return (
    <footer className='bg-main py-20'>
          <Container>
               <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div>
                         <Logo className="border border-white" />
                         <div className='flex gap-3 mt-10'>
                              {social.map((item,i)=>{
                                   return(
                                        <Link href={item.link} className="border-1 border text-white rounded-sm text-xl hover:bg-white hover:text-main border-white p-2" key={i}>{item.icon}</Link>
                                   )
                              })
                              }
                         </div>
                    </div>
                    <div>
                         <h4 className='text-xl text-white font-semibold'>About ExamHero</h4>
                         <ul className='mt-6 flex flex-col gap-2'>
                              <li className='text-white item-center'><Link href="#" className='flex items-center gap-1'><RxDoubleArrowRight/>About Us</Link></li>
                              <li className='text-white item-center'><Link href="#" className='flex items-center gap-1'><RxDoubleArrowRight/>Job Opportunity</Link></li>
                         </ul>
                    </div>
               </div>
          </Container>
    </footer>
  )
}

export default Footer


const social = [
     {
          icon: <FaFacebookF/>,
          link: "#"
     },
     {
          icon: <FaTwitter/>,
          link: "#"
     },
     {
          icon: <FaLinkedinIn/>,
          link: "#"
     },
     {
          icon: <FaPinterestP/>,
          link: "#"
     },
]