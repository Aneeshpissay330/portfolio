import {
  mdiReact,
  mdiLanguageTypescript,
  mdiLanguageJavascript,
  mdiNodejs,
  mdiDatabase,
  mdiAws,
  mdiKubernetes,
  mdiGit,
  mdiDocker,
  mdiAndroid,
} from '@mdi/js';

export const skills = [
  // 🖥️ Frontend
  {
    icon: mdiReact,
    label: "React",
    category: "Frontend",
    color: "#61DAFB", // React blue
  },
  {
    icon: mdiReact, // Next.js uses React icon as fallback
    label: "Next.js",
    category: "Frontend",
    color: "#000000", // Next.js black
  },
  {
    icon: mdiReact, // React Native uses React icon
    label: "React Native",
    category: "Frontend",
    color: "#61DAFB", // React Native blue (same as React)
  },
  {
    icon: mdiAndroid,
    label: "Android",
    category: "Frontend",
    color: "#3DDC84", // Android green
  },
  {
    icon: mdiLanguageTypescript,
    label: "TypeScript",
    category: "Frontend",
    color: "#3178C6", // TypeScript blue
  },
  {
    icon: mdiLanguageJavascript,
    label: "JavaScript",
    category: "Frontend",
    color: "#F7DF1E", // JavaScript yellow
  },

  // ⚙️ Backend
  {
    icon: mdiNodejs,
    label: "Node.js",
    category: "Backend",
    color: "#339933", // Node.js green
  },

  // 🗄️ Database
  {
    icon: mdiDatabase,
    label: "MongoDB",
    category: "Database",
    color: "#47A248", // MongoDB green
  },

  // ☁️ Cloud / DevOps
  {
    icon: mdiAws,
    label: "AWS",
    category: "Cloud / DevOps",
    color: "#FF9900", // AWS orange
  },
  {
    icon: mdiKubernetes,
    label: "Kubernetes",
    category: "Cloud / DevOps",
    color: "#326CE5", // Kubernetes blue
  },

  // 🛠️ Tools
  {
    icon: mdiGit,
    label: "Git",
    category: "Tools",
    color: "#F05032", // Git red/orange
  },
  {
    icon: mdiDocker,
    label: "Docker",
    category: "Tools",
    color: "#2496ED", // Docker blue
  },
];
