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
      dates: "",
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
      video: "/veilenth.mov",
      link: "/projects/veilenth",
    },
    {
      title: "Noisely",
      dates: "",
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
      video: "/noisely.mov",
      link: "/projects/noisely",
    },
    {
      title: "Pembukaan Rekening",
      dates: "",
      description:
        "A digital transformation project that modernizes the conventional paper-based bank account opening process at BPR Dana Nusantara. Customer service representatives input customer data digitally, which is then reviewed by Head Customer Service for approval or rejection. The system eliminates paperwork, reduces processing time, and provides a streamlined digital workflow for new account applications with proper audit trails and compliance tracking.",
      technologies: [
        "Laravel 12",
        "Filament 3",
        "Livewire 3",
        "Tailwind",
        "MySQL",
        "Digital Transformation",
        "BPR Dana Nusantara"
      ],
      links: [],
      image: "",
      video: "/pembukaan-rekening.mov",
      link: "/projects/pembukaan-rekening",
    },
    {
      title: "Order Taksasi",
      dates: "",
      description:
        "An internal workflow management system for the marketing team at BPR Dana Nusantara to order property assessment jobs. The taksasi team receives orders, conducts property evaluations, and updates status throughout the process. Marketing team can then download detailed assessment reports. Features role-based access control for supervisors, marketing staff, and taksasi team with comprehensive workflow tracking.",
      technologies: [
        "Laravel 12",
        "Filament 3",
        "Livewire 3",
        "Tailwind",
        "MySQL",
        "Role-based Access Control",
        "BPR Dana Nusantara"
      ],
      links: [],
      image: "",
      video: "/order-taksasi.mov",
      link: "/projects/order-taksasi",
    },
    {
      title: "DanusCrypt",
      dates: "",
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
      video: "/danus-crypt.mov",
      link: "/projects/danus-crypt",
    }
  ],
  hackathons: [
    {
      title: "Awarded Best Paper at the National Conference for Community Service Project",
      dates: "Aug 20, 2025",
      location: "Batam International University",
      description: "Awarded Best Paper at the National Conference for Community Service Project for developing DanusCrypt, an AES-based encryption system that enhanced information security and strengthened project reliability at BPR Dana Nusantara.",
      image: "nacospro.png",
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
      dates: "Jun - Aug 2025",
      location: "BPR Dana Nusantara",
      description: "Riplay is a Filament-based document management system for banking products, designed to streamline compliance by enabling the creation, updating, and versioning of client-facing documents. It ensures clients review and accept required terms before opening accounts while tracking product agreements for regulatory accountability.",
      image: "danus.png",
      links: [],
    },
    {
      title: "Independent Study Program - IBM Academy: Hybrid Cloud & Red Hat",
      dates: "Sep - Dec 2024",
      location: "Infinite Learning",
      description: "Completed the IBM Academy: Hybrid Cloud & Red Hat program (MSIB Batch 7) through Infinite Learning, with hands-on training in Linux system administration, cloud infrastructure management, containerization using Podman, and deploying enterprise-grade solutions on Kubernetes, OpenShift, IBM Cloud, and Red Hat technologies.",
      image: "infinitelearning.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/file/d/1wSdNIU7sq-TZKxv_QSTJOMMnx5FYZXO-/view",
          icon: undefined
        }
      ],
    },
    {
      title: "Internship Program - IBM Academy: Hybrid Cloud & Red Hat",
      dates: "Sep - Dec 2024",
      location: "Infinite Learning",
      description: "Completed the Internship Program - IBM Academy: Hybrid Cloud & Red Hat at Infinite Learning, learning how to think as a system administrator while working with Linux, cloud computing, containerization, and enterprise-grade solutions using IBM Cloud and Red Hat technologies.",
      image: "infinitelearning.png",
      links: [
        {
          title: "Certificate",
          href: "https://drive.google.com/file/d/1YhVofRIbRVroTMFjAgqg1rpv4-fx361i/view",
          icon: undefined
        }
      ],
    },
    {
      title: "Customer Care",
      dates: "Jul - Oct 2024",
      location: "BPR Dana Nusantara",
      description: "Customer Care is a web-based system built with Filament to streamline client issue management at BPR Dana Nusantara, enabling customer service to log problems, route them to the right departments, and provide clients with real-time updates and feedback through an online tracking portal.",
      image: "danus.png",
      links: [],
    },
    {
      title: "Internal DNS & Reverse Proxy Setup",
      dates: "Jun 2024",
      location: "BPR Dana Nusantara",
      description: "Built an internal DNS with BIND9 and an Nginx reverse proxy to route domains to a Docker host, allowing employees to access internal web apps through custom subdomains (e.g., customer-care.bank.com, document.bank.com) within the company network, without needing to type server IP addresses or ports.",
      image: "danus.png",
      links: [],
    },
    {
      title: "QuickDrop",
      dates: "Aug - Des 2023",
      location: "Batam International University",
      description: "An instant file-sharing application developed to simplify and accelerate file transfers between devices, emphasizing speed, reliability, and a seamless user experience — like Pastebin but for files, where uploads are stored temporarily in the cloud with options for password protection and expiration before download.",
      image: "uib.png",
      links: [],
    },
    {
      title: "3rd Place Overall - Software Engineering Department",
      dates: "Jun 07, 2020",
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
      dates: "Oct 01 - 14, 2018",
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
      description: "Completed a Web Programming course at Decode.id, focusing on PHP, JavaScript, Laravel, and database integration to develop dynamic, scalable, and interactive web applications.",
      image: "decode.jpg",
      links: [],
    },
    {
      title: "Web Design Course - Decode.id",
      dates: "Jan 01, 2018",
      location: "Denpasar, Bali, Indonesia",
      description: "Completed an intensive Web Design course at Decode.id, gaining practical skills in HTML, CSS, responsive layouts, and UI/UX fundamentals to create modern, user-friendly websites.",
      image: "decode.jpg",
      links: [],
    },
  ],
} as const;
