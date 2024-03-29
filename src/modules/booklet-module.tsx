import { Container } from "@/constant/imports";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/animation";

const BookletModule = () => {
  return (
    <motion.main
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="md:mt-[87px] registorbg py-[140px]">
      <Container>
        <div className="grid md:grid-cols-2 items-center">
          {/* Redeem Gift Card */}
          <motion.div
            variants={fadeUp}>
            <h3 className="sub-heading text-main">Want to Know More?</h3>
            <p className="max-w-[320px] mt-4 text-xl font-bold">
              You will get a free booklet of our popular program!
            </p>
            <Image
              src="/images/registor-left.png"
              alt="image"
              width={500}
              height={500}
            />
          </motion.div>
          <div className="mt-6 md:mt-0">
            <form>
              <div className="grid md:grid-cols-2 md:gap-8">
                <div>
                  <label className="block mb-2 text-sm text-gray-900 font-semibold">
                    <span className="text-red-600 text-lg mr-1">*</span>First
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 input2"
                    placeholder="First name..."
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-900 font-semibold">
                    <span className="text-red-600 text-lg mr-1">*</span>Last
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 input2"
                    placeholder="Last name..."
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>Email:
                </label>
                <input
                  type="email"
                  className="w-full p-4 input2"
                  placeholder="Enter your email address..."
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>
                  School/Institution Name:
                </label>
                <input
                  type="text"
                  className="w-full p-4 input2"
                  placeholder="Enter your school.."
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>Job Title:
                </label>
                <input
                  type="text"
                  className="w-full p-4 input2"
                  placeholder="Enter your title.."
                  required
                />
              </div>
              <div className="mt-4 relative">
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>Interested Feature:
                </label>
                <select
                  id="countries"
                  className="selectType w-full p-4 text-gray-400"
                >
                  <option selected>Select</option>
                  <option value="E-mock exam and intelligent evaluation system">E-mock exam and intelligent evaluation system </option>
                  <option value="Intelligent school-based e-learning resource library">Intelligent school-based e-learning resource library</option>
                  <option value="Intelligent adaptive learning platform">Intelligent adaptive learning platform</option>
                  <option value="Intelligent adaptive learning platform">Comprehelp - AI question generator</option>
                </select>
                {/* <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  className="absolute right-4 bottom-4"
                  width={25}
                  height={25}
                /> */}
              </div>
              <div className="flex w-full justify-center mt-6">
                <Link href="/thank-you" className="button px-8 mt-4 font-bold p-3">Submit</Link>
              </div>

            </form>
          </div>
        </div>
      </Container>
    </motion.main>
  );
};

export default BookletModule;
