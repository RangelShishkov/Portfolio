import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Motivated Web Developer</h3>
            <p className="text-muted-foreground">
              With a strong foundation in web development, I specialize in
              building dynamic, user-friendly, and scalable web applications
              using modern technologies like React.js, Node.js, and MongoDB.
            </p>
            <p className="text-muted-foreground">
              My passion lies in delivering clean, efficient solutions to
              complex challenges while continuously expanding my expertise
              through self-study and hands-on experience. Whether crafting
              intuitive user interfaces or designing robust back-end systems, I
              am dedicated to staying ahead in the ever-evolving web development
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me!
              </a>
              <a
                href="/DevCv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download="RangelShishkovCV"
              >
                Download my CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <Code className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Expertise in building responsive, scalable, and secure
                    applications using modern frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Focused on creating intuitive, user-centric interfaces that
                    enhance functionality and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {" "}
                  <Briefcase className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects</h4>
                  <p className="text-muted-foreground">
                    Delivered diverse, full-stack applications with a focus on
                    performance, scalability, and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
