import Image from 'next/image'
import React from 'react'
// import {Logo} from '../../public/images/imports'

const Logo = () => {
  return (
     <Image
      src='/images/logo.png'
      alt="logo"
      width={500}
      height={500}
    />
  )
}

export default Logo