import todoAppImage from "@/public/projects/todo-app.png";
import bmiAppImage from "@/public/projects/bmi-app.png";
import codeEditorImage from "@/public/projects/code-editor.png";
import photoEditorImage from "@/public/projects/photo-editor.png";

export const projects = [
    {
        title: "Todo App",
        description: "A simple to-do list web app that lets users add, edit, delete, and filter tasks by all, active, or completed.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        image: todoAppImage,
        url: "https://todo-list-eight-dusky.vercel.app/",
        githubUrl: "https://github.com/Aneeshpissay330/todo-list"
    },
    {
        title: "BMI Calculator",
        description: "A simple BMI calculator web app where users can input their height and weight to quickly calculate their Body Mass Index.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        image: bmiAppImage,
        url: "https://bmi-app-six.vercel.app/",
        githubUrl: "https://github.com/Aneeshpissay330/bmi-app"
    },
    {
        title: "Code Editor",
        description: "A lightweight online code editor that lets users write HTML, CSS, and JavaScript with a live preview and options to run, reset, or download the code.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        image: codeEditorImage,
        url: "https://code-editor-dun-nine.vercel.app/",
        githubUrl: "https://github.com/Aneeshpissay330/code-editor"
    },
     {
        title: "Photo Editor",
        description: "A simple photo editor web app to upload images and apply adjustments like brightness, contrast, saturation, blur, and filters.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        image: photoEditorImage,
        url: "https://photo-editor-sepia.vercel.app/",
        githubUrl: "https://github.com/Aneeshpissay330/photo-editor"
    }
];