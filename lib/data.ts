import React from "react";
import { GrCloudComputer } from "react-icons/gr";
import { CgWorkAlt } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import fileCompressorImg from "@/public/filecompressor.png";
import independentlivingehrImg from "@/public/independentlivingehr.png";
import spotifysonicImg from "@/public/spotifysonic.png";
import winequalitypredictionImg from "@/public/winequalityprediction.png";

export const links = [
{
    name: "Home",
    hash: "#home",
},
{
    name: "About",
    hash: "#about",
},
{
    name: "Projects",
    hash: "#projects",
},
{
    name: "Skills",
    hash: "#skills",
},
{
    name: "Experience",
    hash: "#experience",
},
{
    name: "Contact",
    hash: "#contact",
},
] as const;

export const experiencesData = [
{
    title: "Software Engineer Intern",
    location: "Bengaluru, India",
    company: "Oracle Cerner",
    description:
    "I worked as a Software Engineer Intern for 6 months focusing on custom reporting in SQL, CCL and developing patient tracking dashboards \
    in React, Java and SQL.",
    icon: React.createElement(FaDatabase),
    date: "2018",
},
{
    title: "Software Engineer",
    location: "Bengaluru, India",
    company: "Oracle Cerner",
    description:
    "I worked as a Software Engineer for 4 years working on full stack applications and PL/SQL reporting for several hospitals. I mentored \
    several interns over 1 year implementing strategic roadmaps.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
},
{
    title: "Teaching Assistant",
    location: "Newark, NJ",
    company: "New Jersey Institute of Technology",
    description:
    "I'm work as a teaching assistant for Cloud Computing course at NJIT. I assist students with course projects and hold weekly office hours. \
    I monitor AWS EC2, S3, EMR resources and add necessary IAM policies in AWS Academy console for students",
    icon: React.createElement(GrCloudComputer),
    date: "2023 - present",
},
] as const;

export const projectsData = [
{
    title: "File Compressor",
    description:
    "I worked on this file compression/decompression utility for 2 months in Python Flask, that implements DEFLATE algorithm achieving \
    70% compression ratio. It is deployed in Heroku via GitHub Actions.",
    tags: ["Flask", "MongoDB", "Jinja", "Bootstrap", "Docker", "Heroku", "GridFs"],
    imageUrl: fileCompressorImg,
},
{
    title: "Independent Living EHR",
    description:
    "Community activity events board to recruit patients for Independent Living Centers(ILCs). It has features like patient search, \
    federal reporting tools, health records of patients in ILCs.",
    tags: ["React", "TypeScript", "Python", "OCI Database", "FASTAPI", "RESTful API", "Microservices", "Docker", "Heroku"],
    imageUrl: independentlivingehrImg,
},
{
    title: "Wine Quality Prediction",
    description:
    "A wine quality prediction application implemented in Apache Spark and AWS MapReduce using EMR. Training models trained in 4 parallel \
    EC2 instances to reduce processing time and deployed best model in Amazon S3.",
    tags: ["Amazon EMR", "Amazon S3", "Apache Spark", "MLlib", "Docker", "Python"],
    imageUrl: winequalitypredictionImg,
},
{
    title: "Spotify Sonic",
    description:
    "A spotify clone web application that enables users to add, remove favorite tracks, artists from Spotify API or add manual records. \
    It has features like user roles, session management, feature requests. It is deployed in Heroku using GitHub Actions.",
    tags: ["Flask", "Jinja", "SQL", "Bootstrap", "Docker", "Heroku"],
    imageUrl: spotifysonicImg,
}
] as const;

export const skillsData = [
    "Python",
    "Java",
    "C++",
    "C",
    "Go",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Ruby",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Flask",
    "Django",
    "Angular",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "Redux",
    "GraphQL",
    "Express",
    "Docker",
    "Kubernetes",
    "Git",
    "Azure",
    "GCP",
    "AWS S3",
    "AWS EC2",
    "AWS EMR",
    "AWS Rekognition",
    "AWS EKS",
    "AWS Lambda",
    "Linux"
] as const;