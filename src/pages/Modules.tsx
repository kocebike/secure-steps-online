import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Lock, AlertTriangle, Fingerprint, Wifi, Eye, Server, KeyRound } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  { icon: Lock, title: "Сигурност на паролите", desc: "Създавайте силни пароли, използвайте мениджъри на пароли и избягвайте повторна употреба.", path: "/password-security", free: true },
  { icon: AlertTriangle, title: "Защита от фишинг", desc: "Разпознавайте фалшиви имейли, линкове и опити за измама.", path: "/phishing-protection", free: false },
  { icon: Fingerprint, title: "2FA Настройка", desc: "Активирайте двуфакторна автентикация навсякъде.", path: "/two-factor-auth", free: false },
  { icon: Wifi, title: "Мрежова сигурност", desc: "Защитете Wi-Fi, рутер и домашна мрежа.", path: "/network-security", free: false },
  { icon: Eye, title: "Поверителност онлайн", desc: "VPN, браузър настройки и защита на лични данни.", path: "/online-privacy", free: false },
  { icon: Server, title: "Сигурност на устройства", desc: "Антивирусни програми, обновления и криптиране.", path: "/device-security", free: false },
];

const Modules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Модули за <span className="text-primary neon-text">обучение</span>
          </h1>
          <p className="text-muted-foreground text-lg">Изберете тема и започнете обучението си по кибер сигурност.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={mod.path} className="block group">
                <div className="glass-card rounded-xl p-6 flex gap-5 items-start transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(174_72%_50%/0.1)] relative">
                  {!mod.free && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        <KeyRound className="w-3 h-3" />
                        Премиум
                      </span>
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <mod.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{mod.title}</h3>
                    <p className="text-sm text-muted-foreground">{mod.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Modules;
