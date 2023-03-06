import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { News_One, News_Three, News_Two } from '../../public/images/imports';
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/animation";

function CompanyNews({events}) {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}>
      <motion.h2
        variants={fadeUp}
        className='text-main md:text-[60px] md:leading-[72px] text-[38px] leading-[56px] font-bold Urbanist mb-14'>
        Company News
      </motion.h2>
      <motion.div 
      variants={fadeUp}
      className='grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-10 mb-14'>
        {events.map((item:any, index:number) => (
          <div key={index} className='h-[530px] relative bg-gradient-to-b from-[#2D2D2D] to-[#525FE1] rounded-[16px] group transition-all ease-in-out'>
            <Image src={item?.image.asset.url} alt={item.title} className='object-cover w-full h-full rounded-[16px] opacity-80 group-hover:opacity-60' width={700} height={200}/>
            <div className=' absolute bottom-0'>
              <div className='px-8'>
                <h3 className='text-white md:text-[32px] md:leading-[38px] text-[26px] leading-[32px] font-bold Urbanist mb-14'>
                  {item.title}
                </h3>
                <p className='text-white md:text-[18px] md:leading-[21px] text-base font-semibold Urbanist mb-4  hidden group-hover:block'>
                  {item.excerpt}
                </p>
                <p className='text-white md:text-[16px] md:leading-[24px] text-sm font-medium Urbanist  hidden group-hover:block'>
                  {item.location}
                </p>
              </div>
              <div>
                <Link href={item?.link ? item?.link : '#'}
                  className='text-main bg-white md:text-[18px] md:leading-[28px] font-bold Urbanist px-6 py-2 rounded-tl-[16px] float-right hidden group-hover:block '>
                  <span className='flex items-center capitalize space-x-1'>
                    Read more <BsArrowRightShort size={28} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div>
        <Link href="#"
          className='text-white bg-main hover:bg-main/90 md:text-[18px] md:leading-[28px] font-bold Urbanist px-6 py-2 rounded-[16px] float-right'>
          Read more
        </Link>
      </div>
    </motion.div>
  )
}

export default CompanyNews

export const News_datas = [
  {
    title: "The Macao JAE E-Book Gift Scheme” benefits the freshmen of Macao.",
    content: "In order to help fresh candidates prepare for the exam during the epidemic, Good Time Xian Ju Club and a number of experts jointly planned the Four Universities Joint Entrance Examination E-book Gift Plan. Thousands of fresh graduates benefited.",
    publish: "Hong Kong 2020/04/03",
    linkTxt: "Learn More",
    feature: News_One,
  },
  {
    title: "Beijing and Macao teachers co-edited an E-book to help Macao students take part in the JAE.",
    content: "The event strengthened the exchanges between the educational circles in Macao and Beijing.  Nine e-books have been donated to more than 20 schools in Macao for free, benefiting more than 1,500 students.",
    publish: "Hong Kong 2020/04/03",
    linkTxt: "Learn More",
    feature: News_Two,
  },
  {
    title: "JAE E-book benefited thousand five thousand.",
    content: " Last year, there were about 4,700 candidates for the Joint Examination of the Four Macao Universities. The book donation program helped about 30% of the candidates prepare for the exam.",
    publish: "Hong Kong 2020/04/03",
    linkTxt: "Learn More",
    feature: News_Three,
  },
]
