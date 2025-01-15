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
          GPA: 3.96/4
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
        <p>JavaScript, TypeScript, Java, Dart, Python, C/C++, HTML/CSS, Ruby, SQL, GraphQL, R, Verilog</p>
        <p className="font-bold mt-4">-Frameworks:</p>
        <p>React, React Native, ThreeJS, NextJS, RemixJS, Flutter, Django, Flask, Springboot, Ruby on Rails</p>
        <p className="font-bold mt-4">-Databases & Tools:</p>
        <p>Git, Jira, AWS, GCP, MySQL, MongoDB, PostgreSQL, Docker, Kubernetes, Figma, Postman, Cypress</p>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "work-experience",
    content: (
      <div className="space-y-6">
        <div>
          <p className="font-bold">Promaxo</p>
          <p>Jun 2024 – Sep 2024 (Summer Intern), Sep 2024 – Present (Coop)</p>
          <p className="italic">Software Engineer Intern/Coop | Oakland, CA</p>
          <ul className="list-disc pl-6">
            <li>
              Designed and built features for an innovative <strong>medical imaging platform and case management system</strong> which reduced image processing time by <strong>30%</strong> and improved the efficiency of managing patient information by <strong>25%</strong>.
            </li>
            <li>
              Integrated <strong>Google Cloud Healthcare</strong> to ensure <strong>HIPAA-compliant</strong> storage and secure transmission of patient data, significantly enhancing security and confidentiality. Developed and deployed <strong>AWS Lambda functions</strong> to automate the extraction and processing of <strong>DICOM</strong> image data, enabling the machine learning team to access and analyze healthcare datasets in real-time.
            </li>
            <li>
              Collaborated with <strong>cross-functional teams</strong> (software, imaging, product, data science, and clinical) to gather requirements and ensure the development process remained on track. Implemented features using <strong>React, Node.js, Express, MongoDB, and GCP</strong>.
            </li>
            <li>
              Developed a scalable test framework using <strong>TDD</strong>, increasing test coverage to <strong>80%</strong> across unit, integration, and end-to-end tests with <strong>Cypress</strong>. Leveraged <strong>OOD principles</strong> to minimize redundant code and streamline the testing process, improving development efficiency.
            </li>
            <li>
              Enhanced the <strong>CI/CD</strong> pipeline, integrating <strong>automated testing, npm audits, secret scans, and SonarCloud checks</strong>, reducing deployment time by <strong>20%</strong> and ensuring high code quality.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Lenovo</p>
          <p>May 2024 – Dec 2024</p>
          <p className="italic">Software Engineer Intern | Remote</p>
          <ul className="list-disc pl-6">
            <li>
              Developed an immersive <strong>3D collaborative workplace application</strong> using <strong>Three.js, Vue, and Socket.IO</strong>, implementing <strong>DragControls</strong> and <strong>TransformControls</strong> to let users intuitively manipulate objects on the shared canvas, with control over position, rotation, and scaling. Achieved accurate synchronization across clients for a cohesive experience.
            </li>
            <li>
              Built a robust commenting feature using <strong>Express</strong> and a <strong>microservices architecture</strong>, enabling real-time collaboration with enhanced fault tolerance and maintainability. Optimized performance, reducing response time for key user actions by <strong>25%</strong>.
            </li>
            <li>
              Developed <strong>environment switching</strong> and <strong>synchronized camera views</strong>, enhancing collaborative workflows and ensuring a cohesive user experience by enabling seamless context switching with visual continuity.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Datatrixs</p>
          <p>Mar 2024 – Jun 2024</p>
          <p className="italic">Software Engineer Intern | San Francisco, CA</p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Led a team</strong> to utilize the <strong>MERN stack</strong> to build a full-stack application with a serverless architecture that empowers CPAs by automating their workflow with data visualization tools.
            </li>
            <li>
              Attended <strong>investors&apos; sync meetings</strong>, improved site performance and user satisfaction based on client feedback, and designed and implemented tab and AI chart generation features, resulting in a <strong>50%</strong> increase in follow-on investment.
            </li>
            <li>
              Reconstructed the <strong>MongoDB schema</strong> and token-based authentication flow, optimizing data transmission and sharing, directly contributing to <strong>2 new companies&apos; investments</strong>.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Cooledtured Collections</p>
          <p>Nov 2023 – Mar 2024</p>
          <p className="italic">Full Stack Web Developer Intern | Burbank, CA</p>
          <ul className="list-disc pl-6">
            <li>
              Contributed to migrating Cooledtured&apos;s storefront from Shopify&apos;s front-end to a React-based custom headless e-commerce stack <strong>(Shopify Hydrogen + Remix.js)</strong>, enhancing scalability, performance, and faster page load times.
            </li>
            <li>
              Developed the website using <strong>React</strong> with <strong>TypeScript</strong> and <strong>Tailwind</strong> in collaboration with UI/UX teams.
            </li>
            <li>
              Implemented a robust <strong>GraphQL-based</strong> search engine with predictive search and product recommendations, resulting in increased session duration, user engagement, a <strong>15%</strong> boost in product discovery, and a <strong>10%</strong> rise in sales conversions.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Cousework",
    id: "coursework",
    content: (
      <ul className="list-disc pl-2">
        <li>Image and Video Compression</li>
        <li>Mobile Development</li>
        <li>Advanced Web Development</li>
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
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 h-auto">
          <Image 
            src="/images/about.png" 
            layout="responsive" 
            width={500} 
            height={400} 
            objectFit="cover" 
            alt="About me"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-cyan-600">About Me</h2>
          <p className="text-base lg:text-lg text-gray-600 mt-2">
            I am a driven and passionate <strong>software engineer</strong> and <strong>fullstack developer</strong>. 
            I have experience working with <strong>JavaScript, Java, MERN stack, Django</strong>, and a wide range 
            of tools and frameworks. I&apos;m eager to collaborate with cutting-edge 
            technologies and take on diverse projects to continually enhance my skills and 
            expertise. Confident in my ability to tackle complex challenges, I bring a 
            strong sense of problem-solving and adaptability to any team. 
            My goal is to contribute to meaningful projects that challenge me to grow 
            while making a tangible impact. <strong>Let&apos;s connect and create something 
            remarkable together!</strong>
          </p>
          <div className="flex space-x-4 mt-4" style={{overflowX: "auto" }}>
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
          <div
            className="bg-white shadow rounded-lg p-6 mt-4"
            style={{ height: "400px", overflowY: "auto" }}
          >
            {currentTabContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
