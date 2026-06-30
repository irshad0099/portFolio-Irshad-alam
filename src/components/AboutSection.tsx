import { MapPin, Phone, Mail, Calendar, Award, Code } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3", icon: Calendar },
  { label: "Projects Completed", value: "10+", icon: Code },
  { label: "Performance Boost", value: "35%", icon: Award },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            About Me
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Info Cards */}
          <div className="space-y-6">
            {/* Main card */}
            <div className="glass rounded-2xl p-8 glow-primary">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Full Stack Web Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Full Stack Web Developer with 3 years of experience in
                designing, developing, and deploying scalable web applications.
                Proficient in Angular, React.js, Node.js, Express, MongoDB, and
                TailwindCSS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Skilled in building RESTful APIs, managing databases, and
                creating responsive user interfaces. Experienced in Agile
                workflows, Git-based version control, and cross-functional
                collaboration.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 flex items-center gap-4 glass-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Delhi, India</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4 glass-hover">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Phone className="text-secondary" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+91-6205356010</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4 glass-hover sm:col-span-2">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Mail className="text-accent" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">
                    irshad103d@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats and Education */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center glass-hover"
                >
                  <stat.icon className="text-primary mx-auto mb-3" size={28} />
                  <p className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Award className="text-primary" size={24} />
                Education
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-semibold text-foreground">
                    B.E. in Computer Science
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    RKDF University, Bhopal
                  </p>
                  <p className="text-primary text-sm font-medium">8.01 CGPA</p>
                </div>
                <div className="relative pl-6 border-l-2 border-secondary/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary" />
                  <h4 className="font-semibold text-foreground">
                    Diploma in CSE
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    RKDF University, Bhopal
                  </p>
                  <p className="text-secondary text-sm font-medium">
                    7.49 CGPA
                  </p>
                </div>
                <div className="relative pl-6 border-l-2 border-accent/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
                  <h4 className="font-semibold text-foreground">
                    Full Stack Training
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Naresh IT, Hyderabad
                  </p>
                  <p className="text-accent text-sm font-medium">
                    Industrial Training
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

export default AboutSection;
