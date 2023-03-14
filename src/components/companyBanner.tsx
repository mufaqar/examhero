import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Company from '../../public/images/company.png';
import { Container } from '../constant/imports';
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/animation";

function CompanyBanner() {
    return (
        <motion.section 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
         className='px-4 mianbg flex flex-col items-center justify-center pt-36 md:pt-[87px]'>
            <Container>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 items-center mt-16'>
                    <motion.div variants={fadeUp}>
                        <Image src={Company} alt="" />
                    </motion.div>
                    <motion.div variants={fadeUp}>
                        <div className='mb-20'>
                            <h3 className='md:text-[48px] md:leading-[57px] text-[36px] leading-[48px] font-bold Urbanist'>Events</h3>
                            <h1 className='text-main md:text-[80px] md:leading-[96px] text-[52px] leading-[50px] font-bold Urbanist'>
                            E-Mock Gifting Program
                            </h1>
                        </div>
                        <Link href="/program-detail" className='text-main bg-white border border-main md:text-[28px] md:leading-[33px] font-bold Urbanist px-6 py-2 rounded-[16px] inline-flex float-right'>
                            Learn more
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </motion.section>
    )
}

export default CompanyBanner