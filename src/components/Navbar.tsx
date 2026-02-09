import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, User, LogOut, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { label: "Начало", path: "/" },
  { label: "Защита", path: "/modules" },
  { label: "Цени", path: "/#pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, isPremium, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="w-8 h-8 text-primary animate-pulse-neon" />
          <span className="text-xl font-bold font-display tracking-tight text-foreground">
            КиберЩит
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary neon-text" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-3">
              {isPremium && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/20">
                  <Crown className="w-3 h-3" /> Премиум
                </span>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Изход
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
                <User className="w-4 h-4 mr-2" />
                Вход
              </Button>
            </Link>
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
              {user ? (
                <Button variant="outline" size="sm" onClick={() => { signOut(); setMobileOpen(false); }}
                  className="w-full border-primary/30 text-primary hover:bg-primary/10">
                  <LogOut className="w-4 h-4 mr-2" /> Изход
                </Button>
              ) : (
                <Link to="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                    <User className="w-4 h-4 mr-2" /> Вход
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
