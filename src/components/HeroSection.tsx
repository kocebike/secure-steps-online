import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cyber.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Кибер сигурност"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <Shield className="w-4 h-4 text-primary animate-pulse-neon" />
            <span className="text-sm text-primary font-medium">Вашата онлайн защита започва тук</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Научете се да бъдете</span>
            <br />
            <span className="text-primary neon-text">непробиваеми</span>
            <span className="text-foreground"> онлайн</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Стъпка по стъпка ръководства за кибер сигурност — от пароли до мрежова защита.
            Защитете себе си и данните си от хакери.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/modules">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12 neon-border">
                Разгледайте модулите
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <a href="#pricing">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-semibold text-base px-8 h-12">
                Вижте плана
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
