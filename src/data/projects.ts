import { IconType } from "react-icons";
import { FiLayers, FiFileText, FiShield } from "react-icons/fi";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "saas" | "ai" | "extension" | "web" | "dsa" | "python";
  categoryLabel: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  year: string;
  icon: IconType;
}

export const projectsData: Project[] = [
  {
    id: "railgaadi",
    title: "RailGaadi",
    subtitle: "Live Railway Tracking & Journey Intelligence Platform",
    category: "saas",
    categoryLabel: "Full Stack / SaaS",
    description:
      "Real-time railway tracking platform with live train status, interactive maps, journey analytics, and travel insights.",
    longDescription:
      "RailGaadi is a full-stack railway tracking platform that provides real-time train status, interactive route visualization, journey analytics, and contextual travel insights through a unified dashboard.",
    highlights: [
      "Real-time train tracking with live location, ETA, delays, and journey progress",
      "Interactive MapLibre maps with animated routes, train markers, and follow mode",
      "Journey analytics with distance, delays, station history, elevation, and progress",
      "Weather forecasts and geographic insights along the railway route",
      "Train search, favourites, recent searches, and shareable journey links",
    ],
    tags: [
      "React.js",
      "Typescript",
      "Tailwind CSS",
      "MapLibre GL JS",
      "MapTiler",
      "Turf.js",
    ],
    github: "https://github.com/theankitmaurya/RailGaadi",
    demo: "#",
    featured: true,
    year: "2026",
    icon: FiLayers,
  },
  {
    id: "clinicrocr",
    title: "ClinicOCR",
    subtitle: "AI-Powered Prescription Digitization Platform",
    category: "ai",
    categoryLabel: "AI / Full Stack",
    description:
      "AI-powered platform that converts handwritten medical prescriptions into structured digital text using OCR.",
    longDescription:
      "ClinicOCR is a full-stack OCR platform designed to digitize handwritten medical prescriptions, extracting and organizing prescription data into a clear, structured format.",
    highlights: [
      "OCR-based extraction of text from handwritten prescriptions",
      "Structured digitization of medicines and prescription details",
      "Image upload and processing with clear extraction results",
      "Responsive interface for fast and accessible prescription digitization",
    ],
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "OCR"],
    github: "https://github.com/theankitmaurya/ClinicOCR",
    demo: "#",
    featured: true,
    year: "2026",
    icon: FiFileText,
  },
  {
    id: "website-blocker",
    title: "Website Blocker",
    subtitle: "Privacy-Focused Website Blocking Desktop App",
    category: "python",
    categoryLabel: "Desktop / Productivity / Python",
    description:
      "Lightweight desktop app that blocks distracting websites to improve productivity and control web access.",
    longDescription:
      "Website Blocker is a lightweight desktop app for blocking distracting or unwanted websites, focused on productivity, privacy, and easy access control.",
    highlights: [
      "Block distracting and unwanted websites",
      "Manage and customize blocked website domains",
      "Lightweight desktop application with a simple user interface",
      "Privacy-focused website access control without relying on third-party tracking",
      "Designed for reliable background website blocking",
    ],
    tags: [
      "Python",
      "Desktop App",
      "Website Blocking",
      "Productivity",
      "Networking",
    ],
    github: "https://github.com/theankitmaurya/website-blocker",
    demo: "#",
    featured: true,
    year: "2026",
    icon: FiShield,
  },
];
