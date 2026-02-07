import { Building2, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "Yono Entertainment Pvt Ltd",
    location: "Mohali, Chandigarh",
    role: "Full Stack Developer",
    period: "Sep 2025 – Present",
    type: "Full-time",
    color: "primary",
    description: [
      "Developing and maintaining entertainment web applications using React.js and Node.js",
      "Building scalable backend services with Express.js and MongoDB",
      "Creating responsive and interactive user interfaces with TailwindCSS",
      "Collaborating with cross-functional teams to deliver high-quality products",
    ],
  },
  {
    company: "CapEngage Technology Solutions Pvt. Ltd.",
    location: "Hyderabad",
    role: "Associate Software Engineer",
    period: "Jan 2024 – March 2025",
    type: "Full-time",
    color: "secondary",
    description: [
      "Designed and implemented responsive web applications using Angular, React.js, and TailwindCSS",
      "Developed RESTful APIs using Node.js and Express to handle data flow between frontend and backend",
      "Managed MongoDB databases with Mongoose and optimized query performance",
      "Used Git and GitHub for version control, Jira for sprint management, and Postman for API testing",
      "Collaborated with designers and backend engineers to enhance UI/UX and scalability",
      "Delivered tested, maintainable, and efficient code in Agile sprints",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            Experience
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Work Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful web solutions and growing as a developer through
            hands-on experience
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 md:left-1/2 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
              )}

              <div
                className={`flex flex-col md:flex-row items-start gap-8 mb-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary z-10" />

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`glass rounded-2xl p-8 glass-hover ${
                      exp.color === "primary"
                        ? "glow-primary"
                        : "glow-secondary"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                            exp.color === "primary"
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary/20 text-secondary"
                          }`}
                        >
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 size={16} />
                          <span
                            className={
                              exp.color === "primary"
                                ? "text-primary"
                                : "text-secondary"
                            }
                          >
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <ArrowRight
                            size={16}
                            className={`mt-1 flex-shrink-0 ${
                              exp.color === "primary"
                                ? "text-primary"
                                : "text-secondary"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
