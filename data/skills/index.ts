import {
  mdiReact,
  mdiLanguageTypescript,
  mdiLanguageJavascript,
  mdiNodejs,
  mdiDatabase,
  mdiMicrosoftAzure,
  mdiGit,
  mdiDocker,
  mdiAndroid,
  mdiFirebase,
  mdiTestTube,
  mdiRocket,
  mdiSourcePull,
  mdiCogs,
  mdiBug,
} from '@mdi/js';

export const skills = [
  // � Programming Languages
  {
    icon: mdiLanguageJavascript,
    label: "JavaScript",
    category: "Frontend & Languages",
    color: "#F7DF1E", // JavaScript yellow
  },
  {
    icon: mdiLanguageTypescript,
    label: "TypeScript",
    category: "Frontend & Languages",
    color: "#3178C6", // TypeScript blue
  },

  // 🖥️ Frontend
  {
    icon: mdiReact,
    label: "React",
    category: "Frontend & Languages",
    color: "#61DAFB", // React blue
  },
  {
    icon: mdiReact, // Next.js uses React icon as fallback
    label: "Next.js",
    category: "Frontend & Languages",
    color: "#000000", // Next.js black
  },

  // 📱 Mobile & Backend
  {
    icon: mdiReact, // React Native uses React icon
    label: "React Native",
    category: "Mobile & Backend",
    color: "#61DAFB", // React Native blue (same as React)
  },
  {
    icon: mdiAndroid,
    label: "Android",
    category: "Mobile & Backend",
    color: "#3DDC84", // Android green
  },

  // 📱 Mobile & Backend
  {
    icon: mdiNodejs,
    label: "Node.js",
    category: "Mobile & Backend",
    color: "#339933", // Node.js green
  },
  {
    icon: mdiFirebase,
    label: "Firebase",
    category: "Mobile & Backend",
    color: "#FFCA28", // Firebase yellow
  },

  // � Mobile & Backend
  {
    icon: mdiDatabase,
    label: "MongoDB",
    category: "Mobile & Backend",
    color: "#47A248", // MongoDB green
  },

  // 🚀 DevOps & Cloud
  {
    icon: mdiMicrosoftAzure,
    label: "Azure",
    category: "DevOps & Cloud",
    color: "#0078D4", // Azure blue
  },

  // � DevOps & Cloud
  {
    icon: mdiGit,
    label: "Git",
    category: "DevOps & Cloud",
    color: "#F05032", // Git red/orange
  },
  {
    icon: mdiDocker,
    label: "Docker",
    category: "DevOps & Cloud",
    color: "#2496ED", // Docker blue
  },

  // 🚀 DevOps & Cloud
  {
    icon: mdiRocket,
    label: "Fastlane",
    category: "DevOps & Cloud",
    color: "#00D4AA", // Fastlane teal
  },
  {
    icon: mdiSourcePull,
    label: "GitHub Actions",
    category: "DevOps & Cloud",
    color: "#2088FF", // GitHub blue
  },
  {
    icon: mdiCogs,
    label: "CI/CD Pipelines",
    category: "DevOps & Cloud",
    color: "#FF6B35", // Orange
  },

  // 🧪 Testing & QA
  {
    icon: mdiTestTube,
    label: "Jest",
    category: "Testing & QA",
    color: "#C21325", // Jest red
  },
  {
    icon: mdiBug,
    label: "Detox",
    category: "Testing & QA",
    color: "#61DAFB", // React Native blue
  },
  {
    icon: mdiTestTube,
    label: "Cypress",
    category: "Testing & QA",
    color: "#17202C", // Cypress dark
  },
];
