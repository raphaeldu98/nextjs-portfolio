"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Santa Clara University</li>
        <li>Master of Science in Computer Science</li>
        <li>GPA: 4.0</li>
        <li></li>
        <li>Duke Univeristy</li>
        <li>Master of Science in Risk Enigineering</li>
        <li>GPA: 3.81</li>

      </ul>
    ),
  },
  {
    title: "Cousework",
    id: "coursework",
    content: (
      <ul className="list-disc pl-2">
        <li>Design and Analysis Algorithms</li>
        <li>Operating Systems</li>
        <li>Computer Architecture</li>
        <li>Artificial Intelligence</li>
        <li>Deep learning</li>
        <li>Machine learning</li>
        <li>Bayesian Statistical Modeling</li>
        <li>Risk and Resilience Engineering</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTabContent = TAB_DATA.find((t) => t.id === tab)?.content || <div>Content not found</div>;

  return (
    <section className="text-gray-800 bg-gray-50" id="about">
      <div className="container mx-auto px-4 py-12 md:grid md:grid-cols-2 gap-8 items-start xl:gap-16">
        <div className="mt-20 w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
          <Image src="/images/about.png" layout="fill" objectFit="cover" alt="" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col space-y-6">
          <h2 className="text-4xl font-bold text-cyan-600">About Me</h2>
          <p className="text-base lg:text-lg text-gray-600">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex space-x-4">
            {TAB_DATA.map((tabData) => (
                <TabButton
                  key={tabData.id}
                  selectTab={() => handleTabChange(tabData.id)}
                  active={tab === tabData.id}
                  className="bg-cyan-500 transition-colors duration-200 ease-in-out px-6 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  {tabData.title}
                </TabButton>
              ))}
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            {currentTabContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
