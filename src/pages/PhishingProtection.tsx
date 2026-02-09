import PremiumContentPage from "@/components/PremiumContentPage";
import { AlertTriangle } from "lucide-react";

const PhishingProtection = () => (
  <PremiumContentPage
    title="Защита от фишинг"
    icon={AlertTriangle}
    description="Фишинг атаките са най-честата причина за хакнати акаунти. Научете как да ги разпознавате и избягвате."
    previewItems={[
      "Как да разпознаете фишинг имейл",
      "Проверка на URL адреси преди кликване",
      "Социално инженерство — какво е и как работи",
      "Безопасно поведение в социалните мрежи",
      "Какво да правите ако сте жертва на фишинг",
      "Инструменти за проверка на подозрителни линкове",
    ]}
  />
);

export default PhishingProtection;
