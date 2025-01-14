"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {SocialIcon} from 'react-social-icons';
import { motion } from "framer-motion";
import Link from "next/link";

const Introduction = () => {
  return (
    <section className="lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 md:col-span-8 place-self-center text-center sm:text-left justify-self-start mr-4"
        >
          <h1 className=" mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi! I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Chenyang Du",
                1000,
                "a Software Engineer",
                1000,
                "a Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base sm:text-md lg:text-lg">
          A dedicated and enthusiastic Master&apos;s student in Computer Science at Santa Clara University, specializing in <span className="font-bold">Software Engineering</span> and <span className="font-bold">Full Stack Development</span>.
          </p>
          <p className="text-base sm:text-md lg:text-lg">Currently looking for SDE Full time/Intern opportunities.</p>
          <div>
            <div className="inline-block">
              <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 16}}>
              <li className="hover:scale-110 transition-transform duration-150" style={{ marginRight: '10px' }}>
                  <SocialIcon url="https://leetcode.com/raphaeldu98/" style={{ height: 40, width: 40 }}/>
                </li>
                <li className="hover:scale-110 transition-transform duration-150" style={{ marginRight: '10px' }}>
                  <SocialIcon url="https://github.com/raphaeldu98" style={{ height: 40, width: 40 }}/>
                </li>
                <li className="hover:scale-110 transition-transform duration-150">
                  <SocialIcon url="https://www.linkedin.com/in/chenyang-du-359913156/" style={{ height: 40, width: 40 }}/>
                </li>
              </ul>
            </div>
            <a
                href="/files/Resume.pdf" 
                download="Chenyang_Du_Resume.pdf" 
                className="inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                See my Resume
                </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 md:col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-grey w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
