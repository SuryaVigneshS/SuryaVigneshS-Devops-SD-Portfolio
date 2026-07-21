// ─────────────────────────────────────────────────────────────────────────
// All site copy lives here. Anything wrapped in "// TODO" or set to ""
// is a gap the resume didn't cover — fill it in and it'll show up on
// the site automatically. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Surya Vignesh S",
  role: "Aspiring DevOps Engineer & Software Developer",
  location: "Bangalore, India",
  phone: "+91 9360670665",
  email: "suryavigneshpro@gmail.com",
  photo: "/profile/photo.jpg",
  resumeUrl: "/resume/Surya_Vignesh_S_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/surya-vignesh-s-bb8ba3282/",
  github: "https://github.com/SuryaVigneshS",
  // NOTE: using a search link since the exact channel URL/@handle wasn't given —
  // swap this for the real channel URL (youtube.com/@yourhandle) any time.
  youtube: "https://www.youtube.com/results?search_query=Surya%27s+Lifepedia",
  youtubeLabel: "Surya's Lifepedia",
  instagram: "https://www.instagram.com/ayrus_ihodoo",
  instagramLabel: "@ayrus_ihodoo",
};

export const hero = {
  eyebrow: "Open to DevOps & Software Development roles",
  headline: "Shipping reliable systems,",
  headlineAccent: "one deploy at a time.",
  subhead:
    "I'm a Computer Science graduate who moved from enterprise IT sales into building software — now working toward DevOps engineering, cloud infrastructure, and automation, with hands-on projects across deep learning, web development, and CI/CD.",
};

export const about = {
  paragraphs: [
    "I'm Surya Vignesh S, a Computer Science and Engineering graduate from Dayananda Sagar University, Bangalore, currently working as a Key Account Manager at Mega Compu World — where I coordinate enterprise IT infrastructure projects spanning networking, cybersecurity, cloud, and end-user computing.",
    "That role sits at an unusual intersection: I'm client-facing by day, negotiating solutions worth crores with OEMs and customers, and hands-on by build — writing Python, shipping frontend interfaces, and training deep learning models by night.",
    "My goal is to formalize that technical half into a DevOps career: strong fundamentals in CI/CD, cloud infrastructure, and automation, backed by a Microsoft AZ-400 certification currently in progress and AWS cloud foundations already completed.",
  ],
};

export type PipelineStage = "build" | "test" | "deploy" | "monitor";

export interface JourneyItem {
  title: string;
  org: string;
  period: string;
  description: string;
  stage: PipelineStage;
}

export const journey: JourneyItem[] = [
  {
    title: "Started B.Tech in Computer Science & Engineering",
    org: "Dayananda Sagar University, Bangalore",
    period: "2021",
    description:
      "Began undergraduate studies, building a foundation in programming, data structures, and core computer science.",
    stage: "build",
  },
  {
    title: "Web Development Internship",
    org: "CodSoft",
    period: "Nov 2023 – Jan 2024",
    description:
      "Developed frontend web projects using HTML, CSS, and JavaScript. Worked on debugging and frontend optimization.",
    stage: "test",
  },
  {
    title: "Lung Cancer Detection using Deep Learning",
    org: "Independent research project",
    period: "2024–2025",
    description:
      "Built a CT-scan based lung cancer detection system using VGG16 for image classification. Research accepted at two international conferences and published in ICEAIBIR-2025.",
    stage: "build",
  },
  {
    title: "Web Developer Intern",
    org: "Averixis Solutions",
    period: "Mar 2025 – Jun 2025",
    description:
      "Built responsive web applications with ReactJS and Angular, developed reusable UI components, and integrated APIs.",
    stage: "test",
  },
  {
    title: "Graduated B.Tech, Computer Science & Engineering",
    org: "Dayananda Sagar University, Bangalore",
    period: "2025",
    description: "Completed undergraduate degree with a CGPA of 5.41.",
    stage: "deploy",
  },
  {
    title: "Key Account Manager",
    org: "Mega Compu World",
    period: "Nov 2025 – Present",
    description:
      "Managing enterprise IT infrastructure projects across networking, cybersecurity, cloud, and end-user computing — coordinating with customers, OEMs, and technical teams on solutions worth approximately ₹1.5 crore.",
    stage: "deploy",
  },
  {
    title: "Pursuing AZ-400: DevOps Engineer Expert",
    org: "Microsoft Certified",
    period: "In progress",
    description:
      "Deepening expertise in CI/CD pipelines, cloud infrastructure, and automation to move into a full-time DevOps role.",
    stage: "monitor",
  },
];

export interface SkillGroup {
  label: string;
  stage: PipelineStage;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming & Development",
    stage: "build",
    skills: ["Python", "C", "JavaScript", "HTML", "CSS", "ReactJS", "Angular"],
  },
  {
    label: "Database & Tools",
    stage: "test",
    skills: ["SQL", "MySQL", "Git & GitHub", "Power BI", "MS Excel", "Figma"],
  },
  {
    label: "Cloud & DevOps",
    stage: "deploy",
    skills: [
      "AWS Cloud Fundamentals",
      "Azure DevOps Fundamentals",
      "CI/CD Concepts",
      "Linux Basics",
    ],
  },
  {
    label: "Soft Skills",
    stage: "monitor",
    skills: [
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Leadership",
      "Analytical Thinking",
    ],
  },
];

