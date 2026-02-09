import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";

const benefits = [
  "Достъп до всички модули",
  "Стъпка по стъпка инструкции",
  "Защита от фишинг атаки",
  "Настройка на 2FA",
  "Мрежова сигурност",
  "Защита на устройства",
  "Поверителност онлайн",
  "Постоянни обновления",
];

const PricingSection = () => {
  const { user, isPremium } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout");
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
    } catch (err: any) {
      toast.error(err.message || "Грешка");
    } finally {
      setLoading(false);
    }
  };

  const handleManage = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
    } catch (err: any) {
      toast.error(err.message || "Грешка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Един план. <span className="text-primary neon-text">Пълна защита.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Отключете всички модули и бъдете напълно защитени онлайн.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} className="max-w-md mx-auto">
          <div className="gradient-border rounded-2xl overflow-hidden">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Премиум план</span>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">€4.99</span>
                  <span className="text-muted-foreground">/месец</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Отменете по всяко време</p>
              </div>

              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              {isPremium ? (
                <Button onClick={handleManage} disabled={loading}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold text-base h-12">
                  {loading ? "Зареждане..." : "Управление на абонамент"}
                </Button>
              ) : user ? (
                <Button onClick={handleSubscribe} disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-12 neon-border">
                  {loading ? "Зареждане..." : "Започнете сега"}
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-12 neon-border">
                    Започнете сега
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
