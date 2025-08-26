import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fredika Putra",
  url: "https://fredika.dev",
  location: "Kepulauan Riau, Indonesia",
  description:
    "Turning complex problems into elegant solutions, building applications that work seamlessly, and constantly exploring what's next in technology.",
  summary:
    "I'm a full-stack developer with experience in Laravel and Vue, currently creating secure and efficient systems in the banking sector. I enjoy tackling complex problems and building solutions that make a real impact.",
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
      logoUrl: "danus.png",
      start: "May 2022",
      end: "Present",
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
      start: "Jul 2018",
      end: "Nov 2018",
      description:
        "Developed a company portfolio website to highlight services, products, and client solutions, working closely with the team to structure content and improve presentation. Delivered a responsive design that enhanced the company's professional image and provided potential clients with a clearer understanding of available solutions.",
    },
  ],
  education: [
    {
      school: "Batam International University",
      href: "https://uib.ac.id",
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      logoUrl: "uib.png",
      start: "2022",
      end: "2026 (Expected)",
    },
    {
      school: "Bali Global Badung Vocational High School of Information Technology",
      href: "https://www.smktibaliglobalbadung.sch.id",
      degree: "Software Engineering",
      logoUrl: "smk.png",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Veilenth",
      dates: "Jun 2025 - Present",
      description:
        "A real-time collaborative platform where people create digital rooms to sync music, presence, and atmosphere — making online connection feel less like a chatroom and more like hanging out together.",
      technologies: [
        "Laravel",
        "Inertia.js",
        "Vue.js",
        "shadcn/ui",
        "WebSocket",
        "SQLite",
        "In Progress",
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Noisely",
      dates: "Oct 2024 - Present",
      description:
        "A research project that enables real-time audio event recognition and transcription by processing sound data on centralized servers, using [YAMNet](https://ai.google.dev/edge/mediapipe/solutions/audio/audio_classifier#yamnet_model_recommended) for sound classification and [Whisper](https://openai.com/index/whisper) for speech transcription, to accurately detect events such as gunshots, glass breaking, and human speech.",
      technologies: [
        "Nuxt",
        "Laravel",
        "MySQL",
        "Redis",
        "Python",
        "Docker",
        "WebSocket",
        "Whisper",
        "YAMNet",
        "Batam International University",
        "In Progress",
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "DanusCrypt",
      dates: "Jan 2024 - Jun 2024",
      description:
        "An internal security application developed for BPR Dana Nusantara to protect digital documents. It provides encryption, decryption, secure login, role-based access, and activity logging, ensuring company data remains confidential and safe from unauthorized access.",
      technologies: [
        "Laravel",
        "Tailwind",
        "Docker",
        "Bind9",
        "Web Crypto API",
        "BPR Dana Nusantara"
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "QuickDrop",
      dates: "Aug 2023 - Des 2023",
      description:
        "An instant file-sharing app designed to enable fast and easy transfer of files between devices. It focuses on providing a smooth, efficient, and user-friendly experience for handling files.",
      technologies: [
        "Laravel",
        "Flutter",
        "Batam International University"
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Awarded Best Paper at the National Conference for Community Service Project",
      dates: "August 20, 2025",
      location: "Batam International University",
      description:
        "Honored for creating an AES-based encryption system in DanusCrypt, improving information security and project reliability at BPR Dana Nusantara.",
      image: "nacospro.jpg",
      links: [
        {
          title: "YouTube",
          href: "https://www.youtube.com/watch?v=E50-ZYNLI6s&t=25930s",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
    },
    {
      title: "Riplay",
      dates: "June - August 2025",
      location: "BPR Dana Nusantara",
      description:
        "Riplay is a Filament-based document management system for banking products. It enables creating, updating, and versioning documents that clients must read and accept before opening accounts, while tracking which products each client agrees to for compliance.",
      image: "danus.png",
      links: [],
    },
    {
      title: "Independent Study Program - IBM Academy: Hybrid Cloud & Red Hat",
      dates: "September - December 2024",
      location: "Infinite Learning",
      description:
        "Completed IBM Academy's Hybrid Cloud & Red Hat program (MSIB Batch 7) through Infinite Learning.",
      image: "infinitelearning.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/file/d/1wSdNIU7sq-TZKxv_QSTJOMMnx5FYZXO-/view",
        }
      ],
    },
    {
      title: "Internship Program - IBM Academy: Hybrid Cloud & Red Hat",
      dates: "September - December 2024",
      location: "Infinite Learning",
      description:
        "Completed Internship Program at Infinite Learning.",
      image: "infinitelearning.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/file/d/1YhVofRIbRVroTMFjAgqg1rpv4-fx361i/view",
        }
      ],
    },
    {
      title: "Customer Care",
      dates: "July - October 2024",
      location: "BPR Dana Nusantara",
      description:
        "Customer Care is a system built with Filament to manage client issues at BPR Dana Nusantara. Customer service logs problems, departments handle them, and clients receive feedback via an online tracking portal.",
      image: "danus.png",
      links: [],
    },
    {
      title: "Internal DNS & Reverse Proxy Setup",
      dates: "June 2024",
      location: "BPR Dana Nusantara",
      description:
        "Built an internal DNS with BIND9 and reverse proxy with Nginx to route domains to a Docker host serving multiple internal web apps.",
      image: "danus.png",
      links: [],
    },
    {
      title: "Data Analysis with Google Data Studio - Ruang Guru",
      dates: "June 02, 2023",
      location: "BPR Dana Nusantara",
      description:
        "Completed Data Analysis with Google Data Studio course by Ruang Guru.",
      image: "ruangguru.png",
      links: [
        {
          title: "Certificate",
          href: "https://img-certificate.ruangguru.com/USERASZU61O4/CERT-LETC31UK.jpg",
        }
      ],
    },
    {
      title: "3rd Place Overall - Software Engineering Department",
      dates: "June 07, 2020",
      location: "Bali Global Badung Vocational High School of Information Technology",
      description:
        "Awarded 3rd place overall among all students in the Software Engineering program for outstanding academic and project performance.",
      image: "smk.png",
      links: [
        {
          title: "Article",
          href: "https://www.smktibaliglobalbadung.sch.id/2020/06/juara-umum-semester-genap-ta-20192020.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Volunteer - Annual Meetings of the International Monetary Fund and World Bank Group 2018",
      dates: "October 8 - 14, 2018",
      location: "Nusa Dua, Bali, Indonesia",
      description:
        "Volunteered at the 2018 Annual Meetings of the International Monetary Fund and World Bank Group in Nusa Dua, Bali by setting up and monitoring laptops, printers, and network connections as the hotel was transformed into a temporary office.",
      image: "imf.png",
      links: [],
    },
    {
      title: "Web Programming Course - Decode.id",
      dates: "May 28, 2018",
      location: "Denpasar, Bali, Indonesia",
      description:
        "Completed Web Programming course at Decode.id",
      image: "decode.jpg",
      links: [],
    },
    {
      title: "Web Design Course - Decode.id",
      dates: "Jan 01, 2018",
      location: "Denpasar, Bali, Indonesia",
      description:
        "Completed Web Design course at Decode.id",
      image: "decode.jpg",
      links: [],
    },
  ],
} as const;
