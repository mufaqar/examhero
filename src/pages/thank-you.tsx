import {ThankYouModule} from '@/modules/imports'
import Head from 'next/head'
import React from 'react'

const ThankYou = () => {
  return (
     <Head>
          <title>Thank You!</title>
     </Head>
    <div><ThankYouModule/></div>
  )
}

export default ThankYou