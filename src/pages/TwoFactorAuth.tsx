import PremiumContentPage from "@/components/PremiumContentPage";
import { Fingerprint } from "lucide-react";

const TwoFactorAuth = () => (
  <PremiumContentPage
    title="2FA Настройка"
    icon={Fingerprint}
    description="Двуфакторната автентикация добавя втори слой защита. Научете как да я настроите правилно навсякъде."
    previewItems={[
      "Какво е 2FA и защо е важна",
      "Видове 2FA — SMS, приложение, хардуерен ключ",
      "Настройка на Google Authenticator",
      "Настройка на 2FA за Google, Facebook, Instagram",
      "Резервни кодове — как да ги запазите",
      "Хардуерни ключове (YubiKey) — за максимална защита",
    ]}
  />
);

export default TwoFactorAuth;
