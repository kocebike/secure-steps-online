import PremiumContentPage from "@/components/PremiumContentPage";
import { Eye } from "lucide-react";

const OnlinePrivacy = () => (
  <PremiumContentPage
    title="Поверителност онлайн"
    icon={Eye}
    description="Вашите лични данни са ценни. Научете как да ги защитите от проследяване и злоупотреба."
    previewItems={[
      "Как работят тракерите в интернет",
      "Настройки за поверителност в браузъра",
      "VPN услуги — кои да изберете",
      "Как да изтриете цифровия си отпечатък",
      "Защита на лични данни в социалните мрежи",
      "Алтернативи на Google за повече поверителност",
    ]}
  />
);

export default OnlinePrivacy;
