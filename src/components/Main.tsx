import { Container } from "@/constant/imports";
import Image from "next/image";
import { HeroImage } from "public/images/imports";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { motion, Variants } from "framer-motion";
import { fadeUp } from '@/animation';

const Main = () => {

  return (
    <motion.main
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="py-20  mianbg flex flex-col items-center justify-center mt-36 md:mt-[87px]">
      <Container small={true}>
        <section className="grid md:grid-cols-2 gap-20 justify-between items-center">
          <motion.div variants={fadeUp}>
            <span className="font-semibold text-main uppercase">CREATE A BETTER LEARNING FUTURE WITH US</span>
            <h1 className="main-heading">The Largest AI Education Platform in Hong Kong and Macau</h1>
            <p className="text-gray-600 leading-8 font-normal">
              ExamHero is an enterprise that solves learning problems with
              artificial intelligence (AI) systems. We insist on continuously
              bringing users better learning and using experiences, creating the
              best learning results, and are committed to making high-quality
              education within easy reach, learning and evaluation.
            </p>
            <button className="button p-3 mt-5">
              Get Started Today <BsArrowRightShort />
            </button>
          </motion.div>
          <motion.div variants={fadeUp}
           className="p-10 pt-0 md:pt-10">
            <Image
              src={HeroImage}
              alt="main-image"
              width={610}
              height={762}
            />
          </motion.div>
        </section>
      </Container>
    </motion.main>
  );
};

export default Main;
