import { about } from "@/data/about";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-black">
                        About Me
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Bio + Button */}
                        <div className="space-y-6">
                           {about.bio.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                           ))}
                            {/* Button to Skills Page */}
                            <Link
                                href="/skills"
                                className="inline-block bg-black text-white px-8 py-3 border border-black hover:bg-gray-900 transition-colors font-medium cursor-pointer"
                            >
                                View Skills
                            </Link>
                        </div>

                        {/* Right: Image */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={about.profileImage}
                                        alt="Profile"
                                        width={288}
                                        height={288}
                                        className="w-72 h-72 object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
