import { Container } from '@/constant/imports'
import Image from 'next/image'
import { P1, P2, P3, P4, P5 } from 'public/images/imports'
import React from 'react';
import { motion, Variants } from "framer-motion";
import { fadeUp } from '@/animation';

const Partners = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}>
      <motion.h2 
      variants={fadeUp}
      className='sub-heading text-main text-center mb-6'>Our Partners</motion.h2>
      <div className='bg-light-pink/20 mt-10'>
        <Container>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center p-8 gap-10'>
            <div><Image src={P1} width={120} alt="partner" /></div>
            <div><Image src={P2} width={120} alt="partner" /></div>
            <div><Image src={P3} width={120} alt="partner" /></div>
            <div><Image src={P4} width={180} alt="partner" /></div>
            <div><Image src={P5} width={180} alt="partner" /></div>
          </div>
        </Container>
      </div>
    </motion.section>
  )
}

export default Partners