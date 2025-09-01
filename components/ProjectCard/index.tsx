import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    tags,
    demoUrl,
    githubUrl,
}) => {
    return (
        <div className="bg-white border border-gray-200 hover:border-gray-300 transition-colors">
            {/* Project Image */}
            <div className="h-48 bg-gray-100 border-b border-gray-200">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Project Details */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-accent transition-colors text-sm font-medium flex items-center"
                        >
                            <span className="material-symbols-outlined mr-1">open_in_new</span>
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors text-sm flex items-center"
                        >
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="Github"
                                width={25}
                                height={25}
                                className="object-contain mr-1"
                            />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
