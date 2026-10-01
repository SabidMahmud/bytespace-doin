import { LearningCategory } from "@/types";

export const LEARNING_PATH_CATEGORIES: LearningCategory[] = [
  { id: "cat-design", name: "Design", icon: "/icons/category-design.svg" },
  { id: "cat-development", name: "Development", icon: "/icons/category-development.svg" },
  { id: "cat-it-software", name: "IT & Software", icon: "/icons/category-it-software.svg" },
  { id: "cat-business", name: "Business", icon: "/icons/category-business.svg" },
  { id: "cat-marketing", name: "Marketing", icon: "/icons/category-marketing.svg" },
  { id: "cat-photography", name: "Photography", icon: "/icons/category-photography.svg" },
];

export const DISCOVER_CATEGORY_ROWS = [
  [
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ],
] as const;
