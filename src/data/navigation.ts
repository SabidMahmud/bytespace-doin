import { NavLink, FooterSection, FooterLink } from "@/types";

export const MAIN_NAV_LINKS: NavLink[] = [
  { id: "nav-home", label: "Home", href: "#" },
  { id: "nav-courses", label: "Courses", href: "#" },
  { id: "nav-creators", label: "Creators", href: "#" },
];

export const AUTH_NAV_LINKS: NavLink[] = [
  { id: "nav-signin", label: "Sign In", href: "/login" },
  { id: "nav-joinus", label: "Join Us", href: "/register", isPrimary: true },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: "footer-browse-1",
    title: "Browse",
    links: [
      { id: "f-featured-courses", label: "Featured Courses", href: "#" },
      { id: "f-featured-categories", label: "Featured Categories", href: "#" },
      { id: "f-business", label: "Business", href: "#" },
      { id: "f-it", label: "IT", href: "#" },
      { id: "f-design", label: "Design", href: "#" },
    ],
  },
  {
    id: "footer-browse-2",
    links: [
      { id: "f-development", label: "Development", href: "#" },
      { id: "f-marketing", label: "Marketing", href: "#" },
      { id: "f-photography", label: "Photography", href: "#" },
      { id: "f-finance", label: "Finance", href: "#" },
      { id: "f-sport", label: "Sport", href: "#" },
    ],
  },
  {
    id: "footer-platform",
    title: "Platform",
    links: [
      { id: "f-become-creator", label: "Become a Creator", href: "#" },
      { id: "f-affiliate", label: "Affiliate Program", href: "#" },
      { id: "f-contact", label: "Contact", href: "#" },
      { id: "f-help", label: "Help", href: "#" },
      { id: "f-about", label: "About", href: "#" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { id: "legal-privacy", label: "Privacy Policy", href: "#" },
  { id: "legal-terms", label: "Terms of Service", href: "#" },
  { id: "legal-cookies", label: "Cookies Settings", href: "#" },
];
