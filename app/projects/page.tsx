import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-black">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                image={`/api/screenshot?url=${encodeURIComponent(project.url)}`}
                                tags={project.technologies}
                                demoUrl={project.url}
                                githubUrl={project.githubUrl}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}