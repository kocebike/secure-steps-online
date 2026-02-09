import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground">КиберЩит</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Начало</Link>
            <Link to="/modules" className="hover:text-primary transition-colors">Модули</Link>
            <Link to="/login" className="hover:text-primary transition-colors">Вход</Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 КиберЩит. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
