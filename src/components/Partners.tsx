import { Container } from "@/constant/imports";
import Image from "next/image";
import { P1, P2, P3, P4, P5 } from "public/images/imports";
import React from "react";
import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/animation";
import Slider from "react-slick";

const Partners = ({ partners }) => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.h2
        variants={fadeUp}
        className="sub-heading text-main text-center mb-6"
      >
        Our Partners
      </motion.h2>
      <div className="bg-light-pink/20 mt-10 py-8 grid items-center">
        <Container>
          <Slider
            {...settings}
            style={{ display: "grid", alignItems: "center" }}
          >
            {partners.map((item:any, idx:number) => {
              return (
                <div key={idx} className="grid items-baseline">
                  <Image
                    src={item?.logo?.asset?.url}
                    alt="partner"
                    className="scale-75 hover:scale-100 transform transition-[0.4s]"
                    width={200}
                    height={30}
                  />
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    </motion.section>
  );
};

export default Partners;
