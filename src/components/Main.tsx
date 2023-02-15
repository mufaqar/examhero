import { Container } from "@/constant/imports";
import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Main = () => {
  return (
    <main className="h-screen bg-light-pink flex flex-col items-center justify-center">
      <Container small={true}>
        <section className="grid md:grid-cols-2 gap-20 justify-between items-center">
          <div>
            <span>Better Learning Future With Us</span>
            <h1>The Largest AI Education Platform in Hong Kong and Macau</h1>
            <p>
              ExamHero is an enterprise that solves learning problems with
              artificial intelligence (AI) systems. We insist on continuously
              bringing users better learning and using experience, creating the
              best learning results, and are committed to making high-quality
              education within easy reach, learning and evaluation.
            </p>
            <button className="button">
              Get Started Today <BsArrowRightShort />
            </button>
          </div>
          <div className="lg:p-10">
            <Image
              src="/images/hero-image.png"
              alt="main-image"
              width={610}
              height={762}
            />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Main;
