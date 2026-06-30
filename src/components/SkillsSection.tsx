const skills = {
  frontend: [
    { name: 'Angular', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'HTML5 & CSS3', level: 92 },
    { name: 'TailwindCSS', level: 88 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'REST API', level: 88 },
    { name: 'MongoDB', level: 82 },
    { name: 'MySQL', level: 75 },
    { name: 'Mongoose', level: 80 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Jira', level: 85 },
    { name: 'Postman', level: 88 },
    { name: 'VS Code', level: 95 },
    { name: 'Agile', level: 85 },
    { name: 'CI/CD', level: 75 },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            Skills
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="glass rounded-2xl p-8 glow-primary">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Frontend</h3>
            </div>
            <div className="space-y-6">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass rounded-2xl p-8 glow-secondary">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Backend</h3>
            </div>
            <div className="space-y-6">
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-secondary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-secondary to-secondary/60 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glass rounded-2xl p-8 glow-accent">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Tools & More</h3>
            </div>
            <div className="space-y-6">
              {skills.tools.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-accent font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            🏆 Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">25%</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Performance Optimization</h4>
                <p className="text-muted-foreground text-sm">
                  Improved web application performance by 25% through optimized React component rendering
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/5 border border-secondary/20">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-secondary">⭐</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Early Delivery</h4>
                <p className="text-muted-foreground text-sm">
                  Recognized for delivering high-quality full-stack features ahead of deadlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