export const stats = [
  { value: "5.41", suffix: "/10", label: "B.Tech CGPA" },
  { value: "4", suffix: "+", label: "Projects Built" },
  { value: "1", suffix: "", label: "Research Paper Published" },
  { value: "5", suffix: "", label: "Certifications" },
  { value: "10K", suffix: "+", label: "YouTube Subscribers" },
  { value: "₹1.5", suffix: "Cr", label: "Infra Deals Coordinated" },
];

export interface Certification {
  title: string;
  issuer: string;
  status: string;
}

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
    issuer: "Microsoft",
    status: "Pursuing",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    status: "Completed",
  },
  {
    title: "AWS Academy Introduction to Cloud — Semester 1",
    issuer: "AWS Academy",
    status: "Completed",
  },
  {
    title: "Cisco Black Belt AI Fundamentals",
    issuer: "Cisco",
    status: "Completed",
  },
  {
    title: "Cisco Black Belt Fire Jumper Workshop — Sales Stage 3",
    issuer: "Cisco",
    status: "Completed",
  },
];

export interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  status: "Completed" | "Ongoing";
  // Icon name from lucide-react, rendered as a themed thumbnail instead of a photo
  icon: "Activity" | "Captions" | "Recycle" | "HeartPulse";
  stage: PipelineStage;
  // TODO: add real links as they become available
  sourceUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Healthcare Assistant",
    year: "2026 · Ongoing",
    description:
      "An AI-powered healthcare assistant designed to streamline medical tasks, support preliminary diagnoses, and optimize patient care — ranging from clinical support for doctors to a 24/7 digital health assistant that improves medical access and operational efficiency. Built with a DevOps-first workflow for CI/CD and reliable deployment.",
    tags: ["Python", "AI/ML", "DevOps", "CI/CD", "Healthcare"],
    status: "Ongoing",
    icon: "HeartPulse",
    stage: "monitor",
    sourceUrl: "",
    liveUrl: "",
  },
  {
    title: "Lung Cancer Detection using CT-Scan & Deep Learning",
    year: "2024–2025",
    description:
      "A deep learning pipeline for lung cancer detection from CT scan images, using image preprocessing and feature extraction with the VGG16 architecture for classification. Research accepted at two international conferences and published in ICEAIBIR-2025.",
    tags: ["Python", "Deep Learning", "VGG16", "Image Processing"],
    status: "Completed",
    icon: "Activity",
    stage: "build",
    sourceUrl: "",
    liveUrl: "",
  },
  {
    title: "Subtitle Generator for YouTube Shorts",
    year: "2024",
    description:
      "An automated subtitle generator that transcribes speech with OpenAI Whisper and overlays synchronized subtitles onto video using MoviePy.",
    tags: ["Python", "OpenAI Whisper", "MoviePy"],
    status: "Completed",
    icon: "Captions",
    stage: "test",
    sourceUrl: "",
    liveUrl: "",
  },
  {
    title: "E-Waste Management Facility Locator",
    year: "2023",
    description:
      "A web application that helps users locate nearby authorized e-waste disposal centers, built with the Google Maps API.",
    tags: ["HTML", "CSS", "JavaScript", "Google Maps API"],
    status: "Completed",
    icon: "Recycle",
    stage: "deploy",
    sourceUrl: "",
    liveUrl: "",
  },
];

export interface NowItem {
  title: string;
  context: string;
  description: string;
  progress: number; // 0-100, used for the progress bar
  links?: { label: string; url: string }[];
}

export const nowItems: NowItem[] = [
  {
    title: "AZ-400: Microsoft Certified DevOps Engineer Expert",
    context: "Certification in progress",
    description:
      "Deepening CI/CD, cloud infrastructure, and automation skills to move fully into a DevOps engineering role.",
    progress: 55,
  },
  {
    title: "Enterprise IT solution delivery",
    context: "Mega Compu World",
    description:
      "Coordinating infrastructure projects across networking, cybersecurity, cloud, and endpoint management for enterprise clients.",
    progress: 80,
  },
  {
    title: "Content creation — Surya's Lifepedia & @ayrus_ihodoo",
    context: "Ongoing interest",
    description:
      "Running the YouTube channel Surya's Lifepedia (10K+ subscribers) and posting on Instagram as @ayrus_ihodoo, alongside graphic design, video editing, and esports event organizing.",
    progress: 65,
    links: [
      { label: "YouTube · Surya's Lifepedia", url: profile.youtube },
      { label: "Instagram · @ayrus_ihodoo", url: profile.instagram },
    ],
  },
];

export interface ActivityItem {
  title: string;
  description: string;
}

export const activities: ActivityItem[] = [
  {
    title: "Dell Partner Event (DNCP) with RP Tech",
    description:
      "Attended the Cisco Meraki Seminar by Tech Data, gaining exposure to enterprise networking, cybersecurity, and cloud solutions.",
  },
  {
    title: "Druva & Exclusive Networks Event",
    description:
      "Focused on cybersecurity and data protection technologies.",
  },
];

export const contact = {
  heading: "Let's build something reliable.",
  subheading:
    "Open to DevOps, cloud infrastructure, and software development roles — and always happy to talk enterprise IT, automation, or applied ML.",
};
