export interface Course {
  id: string;
  title: string;
  author: string;
  level: "Beginner" | "Intermediate" | "Advanced" | string;
  image: string;
  price: string;
  period: string;
  rating: string;
  badges?: string[];
  avatars?: string[];
  count?: string;
  countBadgeVariant?: "lime" | "dark";
  priceColor?: string;
}
