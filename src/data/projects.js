import adkryossImg from "../assets/project-img/adkryoss-img.png";
import edulinkerImg from "../assets/project-img/edulinker-img.png";

export const projectsData = [
  {
    id: "adkryoss-platform",
    title: "AdKryoss Digital Marketing Platform",
    subtitle: "Full-Stack Marketing Calculator & Lead Capture Portal",
    shortDescription: "A comprehensive digital marketing hub featuring SEO, PPC, and CRO calculators with integrated lead generation capabilities.",
    description: "AdKryoss is a premium full-stack digital marketing platform designed to empower businesses with instant advertising insights. It features interactive marketing calculators that estimate campaign costs, conversion rates, and ROI, and captures business inquiries via a robust Node.js and MongoDB backend.",
    image: adkryossImg,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "Framer Motion"],
    features: [
      "Dynamic SEO ROI & Pay-Per-Click campaign estimators with visual metrics.",
      "Custom inquiry lead-capture forms saving submission data directly to MongoDB Atlas.",
      "Interactive marketing dashboard designed with premium dark glassmorphic components.",
      "Responsive, clean UI optimizing service showcases and conversions."
    ],
    challenges: [
      "Integrating real-time marketing mathematical formulas across various campaign types without causing render lags.",
      "Ensuring high responsiveness of calculations on mobile devices."
    ],
    solutions: [
      "Decoupled computation logic into optimized pure utility helper functions and utilized React state memoization.",
      "Applied a mobile-first Tailwind design grid to keep visual elements consistent across screens."
    ],
    liveUrl: "https://adkryoss-new.vercel.app/",
    githubUrl: "https://github.com/zishan0012/AdkryossNew",
    category: "Full-Stack"
  },
  {
    id: "edulinker",
    title: "EduLinker – Full Stack Learning Platform",
    subtitle: "MERN-Based Educational Platform with User Authentication",

    shortDescription:
      "A full-stack educational platform built with the MERN stack, featuring secure user authentication, responsive UI, and an engaging learning experience.",

    description:
      "Developed EduLinker, a full-stack MERN educational platform that enables users to register, log in securely, and explore educational resources through a modern, responsive interface. Built using React.js, Node.js, Express.js, and MongoDB, the application integrates JWT-based authentication, RESTful APIs, and reusable component architecture to deliver a scalable and seamless user experience across all devices.",

    image: edulinkerImg,

    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST API",
      "Vite",
      "Git",
      "GitHub",
      "Vercel"
    ],

    features: [
      "Secure user authentication with Login and Signup using JWT.",
      "Modern responsive UI built with React.js and Tailwind CSS.",
      "RESTful API integration for user authentication and data management.",
      "Fast client-side routing with React Router for a seamless experience.",
      "Reusable component-based architecture for better scalability and maintainability.",
      "Fully responsive design optimized for desktop, tablet, and mobile devices."
    ],

    challenges: [
      "Implementing secure authentication while maintaining a smooth user experience.",
      "Managing frontend and backend integration using REST APIs.",
      "Designing a scalable project structure with reusable components.",
      "Ensuring responsive layouts across different screen sizes."
    ],

    solutions: [
      "Implemented JWT-based authentication with protected API endpoints.",
      "Used Express.js and MongoDB to build a secure and scalable backend.",
      "Organized the application into modular React components for maintainability.",
      "Applied Tailwind CSS responsive utilities to create a consistent user interface across devices."
    ],

    liveUrl: "https://edulinker.vercel.app/",
    githubUrl: "https://github.com/zishan0012/edulinker",

    category: "Full Stack"
  },
  {
    id: "bmi-calculator",
    title: "Advanced BMI Calculator & Health Portal",
    subtitle: "Responsive Body Mass Index Calculator & Fitness Advisor",
    shortDescription: "A full-stack fitness tool calculating BMI and delivering tailored health suggestions through a sleek interface.",
    description: "A fast, intuitive body mass index tracker built following mobile-first guidelines. It takes user height and weight inputs, performs backend-powered calculations and WHO classification (Underweight, Normal, Overweight, Obese), and provides recommendations for daily workouts and nutrition.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Animated circular progress gauge showing user's BMI position.",
      "Tailored wellness checklists and exercise advice based on individual classifications.",
      "Clean dark UI design prioritizing swift single-handed interaction on mobile screens.",
      "Express API endpoint handling calculations to support clean separation of concerns."
    ],
    challenges: [
      "Designing a fluid, hardware-accelerated animated progress gauge that loads without jank on mobile browsers.",
      "Displaying dynamic wellness lists efficiently."
    ],
    solutions: [
      "Created a customized SVG gauge using Tailwind transitions and Framer Motion's pathLength animation properties.",
      "Designed a clean data-driven UI card mapping classifications to respective healthy regimens."
    ],
    // liveUrl: "https://zishan-bmi.vercel.app", // Mock live url
    githubUrl: "https://github.com/zishan0012/BMI",
    category: "Frontend"
  }
];
