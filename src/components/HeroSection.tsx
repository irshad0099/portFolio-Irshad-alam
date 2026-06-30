import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="opacity-0 animate-slide-up stagger-1">
              {/* <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
                👋 Welcome to my portfolio
              </span> */}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-slide-up stagger-2">
              Hi, I'm <span className="text-gradient">Irshad Alam</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 opacity-0 animate-slide-up stagger-3">
              Full Stack Web Developer
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-slide-up stagger-4">
              Building scalable web applications with 3 years of experience in
              <span className="text-primary"> Angular</span>,
              <span className="text-secondary"> React.js</span>,
              <span className="text-accent"> Node.js</span> & MongoDB
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-slide-up stagger-5">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass glass-hover text-foreground font-semibold flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start opacity-0 animate-slide-up stagger-6">
              <a
                href="https://linkedin.com/in/irshadalam0099"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/irshad0099"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:irshad103d@gmail.com"
                className="w-12 h-12 rounded-xl glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end opacity-0 animate-fade-in stagger-3">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-glow" />

              {/* Profile container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass border-2 border-primary/30 glow-primary">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-bold text-gradient opacity-40">
                    IA
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass animate-float">
                <span className="text-sm font-medium text-primary">
                  React.js
                </span>
              </div>
              <div className="absolute top-1/2 -left-6 px-4 py-2 rounded-xl glass animate-float-slow">
                <span className="text-sm font-medium text-secondary">
                  Node.js
                </span>
              </div>
              <div className="absolute -bottom-4 right-8 px-4 py-2 rounded-xl glass animate-float">
                <span className="text-sm font-medium text-accent">Angular</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-6">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
