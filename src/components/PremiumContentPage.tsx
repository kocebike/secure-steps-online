import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PremiumGateProps {
  title: string;
  icon: React.ElementType;
  description: string;
  previewItems: string[];
}

const PremiumContentPage = ({ title, icon: Icon, description, previewItems }: PremiumGateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <KeyRound className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Премиум модул</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title.split(" ").map((word, i) => 
              i === title.split(" ").length - 1 ? (
                <span key={i} className="text-primary neon-text">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">{description}</p>
        </motion.div>

        {/* Preview of what's inside */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-xl p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon className="w-5 h-5 text-primary" />
            Какво ще научите:
          </h3>
          <div className="space-y-3">
            {previewItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lock gate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="gradient-border rounded-2xl"
        >
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-primary animate-pulse-neon" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Този модул е за премиум потребители
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Абонирайте се за €4.99/месец и получете достъп до всички модули и ръководства.
            </p>
            <Link to="/login">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold neon-border">
                Абонирайте се за €4.99/мес
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PremiumContentPage;
