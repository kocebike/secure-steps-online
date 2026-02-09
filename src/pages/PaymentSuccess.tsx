import Navbar from "@/components/Navbar";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const { checkSubscription } = useAuth();

  useEffect(() => {
    checkSubscription();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Плащането е успешно!</h1>
          <p className="text-muted-foreground mb-8">
            Вече имате пълен достъп до всички модули за кибер сигурност. Започнете обучението си!
          </p>
          <Link to="/modules">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
              Към модулите
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
