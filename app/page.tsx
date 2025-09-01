import Link from "next/link";

export default function Home() {
  return (
    <section
      id="hero"
      className="h-[800px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Building scalable web platforms &amp;
            <span className="text-accent">cross-platform</span> mobile apps
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer specializing in modern web technologies and mobile
            app development. Turning ideas into digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects" className="bg-black text-white px-8 py-3 border border-black hover:bg-gray-900 transition-colors font-medium cursor-pointer">
              View Projects
            </Link>
            {/* <span className="border border-gray-300 text-gray-700 px-8 py-3 hover:border-black hover:text-black transition-colors font-medium cursor-pointer">
              Get in Touch
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}