export const site = {
  name: "Abhishek Jaiswar",
  firstName: "Abhishek",
  initials: "AJ",
  role: "Software Engineer",
  location: "Mumbai, India",
  timezone: "IST · UTC+5:30",
  email: "txcorp@tridex.in",
  github: "https://github.com/Abhishek-Jaiswar",
  linkedin: "https://www.linkedin.com/in/abhishek-jaiswar12/",
  resume: "/resume.pdf",
  avatar: "/abhishek-hero.png",
  status: "Open to full-time & contract work",
  hero: {
    eyebrow: "Software Engineer",
    headline: "Business rules are messy. Software shouldn’t be.",
    intro:
      "I build complete web applications from the ground up. I work with businesses to understand their real needs, then design and create software that is reliable, easy to use, and built to last. My focus is turning complicated requirements into clear, well-built products that actually work in the real world.",
    currently: {
      label: "Currently building",
      title: "Web applications at CBS Software",
      description:
        "Full-stack features, secure APIs, and database systems for client products.",
    },
  },
  about: [
    "I'm a software engineer based in Mumbai, currently building and maintaining scalable web applications at CBS Software Private Limited. I work across the stack — React and Next.js on the front end, Node.js and Express on the back end, and PostgreSQL and MongoDB for data.",
    "I care about clean architecture, secure APIs, and software that stays maintainable as it grows. I'm open to full-time and contract opportunities where I can build reliable products end to end.",
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Work" },
  { href: "/how-i-build", label: "How I Build" },
  { href: "/editorials", label: "Writing" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export const socials = [
  { label: "GitHub", href: site.github, handle: "@Abhishek-Jaiswar" },
  { label: "LinkedIn", href: site.linkedin, handle: "in/abhishek-jaiswar12" },
  { label: "Email", href: `mailto:${site.email}`, handle: site.email },
] as const;

export const facts = [
  { label: "Based in", value: "Mumbai, India" },
  { label: "Focus", value: "Software engineering · Full-stack web" },
  { label: "Currently", value: "CBS Software Private Limited" },
  { label: "Education", value: "BSc Computer Science, University of Mumbai" },
] as const;

export const stats = [
  { value: "10+", label: "Products shipped" },
  { value: "15+", label: "Corporate clients" },
  { value: "30%", label: "API Latency Reduced" },
  { value: "2+ Years", label: "Professional experience" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "SQL", "HTML & CSS"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Authentication & RBAC",
    ],
  },
  {
    title: "Practices & Tools",
    items: [
      "Git & version control",
      "CI/CD workflows",
      "Clean architecture",
      "Testing & debugging",
      "Performance optimization",
    ],
  },
] as const;

export const marqueeItems = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "Git",
  "CI/CD",
] as const;

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    period: "Jun 2026 — Present",
    role: "Full Stack Developer",
    company: "CBS Software Private Limited",
    location: "Mira Bhayandar, Maharashtra · On-site",
    current: true,
    summary:
      "Building and maintaining scalable web applications across the stack with React, Next.js, Node.js, Express, PostgreSQL, and MongoDB.",
    highlights: [
      "Design, develop, and maintain RESTful APIs and backend services with Node.js and Express.",
      "Architect database schemas, relationships, and performance optimization for PostgreSQL and MongoDB.",
      "Build responsive frontends with React.js, Next.js, and modern UI frameworks.",
      "Implement authentication, authorization, role-based access control (RBAC), and secure API practices.",
      "Optimize performance through efficient queries, indexing strategies, caching, and code improvements.",
      "Own code reviews, testing, deployment, and production issue resolution with cross-functional teams.",
    ],
  },
  {
    period: "Mar 2026 — Jun 2026",
    role: "Junior Full-Stack Developer",
    company: "CBS Software Private Limited",
    location: "Mira Bhayandar, Maharashtra · On-site",
    summary:
      "Shipped feature modules and improved the performance of client-facing web applications.",
    highlights: [
      "Developed and integrated business-critical modules, workflows, and automation features.",
      "Worked across the React and Node.js stack with clean, maintainable code.",
      "Followed engineering best practices — version control, code reviews, and CI/CD workflows.",
    ],
  },
  {
    period: "Oct 2025 — Jan 2026",
    role: "Web Development Intern",
    company: "KartBuddy Logistics Pvt. Ltd.",
    location: "Saki Naka, Maharashtra · Hybrid",
    summary:
      "Contributed to user-facing web applications and front-end component development.",
    highlights: [
      "Built responsive UI components with React.js and JavaScript.",
      "Integrated backend APIs to display dynamic data.",
      "Collaborated with senior developers in daily stand-ups and sprint planning.",
    ],
  },
];

export interface Education {
  period: string;
  degree: string;
  institution: string;
  grade?: string;
  summary: string;
  activities: string[];
}

export const education: Education[] = [
  {
    period: "2022 — 2025",
    degree: "BSc in Computer Science",
    institution: "University of Mumbai",
    grade: "8.1",
    summary:
      "Strong foundation in core computer science — data structures, algorithms, database management systems, and web development — applied through projects, coding challenges, and the software development lifecycle.",
    activities: [
      "Coding Club member — participated in hackathons and coding competitions.",
      "Organized web-development and competitive-programming workshops at the annual tech fest.",
      "Open Source Community member — contributed to small open-source projects.",
    ],
  },
];
