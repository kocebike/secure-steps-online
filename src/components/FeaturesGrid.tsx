import { Link } from "react-router-dom";
import { Shield, Lock, Fingerprint, Wifi, AlertTriangle, Eye, KeyRound, Server } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lock,
    title: "Сигурност на паролите",
    desc: "Научете как да създавате непробиваеми пароли и да управлявате достъпа си.",
    path: "/password-security",
    free: true,
  },
  {
    icon: AlertTriangle,
    title: "Защита от фишинг",
    desc: "Разпознавайте и избягвайте фишинг атаки, имейл измами и социално инженерство.",
    path: "/phishing-protection",
    free: false,
  },
  {
    icon: Fingerprint,
    title: "2FA Настройка",
    desc: "Двуфакторна автентикация — допълнителен слой защита за вашите акаунти.",
    path: "/two-factor-auth",
    free: false,
  },
  {
    icon: Wifi,
    title: "Мрежова сигурност",
    desc: "Защитете домашната си мрежа и Wi-Fi от нежелани достъпи.",
    path: "/network-security",
    free: false,
  },
  {
    icon: Eye,
    title: "Поверителност онлайн",
    desc: "Защитете личните си данни и следи в интернет.",
    path: "/online-privacy",
    free: false,
  },
  {
    icon: Server,
    title: "Сигурност на устройства",
    desc: "Обезопасете телефона, компютъра и всички свързани устройства.",
    path: "/device-security",
    free: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturesGrid = () => {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Модули за обучение</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Пълна <span className="text-primary neon-text">кибер защита</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Всички инструменти и знания, от които се нуждаете за да бъдете в безопасност онлайн.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Link to={feature.path} className="block group">
                <div className="glass-card rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(174_72%_50%/0.1)] relative overflow-hidden">
                  {!feature.free && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        <KeyRound className="w-3 h-3" />
                        Премиум
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
