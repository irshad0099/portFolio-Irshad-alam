import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">I</span>
              </div>
              <span className="font-bold text-lg text-foreground">
                Irshad<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Made with <Heart size={14} className="text-accent" /> by Irshad Alam
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/irshadalam0099"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/irshad0099"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:irshad103d@gmail.com"
              className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
