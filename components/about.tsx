/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have 4.5 years of experience in the Healthcare IT industry.
        I am a Master's in Computer Science graduate from New Jersey Institute of Technology.
        My passion for programming enables me to develop essential solutions. My interests lie in databases and full-stack development.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading books, watching movies, and strolling in the park. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently learning{" "}
        <span className="font-medium">Spanish</span>.
      </p>
    </motion.section>
  );
}
