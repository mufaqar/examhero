import { Feedback, Giftcard, Main, Partners, WhatWeDo, WhyUs } from "@/components/imports";
import { Container } from "@/constant/imports";
import Image from "next/image";
import React from "react";
import { Benefit, Ebook, Mockpaper, SchoolUse } from "../../public/svg/imports";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/animation";
import CountUp from 'react-countup';


const StatsData = [
  {
    stats: 50,
    title: "schools use ",
    icon: SchoolUse,
  },
  {
    stats: 5000,
    title: "students benefited",
    icon: Benefit,
  },
  {
    stats: 8000,
    title: "mock papers distributed",
    icon: Mockpaper,
  },
  {
    stats: 10000,
    title: " eBook reading volumes",
    icon: Ebook,
  },
];

interface IStats {
  stats_no: number;
  info: string;
  logo: any;
  caption: string;
}

const HomeModule = ({data}) => {
  const { partners, whyus, stats, whatwedo, testimonials } = data
  return (
    <section>
      <Main />
      {/* our mission & vission */}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.h2
          variants={fadeUp}
          className="sub-heading text-main text-center mb-6">
          Our Mission and Vision
        </motion.h2>
        <Container small={true}>
          <motion.section
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-12 md:gap-20 my-16 mb-24">
            <div className="flex flex-col items-center justify-center bxs rounded-2xl p-6 px-10">
              <h3 className="font-bold text-3xl md:text-[32px] text-black mb-4">
                Mission
              </h3>
              <p className="text-center">
                To be the best partner for users on the road to success. Core
                Values: Professionalism, Integrity, Innovation, Cultivation,
                Personalized Learning, Mutual Achievement.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bxs rounded-2xl p-6 px-10">
              <h3 className="font-bold text-3xl md:text-[32px] text-black mb-4">
                Vision
              </h3>
              <p className="text-center">
                Use artificial intelligence to promote educational reform and
                innovation, break the current limitations of educational
                evaluation and personalized learning, and allow
                everyone to experience high-quality education.
              </p>
            </div>
          </motion.section>
        </Container>
      </motion.div>
      {/* partners section  */}
      <Partners partners={partners}/>
      <WhyUs whyus={whyus}/>
      {/* stats section */}
      <section >
        <div className="bg-light-pink/20 mt-10">
        
          <Container small={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center py-12 gap-10">
              {stats.map((item: IStats, idx: number) => {
                return (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <Image src={item?.logo?.asset.url} width={40} height={40} alt={item?.caption} />
                    <h3 className="sub-heading font-bold leading-10 text-main mt-5">
                      <CountUp start={0} end={item?.stats_no} duration={3} />+</h3>
                    <p className="text-main font-medium mt-2">{item?.info}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </div>
      </section>

      {/* what we do section  */}
      <WhatWeDo whatwedo={whatwedo}/>
      {/* feedback section  */}
      <Feedback testimonials={testimonials}/>
      {/* giftacard section  */}
      <Giftcard />

    </section>
  );
};

export default HomeModule;
