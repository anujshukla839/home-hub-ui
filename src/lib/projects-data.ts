import cinema from "@/assets/project-cinema.jpg";
import villa from "@/assets/project-villa.jpg";
import hotel from "@/assets/project-hotel.jpg";
import office from "@/assets/project-office.jpg";
import apartment from "@/assets/project-apartment.jpg";
import security from "@/assets/project-security.jpg";

export type ProjectCategory = "Homes" | "Villas" | "Apartments" | "Hotels" | "Commercial" | "Office";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
  description: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "skyline-penthouse",
    title: "Skyline Penthouse",
    location: "Bandra West, Mumbai",
    category: "Apartments",
    image: apartment,
    description: "A 4,200 sq.ft. penthouse orchestrated for quiet evenings and effortless entertaining.",
    services: ["Smart Lighting", "Motorised Curtains", "Multi-Room Audio", "CCTV"],
  },
  {
    slug: "seaside-villa",
    title: "Seaside Villa",
    location: "Alibaug",
    category: "Villas",
    image: villa,
    description: "A KNX-controlled coastal villa with landscape lighting, security and full AV integration.",
    services: ["KNX Automation", "Home Cinema", "Security", "Networking"],
  },
  {
    slug: "obsidian-cinema",
    title: "Obsidian Home Cinema",
    location: "Juhu",
    category: "Homes",
    image: cinema,
    description: "A reference-grade 12-seat cinema with Dolby Atmos and full acoustic treatment.",
    services: ["Home Cinema", "Multi-Room Audio", "Smart Lighting"],
  },
  {
    slug: "the-monarch-hotel",
    title: "The Monarch Hotel",
    location: "New Delhi",
    category: "Hotels",
    image: hotel,
    description: "Guest-room automation for 220 keys with PMS integration and energy management.",
    services: ["Hotel Automation", "Enterprise Wi-Fi", "CCTV", "Smart Lighting"],
  },
  {
    slug: "meridian-boardroom",
    title: "Meridian Boardroom",
    location: "BKC, Mumbai",
    category: "Office",
    image: office,
    description: "Executive boardroom with automated blinds, one-touch presentations and video conferencing.",
    services: ["Office Automation", "AV Integration", "Smart Curtains"],
  },
  {
    slug: "vault-residence",
    title: "The Vault Residence",
    location: "Whitefield, Bangalore",
    category: "Homes",
    image: security,
    description: "A private residence with biometric access, perimeter alarm, and 24×7 monitored CCTV.",
    services: ["Smart Door Locks", "Intrusion Alarm", "CCTV", "VDP"],
  },
];
