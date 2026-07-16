export const projectsData = [
  {
    id: "adkryoss-platform",
    title: "AdKryoss Digital Marketing Platform",
    subtitle: "Full-Stack Marketing Calculator & Lead Capture Portal",
    shortDescription: "A comprehensive digital marketing hub featuring SEO, PPC, and CRO calculators with integrated lead generation capabilities.",
    description: "AdKryoss is a premium full-stack digital marketing platform designed to empower businesses with instant advertising insights. It features interactive marketing calculators that estimate campaign costs, conversion rates, and ROI, and captures business inquiries via a robust Node.js and MongoDB backend.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
    id: "hiring-website",
    title: "ClinkHR Hiring & HR Solutions Website",
    subtitle: "Enterprise HR Solutions & Recruitment Portal",
    shortDescription: "A modern responsive corporate website showcasing recruitment, payroll, and workforce services with dynamic UI elements.",
    description: "Developed and maintained the core public-facing web solution for ClinkHR. It features an interactive service showcase, client review matrices, and smooth responsive navigation modules designed to establish trust and simplify payroll and recruitment inquiries.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b904737c88?auto=format&fit=crop&w=800&q=80",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide React", "Vercel"],
    features: [
      "Fluid animated interactive service cards illustrating payroll and talent solutions.",
      "Highly optimized page assets and lazy-loading configurations yielding perfect performance scores.",
      "Responsive navigation drawer and sticky glass navbar optimized for mobile viewports.",
      "Fully accessible form modules for candidate applications and client intake."
    ],
    challenges: [
      "Migrating legacy static styling into modular utility-first structure while preserving the company branding.",
      "Optimizing complex service diagrams to scale seamlessly on varying displays."
    ],
    solutions: [
      "Built a custom Tailwind configuration system matching the company's corporate identity guidelines.",
      "Used responsive flex grids and SVG icons to allow layouts to adapt fluidly."
    ],
    liveUrl: "https://clink-hr-2.vercel.app/",
    githubUrl: "https://github.com/zishan0012/clink-hr-2",
    category: "Frontend"
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
    liveUrl: "https://zishan-bmi.vercel.app", // Mock live url
    githubUrl: "https://github.com/zishan0012/BMI",
    category: "Frontend"
  }
];
