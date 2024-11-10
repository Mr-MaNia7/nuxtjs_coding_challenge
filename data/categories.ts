/** author Abdulkarim Getachew abdulkarimgmohammed@gmai.com */

export interface SubCategory {
  id: string;
  name: string;
  topics: string[];
}

export interface Category {
  id: string;
  name: string;
  subcategories: SubCategory[];
}

export const popularTopics = [
  "Neuro-Linguistic Programming (NLP)",
  "EFT (Emotional Freedom Techniques)",
  "Meditation",
  "Emotional Intelligence",
  "Cognitive Behavioral Therapy (CBT)",
  "Life Coach Training",
  "Aviation",
  "Herbalism",
  "Personal Development",
  "Mindfulness",
  "Time Management",
  "Project Management",
  "Digital Transformation",
  "Fitness for Busy People",
  "Creative Writing",
] as const;

export const categories: Category[] = [
  {
    id: "development",
    name: "Development",
    subcategories: [
      {
        id: "web-development",
        name: "Web Development",
        topics: ["JavaScript", "React", "Node.js", "Python", "PHP"],
      },
      {
        id: "mobile-development",
        name: "Mobile Development",
        topics: ["iOS", "Android", "React Native", "Flutter", "Kotlin"],
      },
      {
        id: "game-development",
        name: "Game Development",
        topics: ["Unity", "Unreal Engine", "C++", "3D Modeling", "Animation"],
      },
      {
        id: "ai",
        name: "AI",
        topics: [
          "Machine Learning",
          "Deep Learning",
          "Neural Networks",
          "Computer Vision",
        ],
      },
      {
        id: "blockchain",
        name: "Blockchain",
        topics: ["Ethereum", "Smart Contracts", "Solidity", "Web3"],
      },
    ],
  },
  {
    id: "business",
    name: "Business",
    subcategories: [
      {
        id: "marketing",
        name: "Marketing",
        topics: [
          "Digital Marketing",
          "Content Marketing",
          "SEO",
          "Social Media",
        ],
      },
      {
        id: "sales",
        name: "Sales",
        topics: ["B2B Sales", "Sales Strategy", "Negotiation", "CRM"],
      },
      {
        id: "hr",
        name: "HR",
        topics: [
          "Recruitment",
          "Employee Relations",
          "Training",
          "Compensation",
        ],
      },
      {
        id: "strategy",
        name: "Strategy",
        topics: ["Business Planning", "Strategic Management", "Innovation"],
      },
      {
        id: "operations",
        name: "Operations",
        topics: ["Supply Chain", "Process Management", "Quality Control"],
      },
    ],
  },
];
