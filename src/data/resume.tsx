import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fredika Putra",
  url: "https://fredika.dev",
  location: "Kepulauan Riau, Indonesia",
  description:
    "Turning complex problems into elegant solutions, building applications that work seamlessly, and constantly exploring what's next in technology.",
  summary:
    "I'm a full-stack developer with over 3 years of experience in Laravel and Vue, currently creating secure and efficient systems in the banking sector. I enjoy tackling complex problems and building solutions that make a real impact.",
  skills: [
    "Laravel",
    "Livewire",
    "AlpineJS",
    "Vue",
    "React",
    "SQL Server",
    "MySQL",
    "Linux Administration",
    "Docker",
    "PHPUnit",
    "PEST",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fredikaputra",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fredikaputra",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "BPR Dana Nusantara",
      badges: [],
      location: "Kepulauan Riau, Indonesia",
      title: "Full Stack Developer",
      logoUrl: "bprdn.png",
      start: "May 2022",
      end: "Now",
      description:
        "Built and deployed internal web applications using Laravel and Vue to streamline company operations. Automated reporting workflows, significantly reducing manual processing time, and collaborated with IT security teams to ensure compliance with banking standards.",
    },
    {
      company: "Wajah SIBA Nusantara",
      badges: [],
      location: "Kepulauan Riau, Indonesia",
      title: "Full Stack Developer",
      logoUrl: "siba.webp",
      start: "Aug 2021",
      end: "May 2022",
      description:
        "Built digital systems with Laravel to streamline operations, created responsive dashboards for improved usability, and implemented enhancements based on user feedback.",
    },
    {
      company: "Intan Medika Clinic",
      badges: [],
      location: "Kepulauan Riau, Indonesia",
      title: "Data Entry Clerk",
      logoUrl: "medika.png",
      start: "May 2021",
      end: "Jul 2021",
      description:
        "Contributed during the Covid-19 pandemic by managing patient records with Microsoft Access, ensuring accuracy, confidentiality, and compliance with medical standards. Supported healthcare staff by maintaining reliable databases that were critical to daily clinical operations during a challenging period.",
    },
    {
      company: "Baliyoni Saguna",
      badges: [],
      location: "Bali, Indonesia",
      title: "Web Developer Intern",
      logoUrl: "baliyoni.png",
      start: "Aug 2018",
      end: "May 2018",
      description:
        "Developed a company portfolio website to highlight services, products, and client solutions, working closely with the team to structure content and improve presentation. Delivered a responsive design that enhanced the company's professional image and provided potential clients with a clearer understanding of available solutions.",
    },
  ],
  education: [
    {
      school: "Batam International University",
      href: "https://uib.ac.id",
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      logoUrl: "https://www.uib.ac.id/wp-content/uploads/2024/01/UIB-LOGO-BLUE-2048x478.png",
      start: "2022",
      end: "2026 (Expected)",
    },
  ],
  projects: [],
  hackathons: [],
} as const;
