import {Container} from '@/constant/imports'
import React from 'react'
//import {Logo} from './imports'
import {Logo} from './imports'
import Link from 'next/link';
import { navItems } from '../../public/DataFiles/NavItem'
import { BiSearch, BiUser } from 'react-icons/bi';
import {HiOutlineMenuAlt3 } from 'react-icons/hi';


interface INavItem {
  name:string,
  link: string
}

function Header() {
  
  return (
    <header className='py-3 bg-white/80 fixed w-full top-0 z-50'>
      <Container>
          <div className='flex items-center justify-between'>
            <Logo/>
            <nav className={`items-center gap-6 lg:gap-10 hidden md:flex`}>
              {
                navItems.map((nav:INavItem,idx:number) => {
                  return(
                    <Link href={nav.link} className="text-sm font-semibold hover:text-main" key={idx}>{nav.name}</Link>
                  )
                })
              }
            </nav>
            <div className='flex items-center gap-4'>
              <button className='p-2 shadow-lg rounded-md'><BiSearch className='text-main' size={20}/></button>
              <button className='button'> <BiUser/> Login / Register</button>
              {/* hamburger  */}
             <button className='md:hidden'><HiOutlineMenuAlt3/></button>
            </div>
          </div>
          
      </Container>
    </header>
  )
}

export default Header