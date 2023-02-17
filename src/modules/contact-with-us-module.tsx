import { Container } from "@/constant/imports";
import Image from "next/image";
import React from "react";

const ConatactWithUsModule = () => {
  return (
    <main className="md:mt-[87px] contactusbg py-[140px]">
      <Container>
        <div className="grid md:grid-cols-2 gap-2 md:gap-28 items-center">
          {/* Redeem Gift Card */}
          <div className="mt-6 md:mt-0">
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
                  <span className="text-red-600 text-lg mr-1">*</span>Number of
                  Learners:
                </label>
                <select
                  id="countries"
                  className="input2 w-full p-4 text-gray-400"
                >
                  <option selected>Select</option>
                  <option value="US">1</option>
                  <option value="CA">2</option>
                  <option value="FR">3</option>
                  <option value="DE">4</option>
                </select>
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  className="absolute right-4 bottom-4"
                  width={25}
                  height={25}
                />
              </div>
              <div className="mt-4 relative">
                <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span>Interested Feature:
                </label>
                <select
                  id="countries"
                  className="input2 w-full p-4 text-gray-400"
                >
                  <option selected>Select</option>
                  <option value="US">1</option>
                  <option value="CA">2</option>
                  <option value="FR">3</option>
                  <option value="DE">4</option>
                </select>
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  className="absolute right-4 bottom-4"
                  width={25}
                  height={25}
                />
              </div>
          </div>
          <div className="mt-6 md:mt-0">
               <label className="block mb-2 text-sm text-gray-900 font-semibold">
                  <span className="text-red-600 text-lg mr-1">*</span> Anything you would like to ask: 
                </label>
               <textarea className="input2 w-full h-[200px] md:h-[480px]"></textarea>
               <div className="flex w-full justify-center mt-6">
               <button className="button px-8 mt-4 font-bold p-3">Submit</button>
               </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ConatactWithUsModule;
