"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Build a responsive and customizable portfolio website using NextJs and Tailwind.",
    image: "/",
    tag: ["All", "Web"],
    gitUrl: "raphaeldu98/nextjs-portfolio",
    haveGithub: true,
  },
  {
    id: 2,
    title: "Full Stack Web Developer Internship at Cooledtured Collections",
    description: "Contributed significantly to the migration of Cooledtured's storefront from Shopify's front-end to a custom Headless e-commerce solution (Shopify Hydrogen + React/Remix.js), resulting in faster page load. This transition unlocked greater scalability for future growth and enhanced the platform's performance. \n\n Collaborated with UI/UX and Web Dev teams to build website using React with TypeScript and Tailwind CSS resulting in an increase in average session duration and improved user engagement. \n\n Implemented a robust search engine using GraphQL, with predictive search features and integrated product recommendations, driving a 15% boost in product discovery and a 10% rise in sales conversions. This enhancement significantly improved user engagement metrics.\n\nIdentified and resolved user-reported bugs and performance issues, continuously improving site performance, and implementing iterative enhancements to ensure sustained user satisfaction and increased conversions.",
    image: "/",
    tag: ["All", "Web"],
    gitUrl: "",
    haveGithub: false,
  },
  {
    id: 3,
    title: "Video Game Sharing platform",
    description: "Built a thriving user review and recommendation platform for video games, empowering players to find their next obsession. Fueled by the MERN stack, I crafted a dynamic full-stack web app for video game enthusiasts to connect, share, and discover.\n\n Built a RESTful API in Node.js with Express, seamlessly integrating with MongoDB to power data retrieval and storage. Designed dynamic user interface with React as the front-end and created custom hooks for state control between authorized and unauthorized modes.",
    image: "/",
    tag: ["All", "Web"],
    gitUrl: "",
    haveGithub: false,
  },
  {
    id: 4,
    title: "Restaurant Management System API",
    description: "Architected and implemented REST APIs, leveraging the Django REST Framework, enabling a range of functions, including menu-item management, cart operations, and order processing. \n\n Orchestrated seamless integration with Django models, ensuring data consistency and timely updates within the MySQL database. \n\nImplemented various features such as authentication, search functionality, pagination, and API throttling for different users and use Insomnia to test and debug API.",
    image: "/",
    tag: ["All", "Web"],
    gitUrl: "",
    haveGithub: false,
  },
  {
    id: 5,
    title:
      "Estimating ground-level PM2.5 using micro-satellite images, meteorological and temporal information",
    description:"Designed an Implicit Composite Kernel-Random Forest (ICK-RF) model that predicts local PM2.5 hotspots at a 300 m resolution using satellite imagery, and meteorological, spatial, and temporal information.\n\nUtilized Convolutional Neural Network (CNN) to extract micro-satellite image features that characterize daily dynamic changes. Implemented a Random Forest (RF) regressor to estimate PM2.5 based on the extracted image features along with meteorological conditions and presented an Implicit Composite Kernel framework to incorporate seasonal information.",
    image: "",
    tag: ["All", "ML"],
    gitUrl: "/",
    haveGithub: false,
  },
  {
    id: 6,
    title:
      "Deep Learning Recommender System for variational outputs",
    description:"Built a neural network architecture to model latent features of users and items and devise a general framework NCF for collaborative filtering based on neural networks.\n\nPerformed a Variational autoencoder (VAE) to train the user-item interaction function combined with generalized matrix factorization to make our recommender system output similar but variational outputs for the same user.",
    image: "",
    tag: ["All", "ML"],
    gitUrl: "/",
    haveGithub: false,
  },
  {
    id: 7,
    title:
      "Face Mask Detection Classifier using CNN",
    description:"Predicted whether a person wears a mask, does not wear a mask, or wears a mask in an incorrect way.\n\nUtilized cascade classifier from OpenCV to extract face mask image.\n\nConstructed CNN from scratch, transferred learning ResNet and Alexnet, addressed the data imbalanced problem and compared model performance.",
    image: "",
    tag: ["All", "ML"],
    gitUrl: "/",
    haveGithub: false,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const renderDescription = (description: string) => {
    return description.split('\n\n').map((line, index) => (

    <ul className="list-disc pl-2">
      <li className="mb-4">
        {line}
      </li>
    </ul>
    ));
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold  mt-4 mb-4 md:mb-6">
        My Projects
      </h2>
      <p className="text-center">Still updating and working on projects page, not finished</p>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-1 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={renderDescription(project.description)}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              haveGithub={project.haveGithub}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
