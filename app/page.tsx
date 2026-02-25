import AboutMe from "@/src/components/AboutMe";
import Education, { EducationItem } from "@/src/components/Education";
import Experience from "@/src/components/Experience";
import { Navbar } from "@/src/components/Header";
import Hero from "@/src/components/HeroSection";
import SelectedWork, { Project } from "@/src/components/SelectedWork";


export default function Home() {
  const projects: Project[] = [
    {
      title: "Explore Cambodia",
      description: "A travel discovery platform that helps users find and explore hidden gems across Cambodia's provinces. Features a modern, responsive design with high-fidelity prototypes.",
      image: "/travel.png",
      href: "https://www.figma.com/design/2zRuPfffKHYZOhCDeX1rLF/Library?node-id=0-1&t=F3ttnOqYT9jDZl28-1",
      tags: ["Next js", "TypeScript", "Tailwind"],
      gallery: ["/place.png", "/place1.png", "/place2.png"],
      demo: "",
      github: "",
    },
    
    {
      title: "Digital Commerce Management System",
      description: "A role-based admin dashboard designed to simplify product management, order tracking, and customer handling for an online store. Built to improve workflow efficiency and reduce manual operational tasks.",
      image: "/cake.png",
      href: "",
      tags: ["Next.js", "Firebase", "Tailwind"],
      gallery: [
        "/cake.png",
        "/cake1.png",
        "/cake3.png",
      ],
      demo: "",
      github: "",
    },
    {
      title: "Chekromlek — Knowledge Sharing Platform",
      description: "A collaborative knowledge-sharing platform designed to empower students by connecting them with solutions to academic challenges through research-driven UI and community engagement.",
      image: "/website.png",
      href: "",
      tags: ["Userflow", "Sitemap", "Wireframe", "Website"],
      gallery: [
        "/userflow.png",
        "/sitemap.png",
        "/wireframe.png",
        "/website.png",
      ],
      demo: "",
      github: "",
    },
    {
      title: "Creative Landing Page",
      description: "A high-conversion landing page designed for program exploration, featuring smooth animations and a clear hierarchy to improve user choice and clarity.",
      image: "/landing-page.png",
      href: "/work/blog-growth",
      tags: ["User Experience", "Wordpress", "AIOSEO"],
      gallery: ["/landing-page.png", "/robotics.png", "/Ballet.png"],
      demo: "",
      github: "",
    },
  ];
  const education: EducationItem[] = [
    {
      school: "Royal University of Phnom Penh",
      degree: "B.Sc.",
      field: "Computer Science",
      location: "Phnom Penh",
      start: "2021",
      end: "2024",
      note: "Bachelor of Computer Science.",
      courses: [],
      logo: "/rupp.png",
      link: "https://rupp.edu.kh",
    },
    {
      school: "Sabai Code",
      degree: "Bootcamp",
      field: "Full-Stack Web Development Bootcamp III",
      location: "Phnom Penh",
      start: "Dec 2023",
      end: "June 2024",
      note: "Intensive full-stack web development program.",
      courses: [],
      logo: "/sabai-code.png",
      link: "",
    },
    {
      school: "Pannasastra University of Cambodia",
      degree: "GESL",
      field: "English Studies",
      location: "Phnom Penh",
      start: "2021",
      end: "2023",
      note: "General English as a Second Language.",
      courses: [],
      logo: "/puc.png",
      link: "",
    },
  ];

  const items = [
    {
      company: "Authentic Advance Academy",
      role: "Assistant Marketing/IT & Robotics",
      start: "2024",
      end: "Present",
      location: "Phnom Penh",
      bullets: [
        "Implemented UI components and micro-interactions.",
        "Reduced bundle size by 25% via code-splitting and image optimization.",
      ],
      skills: ["React", "HTML", "CSS", "Performance"],
      link: "https://aaaschoolkh.com/",
    },
    {
      company: "Sabai Code",
      role: "UX/UI Designer & Front-End Developer",
      start: "Dec 2023",
      end: "June 2024",
      location: "Phnom Penh",
      summary:
        "Built “Chekromlek,” a knowledge-sharing platform, collaborating closely with teammates from research to delivery.",
      bullets: [
        "Conducted user research and usability testing; translated insights into iterative design improvements.",
        "Produced wireframes, high-fidelity prototypes, and design mockups to communicate concepts to stakeholders.",
        "Developed responsive, interactive pages using HTML, CSS, and Next.js.",
        "Worked effectively in a team environment with clear communication and shared ownership.",
      ],
      skills: [
        "UX/UI",
        "User Research",
        "Prototyping",
        "Figma",
        "HTML",
        "CSS",
        "Next.js",
      ],
      // link: 'https://sabaicode.com' // uncomment if you want to show the org link
    },
  ];

const skillsByCategory = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Responsive Development",
    "Component-based Development",
  ],

  "Product & UX": [
    "UX/UI Design",
    "User Flow Design",
    "Interaction Design",
    "Prototyping",
    "Usability Testing",
  ],

  Tools: [
    "Git & GitHub",
    "Figma",
    "WordPress (WooCommerce)",
    "Firebase / Supabase",
    "Postman",
  ],
};
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe
        name="Kimlang"
        role="Digital Product Developer | UX/UI & Frontend"
        mainPhoto="/image2.jpg"
        secondaryPhoto="/personal1.jpg"
        skillsByCategory={skillsByCategory}
      />
      <SelectedWork projects={projects} />
      <Education items={education} />
      <Experience items={items} resumeHref="" />
    </div>
  );
}
