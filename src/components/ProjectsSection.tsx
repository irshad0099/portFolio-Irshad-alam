import {
  ExternalLink,
  Github,
  Activity,
  Shield,
  Bell,
  Calendar,
  MessageSquare,
  Layout,
  Database,
} from "lucide-react";

const projects = [
  {
    title: "Activity Tracker",
    description:
      "Built event tracking modules in React.js and Node.js to capture user interactions. Integrated REST APIs and Mongoose for real-time data persistence and analytics dashboard.",
    icon: Activity,
    color: "primary",
    tags: ["React.js", "Node.js", "REST API", "Mongoose"],
    link: "#",
    github: "#",
  },
  {
    title: "Governance System",
    description:
      "Developed a comprehensive governance management system with role-based access control, policy management, and compliance tracking features using Angular and Node.js.",
    icon: Shield,
    color: "secondary",
    tags: ["Angular", "Node.js", "MongoDB", "Express"],
    link: "#",
    github: "#",
  },
  {
    title: "Reminder Application",
    description:
      "Created a smart reminder application with scheduled notifications, recurring events, and push notification support. Built with React.js and integrated with MongoDB.",
    icon: Bell,
    color: "accent",
    tags: ["React.js", "Node.js", "MongoDB", "Push API"],
    link: "#",
    github: "#",
  },
  {
    title: "Meeting Scheduler",
    description:
      "Built a collaborative meeting scheduling platform with calendar integration, availability management, and video conferencing links generation using React and Express.",
    icon: Calendar,
    color: "primary",
    tags: ["React.js", "Express", "MongoDB", "WebSocket"],
    link: "#",
    github: "#",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Developed a Node.js-based automation tool integrated with MongoDB and Express for message scheduling, bulk messaging, and user engagement tracking.",
    icon: MessageSquare,
    color: "secondary",
    tags: ["Node.js", "MongoDB", "Express", "Automation"],
    link: "#",
    github: "#",
  },
  {
    title: "Web Personalization SDK",
    description:
      "Created personalization SDKs in Angular and React.js to dynamically render banners, surveys, and lead forms based on user activity and behavior patterns.",
    icon: Layout,
    color: "accent",
    tags: ["Angular", "React.js", "SDK", "TailwindCSS"],
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            Projects
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications I've built, showcasing my skills in
            full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group glass rounded-2xl p-6 glass-hover transition-all duration-500 hover:scale-[1.02] ${
                project.color === "primary"
                  ? "hover:glow-primary"
                  : project.color === "secondary"
                  ? "hover:glow-secondary"
                  : "hover:glow-accent"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  project.color === "primary"
                    ? "bg-primary/20"
                    : project.color === "secondary"
                    ? "bg-secondary/20"
                    : "bg-accent/20"
                }`}
              >
                <project.icon
                  className={
                    project.color === "primary"
                      ? "text-primary"
                      : project.color === "secondary"
                      ? "text-secondary"
                      : "text-accent"
                  }
                  size={28}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    project.color === "primary"
                      ? "text-primary hover:text-primary/80"
                      : project.color === "secondary"
                      ? "text-secondary hover:text-secondary/80"
                      : "text-accent hover:text-accent/80"
                  }`}
                >
                  {/* <ExternalLink size={16} />
                  Live Demo */}
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  {/* <Github size={16} />
                  Source */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
