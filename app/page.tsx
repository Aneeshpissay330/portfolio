
import LinkButton from "../components/ui/link-button";

export default function Home() {
  return (
    <section
      id="hero"
      className="h-[800px] flex items-center justify-center bg-gradient-to-br from-secondary to-background spacing-section"
    >
      <div className="container mx-auto spacing-container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building scalable web platforms &amp;
            <span className="text-accent"> cross-platform</span> mobile apps
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer specializing in modern web technologies and mobile
            app development. Turning ideas into digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LinkButton href="/projects">
              View Projects
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}