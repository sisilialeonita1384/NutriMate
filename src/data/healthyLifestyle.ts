import { Benefit, Plan } from "../types/healthyLifestyle";

export const benefits: Benefit[] = [
  { text: "Improved physical health" },
  { text: "Better mental health" },
  { text: "Increased longevity" },
  { text: "Weight management" },
  { text: "Improved self-confidence" },
  { text: "Reduced stress" },
];

export const plans: Plan[] = [
  {
    icon: "🍎",
    title: "Losing weight",
    description: "Customized plan for healthy weight loss",
    alt: "Apple icon",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    icon: "🍌",
    title: "Gaining weight",
    description: "Balanced plan for healthy weight gain",
    alt: "Banana icon",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-100",
  },
  {
    icon: "🌱",
    title: "Maintaining weight",
    description: "Stay healthy at your ideal weight",
    alt: "Leaf icon",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
  },
];
