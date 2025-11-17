import AboutMe from "@/src/components/AboutMe";
import Education, { EducationItem } from "@/src/components/Education";
import Experience from "@/src/components/Experience";
import { Navbar } from "@/src/components/Header";
import Hero from "@/src/components/HeroSection";
import SelectedWork, { Project } from "@/src/components/SelectedWork";

import Image from "next/image";

export default function Home() {
    const projects: Project[] = [
  {
title: "Bakeryshop — Sweetify Mini Store",
summary: "Built a small bakery storefront for local orders with product pages, cart, and checkout.",
impact: "Daily orders ↑ 25% in first month",
image: "/project1.png",
href: "/work/bakeryshop",
tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Next/Image"]
},
  {
    title: 'E-commerce Speed + Core Web Vitals',
    summary: 'Optimized performance and lazy-loaded media on a headless store.',
    impact: 'LCP 4.3s → 1.9s',
    image: '/work/store-performance.jpg',
    href: '/work/ecommerce-performance',
    tags: ['Performance', 'Image Optimization', 'Edge Caching'],
  },
  {
    title: 'Blog Growth Playbook',
    summary: 'Keyword research + topical map + templates for scalable content.',
    impact: 'Organic sessions +120%',
    image: '/work/blog-growth.jpg',
    href: '/work/blog-growth',
    tags: ['Keyword Research', 'On-Page SEO', 'Editorial'],
  },
];
const education: EducationItem[] = [
  {
    school: 'Royal University of Phnom Penh',
    degree: 'B.Sc.',
    field: 'Computer Science',
    location: 'Phnom Penh',
    start: '2021',
    end: '2024',
    note: 'Bachelor of Computer Science.',
    courses: [],
    logo: '/rupp.jfif',
    link: 'https://rupp.edu.kh',
  },
  {
    school: 'Sabai Code',
    degree: 'Bootcamp',
    field: 'Full-Stack Web Development Bootcamp III',
    location: 'Phnom Penh',
    start: 'Dec 2023',
    end: 'June 2024',
    note: 'Intensive full-stack web development program.',
    courses: [],
    logo: '/sabai-code.png',
    link: '',
  },
  {
    school: 'Pannasastra University of Cambodia',
    degree: 'GESL',
    field: 'English Studies',
    location: 'Phnom Penh',
    start: '2021',
    end: '2023',
    note: 'General English as a Second Language.',
    courses: [],
    logo: '/puc.png',
    link: '',
  },
];

const items = [
  {
    company: 'Freelance',
    role: 'SEO',
    start: '2024',
    end: 'Present',
    location: 'Remote',
    summary: 'Designing and building clean, accessible web experiences.',
    bullets: [
      'Led SEO audits and implemented on-page/technical fixes (+35–40% organic traffic).',
      'Built responsive Next.js sites; improved Core Web Vitals (LCP < 2s).',
      'Collaborated with clients from brief → wireframe → launch.',
    ],
    skills: ['TypeScript', 'SEO', 'GA4', 'Search Console', 'A11y'],
  },
  {
    company: 'Authentic Advance Academy',
    role: 'Assistant Marketing/IT & Robotics',
    start: '2024',
    end: 'Present',
    location: 'Phnom Penh',
    bullets: [
      'Implemented UI components and micro-interactions.',
      'Reduced bundle size by 25% via code-splitting and image optimization.',
    ],
    skills: ['React', 'HTML', 'CSS', 'Performance'],
    link: 'https://aaaschoolkh.com/',
  },
  {
    company: 'Sabai Code',
    role: 'UX/UI Designer & Front-End Developer',
    start: 'Dec 2023',
    end: 'June 2024',
    location: 'Phnom Penh',
    summary:
      'Built “Chekromlek,” a knowledge-sharing platform, collaborating closely with teammates from research to delivery.',
    bullets: [
      'Conducted user research and usability testing; translated insights into iterative design improvements.',
      'Produced wireframes, high-fidelity prototypes, and design mockups to communicate concepts to stakeholders.',
      'Developed responsive, interactive pages using HTML, CSS, and Next.js.',
      'Worked effectively in a team environment with clear communication and shared ownership.',
    ],
    skills: ['UX/UI', 'User Research', 'Prototyping', 'Figma', 'HTML', 'CSS', 'Next.js'],
    // link: 'https://sabaicode.com' // uncomment if you want to show the org link
  },
];

const skillsByCategory = {
  SEO: [
    'SEO Strategy','Keyword Research','On-Page SEO','Technical SEO','Site Audits',
    'Content Optimization','GA4','Search Console','WordPress (Yoast/Rank Math)',
    'Schema Markup','Sitemaps & robots.txt','PageSpeed / Core Web Vitals','Local SEO',
  ],
  Frontend: [
    'HTML','CSS','JavaScript','React','Next.js','Storybook','Tailwind CSS',
    'Responsive Design','Accessibility','Performance',
  ],
  Tools: ['GitHub','Figma'],
  'UX/UI': [
    'User Research','User Flows','Interaction Design','Prototyping',
    'Usability Testing','Visual Design',
  ],

};
  return (
      <div className="bg-pink-950">1
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe
        name="Kimlang"
        role="SEO & Web Development"
        mainPhoto="/image1.jpg"
        secondaryPhoto="/personal.jpg"
skillsByCategory={skillsByCategory}

      />
      <SelectedWork projects={projects} />
      <Education items={education} />
      <Experience items={items} resumeHref="/resume.pdf" />
       </div>
  );
}
