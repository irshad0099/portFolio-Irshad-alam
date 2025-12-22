const AnimatedBubbles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large bubbles */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float"
        style={{ top: '10%', left: '-10%', animationDelay: '0s' }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl animate-float-slow"
        style={{ top: '50%', right: '-5%', animationDelay: '2s' }}
      />
      <div 
        className="absolute w-[350px] h-[350px] rounded-full bg-accent/10 blur-3xl animate-float"
        style={{ bottom: '10%', left: '20%', animationDelay: '4s' }}
      />
      
      {/* Medium bubbles */}
      <div 
        className="absolute w-[200px] h-[200px] rounded-full bg-bubble-4/15 blur-2xl animate-pulse-glow"
        style={{ top: '20%', right: '20%', animationDelay: '1s' }}
      />
      <div 
        className="absolute w-[180px] h-[180px] rounded-full bg-primary/15 blur-2xl animate-float-slow"
        style={{ bottom: '30%', right: '30%', animationDelay: '3s' }}
      />
      <div 
        className="absolute w-[220px] h-[220px] rounded-full bg-secondary/10 blur-2xl animate-pulse-glow"
        style={{ top: '60%', left: '10%', animationDelay: '2.5s' }}
      />

      {/* Small accent bubbles */}
      <div 
        className="absolute w-[100px] h-[100px] rounded-full bg-accent/20 blur-xl animate-float"
        style={{ top: '30%', left: '40%', animationDelay: '1.5s' }}
      />
      <div 
        className="absolute w-[80px] h-[80px] rounded-full bg-primary/25 blur-xl animate-float-slow"
        style={{ bottom: '20%', right: '15%', animationDelay: '0.5s' }}
      />
      <div 
        className="absolute w-[120px] h-[120px] rounded-full bg-bubble-4/20 blur-xl animate-pulse-glow"
        style={{ top: '70%', right: '40%', animationDelay: '3.5s' }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBubbles;
