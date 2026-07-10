import {
  Home, Lightbulb, Cable, Wifi, Shield, Camera, DoorClosed, BellRing,
  KeyRound, Blinds, Cog, Network, Router, Film, Music4, Speaker,
  Building2, Building, Hotel, Landmark,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  category: "Automation" | "Security" | "AV & Networking" | "Verticals";
  icon: LucideIcon;
  desc: string;
  benefits: string[];
};

export const services: Service[] = [
  { slug: "smart-home-automation", title: "Smart Home Automation", category: "Automation", icon: Home,
    desc: "One elegant interface for lighting, climate, curtains, security and entertainment.",
    benefits: ["Single-app control", "Custom scenes", "Voice & app control"] },
  { slug: "smart-lighting", title: "Smart Lighting", category: "Automation", icon: Lightbulb,
    desc: "Architectural, mood, and task lighting choreographed to your day.",
    benefits: ["Tunable white & color", "Energy efficient", "Scene automation"] },
  { slug: "knx-wired-automation", title: "KNX Wired Automation", category: "Automation", icon: Cable,
    desc: "Bank-grade reliability with the global open standard for automation.",
    benefits: ["25+ year lifespan", "Vendor agnostic", "Ultra reliable"] },
  { slug: "wireless-automation", title: "Wireless Automation", category: "Automation", icon: Wifi,
    desc: "Retrofit any home without breaking walls — beautifully.",
    benefits: ["No civil work", "Rapid install", "Expandable"] },
  { slug: "smart-curtains", title: "Smart Curtains & Motors", category: "Automation", icon: Blinds,
    desc: "Whisper-quiet motorised curtains, blinds, and roller shades.",
    benefits: ["Silent operation", "Sun tracking", "Scene aware"] },
  { slug: "office-automation", title: "Office Automation", category: "Automation", icon: Cog,
    desc: "Boardrooms, meeting spaces and workplaces on autopilot.",
    benefits: ["Meeting scenes", "Occupancy control", "Energy savings"] },

  { slug: "home-security", title: "Home Security", category: "Security", icon: Shield,
    desc: "Layered, silent security systems designed for luxury residences.",
    benefits: ["24×7 monitoring", "Multi-zone", "Discreet installation"] },
  { slug: "cctv-surveillance", title: "CCTV Surveillance", category: "Security", icon: Camera,
    desc: "4K IP cameras with intelligent analytics, integrated everywhere.",
    benefits: ["4K clarity", "AI analytics", "Remote access"] },
  { slug: "video-door-phone", title: "Video Door Phone", category: "Security", icon: DoorClosed,
    desc: "See, speak and unlock from anywhere — from any device.",
    benefits: ["HD video", "Mobile alerts", "Multi-station"] },
  { slug: "intrusion-alarm", title: "Intrusion Alarm System", category: "Security", icon: BellRing,
    desc: "Perimeter, motion and glass-break detection with silent triggers.",
    benefits: ["Instant alerts", "Zoned control", "Battery backup"] },
  { slug: "smart-door-locks", title: "Smart Door Locks", category: "Security", icon: KeyRound,
    desc: "Fingerprint, face and mobile access with tamper alerts.",
    benefits: ["Keyless entry", "Guest codes", "Access history"] },

  { slug: "networking", title: "Networking", category: "AV & Networking", icon: Network,
    desc: "Structured cabling and network backbones built for the future.",
    benefits: ["10 Gbps ready", "Zero downtime", "Documented cabling"] },
  { slug: "enterprise-wifi", title: "Enterprise Wi-Fi", category: "AV & Networking", icon: Router,
    desc: "Whole-property Wi-Fi 6E coverage with seamless roaming.",
    benefits: ["Full coverage", "Wi-Fi 6E", "Guest network"] },
  { slug: "home-cinema", title: "Home Cinema", category: "AV & Networking", icon: Film,
    desc: "Reference-grade private theatres with acoustic engineering.",
    benefits: ["Dolby Atmos", "Calibrated visuals", "Acoustic treatment"] },
  { slug: "home-theatre", title: "Home Theatre", category: "AV & Networking", icon: Music4,
    desc: "Cinema experiences that live gracefully in your living room.",
    benefits: ["Discreet speakers", "Auto-calibrated", "Universal remote"] },
  { slug: "multi-room-audio", title: "Multi-Room Audio", category: "AV & Networking", icon: Speaker,
    desc: "Every room, its own soundtrack — perfectly in sync.",
    benefits: ["Hi-Res audio", "Room-by-room", "Streaming ready"] },

  { slug: "villas-automation", title: "Villas Automation", category: "Verticals", icon: Building2,
    desc: "End-to-end automation for private villas and estates.",
    benefits: ["Gate to garden", "Staff modes", "Vacation mode"] },
  { slug: "luxury-apartment-automation", title: "Luxury Apartment Automation", category: "Verticals", icon: Building,
    desc: "Discreet, elegant automation for premium apartments.",
    benefits: ["Retrofit-friendly", "Silent scenes", "Building integration"] },
  { slug: "hotel-automation", title: "Hotel Automation", category: "Verticals", icon: Hotel,
    desc: "Guest experience and back-of-house intelligence, unified.",
    benefits: ["Guest scenes", "Energy control", "PMS integration"] },
  { slug: "commercial-automation", title: "Commercial Automation", category: "Verticals", icon: Landmark,
    desc: "Automation for offices, showrooms and commercial buildings.",
    benefits: ["Zone scheduling", "BMS integration", "Central dashboard"] },
];
