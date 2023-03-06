import Image from 'next/image';
import React from 'react';
import { Container } from '../constant/imports';
import { Post1 } from '../../public/images/imports';
import { Blog_Articles } from '../components/imports';
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/animation";

function Blog_Module({blog}) {
    return (
        <>
            <motion.section
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
                className='px-4 mianbg flex flex-col items-center justify-center pt-36 md:pt-[87px]'>
                <Container>
                    <motion.div
                        variants={fadeUp}
                        className='my-16'>
                        <h3 className='md:text-[48px] md:leading-[57px] text-[36px] leading-[48px] font-bold Urbanist text-center mb-3'>Read more</h3>
                        <p className='md:text-[18px] md:leading-[21px] text-[16px] leading-[21px] font-normal Urbanist text-center'>
                            You may also be interested in this.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={fadeUp}
                        className='grid md:grid-cols-2 grid-cols-1 gap-16 items-center mb-24'>
                        <div className=''>
                            <h2 className='text-[#1D2130] md:text-[48px] md:leading-[57px] text-[36px] leading-[40px] font-bold Urbanist mb-6'>
                                New invoicing features to help you get paid faster
                            </h2>
                            <p className='text-[#6D6E76] md:text-[16px] md:leading-[24px] text-[16px] leading-[21px] font-normal Urbanist mb-8'>
                                Over the past few months, we’ve added several new features to SaaS invoicing to help any business get paid faster and streamline their collection workflows.
                            </p>
                            <p className='text-[#1D2130] md:text-[16px] md:leading-[24px] text-[1spx] leading-[21px] font-medium Urbanist'>
                                Luke Matthews l  November 8, 2021
                            </p>
                        </div>
                        <div>
                            <Image src={Post1} alt="" />
                        </div>
                    </motion.div>
                </Container>
            </motion.section>
            <motion.section
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
                className='py-14'>
                <Container>
                    <motion.div
                        variants={fadeUp}>
                        <h3 className='md:text-[48px] md:leading-[57px] text-[36px] leading-[48px] font-bold Urbanist text-center mb-3'>
                            Hot articles
                        </h3>
                    </motion.div>
                </Container>
            </motion.section>
            <section className='pb-14'>
                <Container>
                    <Blog_Articles blog={blog}/>
                </Container>
            </section>
        </>
    )
}

export default Blog_Module