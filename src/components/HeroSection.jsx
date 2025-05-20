import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary text-glow opacity-0 animate-fade-in-delay-1">
              {" "}
              Rangel
            </span>
            <span className="text-gradient text-glow ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Shishkov
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            JavaScript Developer with a solid foundation in both front-end and
            back-end development. With expertise in the MERN stack, I have
            successfully built dynamic and scalable web applications.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a href="#about">
          <ArrowDown className="h-7 w-7 text-primary" />
        </a>
      </div>
    </section>
  );
};
