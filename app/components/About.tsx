"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-bold">Santa Clara University</span> <br/>
          Master of Science in Computer Science<br/>
          GPA: 4.0/4
        </li>
        <br/>
        <li>
          <span className="font-bold">Duke Univeristy</span> <br/>
          Master of Science in Risk Enigineering<br/>
          GPA: 3.81/4
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <p className="font-bold">-Language:</p>
        <p>Java, JavaScript, C++, Python, HTML/CSS, SQL, GraphQL, R, Verilog</p>
        {/* <ul className="grid grid-cols-3 gap-2 pl-2 mb-2 ml-4">
          <li>Java</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>Python</li>
        </ul> */}
        <p className="font-bold mt-4">-Frameworks:</p>
        <p>Django, React, Tailwind CSS, Node.js, Next.js, Remix.js, PyTorch, Shopify Hydrogen</p>
        {/* <ul className="grid grid-cols-3 gap-2 pl-2 mb-2 ml-4">
          <li>React</li>
          <li>Django</li>
          <li>PyTorch</li>
          <li>Node.js</li>
        </ul> */}
        <p className="font-bold mt-4">-Databases & Tools:</p>
        <p>Git, GitHub, Shell, Docker, Linux, MySQL, MongoDB, LaTeX</p>
        {/* <ul className="grid grid-cols-3 gap-2 pl-2 mb-2 ml-4">
          <li>Git</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>LaTeX</li>
        </ul> */}
      </div>
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
        <li>Object Oriented Programming</li>
        <li>Natural Language Processing</li>
        <li>Deep learning</li>
        <li>Machine learning</li>
        <li>Bayesian Statistical Modeling</li>
        <li>Risk and Resilience Engineering</li>
        <li className="font-bold rounded">Still passionate learning more ......</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
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
            I am a driven and passionate software engineer and fullstack developer. 
            I have experience working with Java, JavaScript, React, Node.js, Express, GraphQL,
            Python, Django and Git. I&apos;m eager to collaborate with cutting-edge 
            technologies and take on diverse projects to continually enhance my skills and 
            expertise. Confident in my ability to tackle 
            complex challenges, I bring a strong sense of problem-solving and 
            adaptability to any team. With a track record of delivering high-quality 
            software solutions, I&apos;m ready to contribute effectively from day one.
          </p>
          <div className="flex space-x-4">
            {TAB_DATA.map((tabData) => (
                <TabButton
                  key={tabData.id}
                  selectTab={() => handleTabChange(tabData.id)}
                  active={tab === tabData.id}
                  className=""
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
