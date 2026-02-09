import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, Check, AlertCircle, Key, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Използвайте дълги пароли",
    desc: "Минимум 12 символа. Колкото по-дълга е паролата, толкова по-трудна е за разбиване. Комбинирайте букви, цифри и специални символи.",
    icon: Key,
  },
  {
    title: "Никога не повтаряйте пароли",
    desc: "Всеки акаунт трябва да има уникална парола. Ако един акаунт бъде хакнат, останалите ще са защитени.",
    icon: AlertCircle,
  },
  {
    title: "Използвайте мениджър на пароли",
    desc: "Приложения като Bitwarden, 1Password или KeePass съхраняват паролите ви сигурно и ги попълват автоматично.",
    icon: ShieldCheck,
  },
  {
    title: "Активирайте двуфакторна автентикация",
    desc: "Допълнителен слой защита — дори паролата ви да бъде открадната, хакерът не може да влезе без втори фактор.",
    icon: Lock,
  },
];

const badPasswords = ["123456", "password", "qwerty", "admin123", "iloveyou", "letmein"];

const PasswordSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Безплатен модул</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Сигурност на <span className="text-primary neon-text">паролите</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            Паролата е първата линия на защита. Научете как да създавате и управлявате непробиваеми пароли.
          </p>
        </motion.div>

        {/* Bad passwords warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-xl p-6 mb-10 border-destructive/30"
        >
          <h3 className="text-lg font-semibold text-destructive mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Най-лошите пароли — НИКОГА не ги използвайте!
          </h3>
          <div className="flex flex-wrap gap-3">
            {badPasswords.map((p) => (
              <span key={p} className="px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive text-sm font-mono border border-destructive/20">
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-xl p-6 flex gap-5 items-start hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-xs text-primary font-bold">
                    {i + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 gradient-border rounded-xl"
        >
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Чеклист за сигурни пароли</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Минимум 12 символа",
                "Комбинация от букви, цифри и символи",
                "Уникална за всеки акаунт",
                "Съхранена в мениджър на пароли",
                "Двуфакторна автентикация е активирана",
                "Не съдържа лична информация",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordSecurity;
