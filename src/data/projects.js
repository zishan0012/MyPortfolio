import adkryossImg from "../assets/project-img/adkryoss-img.png";
import edulinkerImg from "../assets/project-img/edulinker-img.png";
import flipkartcloneImg from "../assets/project-img/flipkartclone-img.png";
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
    id: "flipkart-clone",
    title: "Flipkart Clone – E-Commerce Web Application",
    subtitle: "Responsive E-Commerce Platform with Modern Shopping UI",
    shortDescription:
      "A responsive e-commerce web application inspired by Flipkart, built with React.js, JavaScript, and Tailwind CSS.",
    description:
      "A modern e-commerce interface designed to replicate core shopping experiences such as product browsing, category navigation, product listings, and responsive layouts. The application focuses on reusable React components, clean UI structure, and a smooth shopping experience across desktop, tablet, and mobile devices.",
    image: flipkartcloneImg,
    techStack: [
      "React 18",
      "JavaScript / JSX",
      "Vite",
      "React Router DOM",
      "Tailwind CSS",
      "Lucide React",
      "React Context API",
      "Canvas Confetti"
    ],
    features: [
      "Responsive e-commerce interface with mobile, tablet, and desktop support.",
      "Product browsing and category-focused layouts inspired by modern shopping platforms.",
      "Reusable React components for product cards, navigation, banners, and UI sections.",
      "Clean and interactive shopping interface with structured product presentation."
    ],
    challenges: [
      "Creating a responsive e-commerce layout that maintains consistent spacing and usability across different screen sizes.",
      "Building reusable components while keeping the product-focused UI clean and maintainable."
    ],
    solutions: [
      "Implemented responsive Tailwind CSS layouts with reusable React components for consistent UI behavior.",
      "Structured the application into reusable product and navigation components to simplify development and future updates."
    ],
    liveUrl: "https://flipkart-clone-dun-five.vercel.app/",
    githubUrl: "https://github.com/zishan0012/Flipkart-Clone",
    category: "Frontend"
  }
];
