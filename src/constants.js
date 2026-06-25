// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import bv from './assets/education_logo/bv.webp';
import grm from './assets/education_logo/grm.webp';

// Project Section Logo's
import blog from './assets/work_logo/blog.png';
import flix from './assets/work_logo/flix.png';
import foodreel from './assets/work_logo/foodreel.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bv,
      school: "Banasthali Vidyapith, Rajasthan",
      date: "July 2023 - Ongoing",
      desc: "Pursuing B.Tech in Computer Science, gaining knowledge in programming, web development, and software engineering through academics and projects.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: grm,
      school: "GRM School",
      date: "2022-2023",
      desc: "Completed 12th grade with PCM (Physics, Chemistry, Mathematics)",
      degree: "class 12 - PCM",
    },
    {
      id: 2,
      img: grm,
      school: "GRM School",
      date: "2020-2021",
      desc: "Completed class 10 under the CBSE board.",
      degree: "class 10",
    },
  ];
  
  export const projects = [

    {
  id: 0,
  title: "RemedyCare - Full Stack Wellness Platform",
  description:
    "RemedyCare is a MERN stack wellness blog 🌿 where admins manage remedy posts  and users can read and comment . It includes JWT authentication , image uploads 📸, and is fully deployed on Vercel",
  image: blog, // replace with your actual logo variable
  tags: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS"
  ],
  github: "https://github.com/ananyagour29/NOTE.IT",
  webapp: "https://note-it-3kpw.vercel.app/"
},
   
    {
  id: 1, // Change the ID according to your array sequence
  title: "FOOD@REELS- Food Reels Platform",
  description: "FOOD@REELS is a food discovery platform 🍔 where users explore food reels 🍕 and visit food partner profiles 👤, while food partners upload and showcase their dishes 🍽️ through videos.",
  image: foodreel, // make sure 'flix' is imported or defined as the image variable
  // tags: ["React JS"],
  tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/ananyagour29/FOODREELS",
  webapp: "https://foodreels-y4dm.vercel.app/"
}
  ];  