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
  youtube: "https://www.youtube.com/results?search_query=Surya%27s+Lifepedia",
  youtubeLabel: "Surya's Lifepedia",
  instagram: "https://www.instagram.com/ayrus_ihodoo",
  instagramLabel: "@ayrus_ihodoo",
};

export const hero = {
  eyebrow: "open to DevOps & Software Development roles",
  headline: "Transforming Ideas into",
  headlineAccent: "High-Performance Software Solutions.",
  subhead:
    "I'm a Computer Science graduate building full-stack and applied ML projects — from a published deep learning research paper to Lung Cancer Detection using CT-Scan and Currently developing an AI healthcare assistant - HealCurX Ai- while working toward a career in DevOps engineering, cloud infrastructure, and automation.",
};

export const about = {
  paragraphs: [
    "I'm Surya Vignesh S, a Computer Science and Engineering graduate from Dayananda Sagar University, Bangalore. I picked up full-stack development through two internships — Averixis Solutions and CodSoft — building and shipping real client-facing web projects.",
    "Alongside that, I build things end to end on my own: a deep learning system that detects lung cancer from CT scans (published research, 94% accuracy), and HealCurX AI, a live AI healthcare assistant deployed on Vercel with natural-language conversations, hospital lookup, and symptom guidance.",
    "Right now I'm formalizing the infrastructure side of that — CI/CD, containers, and cloud deployment — through the Microsoft AZ-400 DevOps Engineer Expert certification, alongside AWS and Azure cloud fundamentals I've already completed.",
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
      "Completed hands-on training in HTML, CSS, and JavaScript. Built entry-level, responsive landing pages and strengthened debugging fundamentals through practical coding assignments.",
    stage: "test",
  },
  {
    title: "Lung Cancer Detection using Deep Learning",
    org: "Independent research project",
    period: "Dec 2024",
    description:
      "Built a CT-scan based lung cancer detection system with TensorFlow, Keras, and VGG16, reaching 94% accuracy. Research accepted at two international conferences and published in ICEAIBIR-2025.",
    stage: "build",
  },
  {
    title: "Web Developer Intern",
    org: "Averixis Solutions",
    period: "Mar 2025 – Jun 2025",
    description:
      "Contributed to client web projects — building responsive pages with HTML, CSS, JavaScript, and Bootstrap, integrating REST APIs, fixing bugs, and collaborating with the team using Git.",
    stage: "test",
  },
  {
    title: "Subtitle Generator for YouTube Shorts",
    org: "Independent project",
    period: "Apr 2025",
    description:
      "Built an automated subtitle generator with OpenAI Whisper, MoviePy, and FFmpeg — synchronized speech-to-text transcription with automated overlay for faster, more accessible video editing.",
    stage: "build",
  },
  {
    title: "Graduated B.Tech, Computer Science & Engineering",
    org: "Dayananda Sagar University, Bangalore",
    period: "2025",
    description: "Completed undergraduate degree with a CGPA of 5.24.",
    stage: "deploy",
  },
  {
    title: "HealCurX AI — shipped to production",
    org: "healcurxai2026.vercel.app",
    period: "Jul 2026",
    description:
      "Designed, built, and deployed an AI-powered healthcare assistant on Vercel with Next.js, TypeScript, and the Google Maps and Groq/OpenAI APIs — live with a responsive UI.",
    stage: "deploy",
  },
  {
    title: "Pursuing AZ-400: DevOps Engineer Expert",
    org: "Microsoft Certified",
    period: "In progress",
    description:
      "Deepening expertise in CI/CD pipelines, containers, and cloud infrastructure to move into a full-time DevOps role.",
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
    skills: [
      "Python",
      "C",
      "JavaScript",
      "HTML",
      "CSS",
      "TypeScript",
      "Next.js",
      "ReactJS",
    ],
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
      "Microsoft Azure Fundamentals",
      "Azure DevOps",
      "Docker",
      "Linux",
      "Git",
      "GitHub",
      "CI/CD",
      "GitHub Actions",
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
  { value: "5.24", suffix: "/10", label: "B.Tech CGPA" },
  { value: "4", suffix: "+", label: "Projects Shipped" },
  { value: "1", suffix: "", label: "Research Paper Published" },
  { value: "5", suffix: "", label: "Certifications" },
  { value: "11K", suffix: "+", label: "YouTube Subscribers" },
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
  icon: "Activity" | "Captions" | "HeartPulse" | "Recycle";
  stage: PipelineStage;
  // Only set when a real, working link exists — rendered conditionally
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "HealCurX AI — AI Healthcare Assistant",
    year: "Jul 2026",
    description:
      "An AI-powered healthcare assistant with natural-language conversations, built to streamline preliminary guidance and improve access to care. Integrates nearby hospital and pharmacy search via Google Maps, symptom guidance, diet suggestions, and emergency assistance — designed and deployed on Vercel with a responsive UI.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "Groq/OpenAI API",
      "Vercel",
    ],
    status: "Completed",
    icon: "HeartPulse",
    stage: "deploy",
    liveUrl: "https://healcurxai2026.vercel.app/",
  },
  {
    title: "Lung Cancer Detection using CT-Scan & Deep Learning",
    year: "Dec 2024",
    description:
      "A deep learning pipeline for lung cancer detection from CT scan images, using image preprocessing and feature extraction with the VGG16 architecture — reaching 94% accuracy. Research accepted at two international conferences and published in ICEAIBIR-2025.",
    tags: ["Python", "TensorFlow", "Keras", "VGG16", "OpenCV", "Streamlit"],
    status: "Completed",
    icon: "Activity",
    stage: "build",
  },
  {
    title: "Subtitle Generator for YouTube Shorts",
    year: "Apr 2025",
    description:
      "An automated subtitle generator for YouTube Shorts — synchronized speech-to-text transcription with automated subtitle overlay to improve video accessibility and editing efficiency.",
    tags: ["Python", "OpenAI Whisper", "MoviePy", "FFmpeg"],
    status: "Completed",
    icon: "Captions",
    stage: "test",
  },
  {
    title: "E-Waste Management Facility Locator",
    year: "2023",
    description:
      "A web application that helps users locate nearby authorized e-waste disposal centers, built with the Google Maps API.",
    tags: ["HTML", "CSS", "JavaScript", "Google Maps API"],
    status: "Completed",
    icon: "Recycle",
    stage: "monitor",
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
      "Deepening CI/CD, containers, and cloud infrastructure skills to move fully into a DevOps engineering role.",
    progress: 55,
  },
  {
    title: "Iterating on HealCurX AI",
    context: "Live at healcurxai2026.vercel.app",
    description:
      "Continuing to refine the AI healthcare assistant — expanding symptom guidance and emergency-assistance features.",
    progress: 70,
    links: [{ label: "healcurxai2026.vercel.app ↗", url: "https://healcurxai2026.vercel.app/" }],
  },
  {
    title: "Content creation — Surya's Lifepedia & @ayrus_ihodoo",
    context: "Ongoing interest",
    description:
      "Running the YouTube channel Surya's Lifepedia (11K+ subscribers) and posting on Instagram as @ayrus_ihodoo, alongside graphic design, video editing, and esports event organizing.",
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
    title: "Adobe Partner Enablement Session — Adobe Office, Bangalore",
    description:
      "Gained insight into Adobe's AI roadmap, Adobe Firefly, and the latest innovations in creative and enterprise solutions.",
  },
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
    "Open to DevOps, cloud infrastructure, and software development roles — and always happy to talk full-stack builds, automation, or applied ML.",
  // The form itself is submitted silently in the background — visitors
  // never see Google Forms. Behind the scenes it's still backed by your
  // form at https://docs.google.com/forms/d/e/1FAIpQLScv_ASdCy8oXiMwlMZ4pvMYce75X5gTvjxx8F87Ih3Ahmu45w/viewform
  // Entry IDs below are confirmed real (matched against a live prefilled link).
  googleForm: {
    formActionUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScv_ASdCy8oXiMwlMZ4pvMYce75X5gTvjxx8F87Ih3Ahmu45w/formResponse",
    entryIds: {
      name: "entry.41328524",
      mobile: "entry.1605784164",
      email: "entry.1956162882",
      message: "entry.2099880918",
    },
  },
};
