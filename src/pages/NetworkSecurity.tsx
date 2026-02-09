import PremiumContentPage from "@/components/PremiumContentPage";
import { Wifi } from "lucide-react";

const NetworkSecurity = () => (
  <PremiumContentPage
    title="Мрежова сигурност"
    icon={Wifi}
    description="Домашната ви мрежа е входната врата за хакерите. Научете как да я защитите правилно."
    previewItems={[
      "Как да защитите домашния си Wi-Fi",
      "Промяна на настройките на рутера",
      "WPA3 vs WPA2 — кое да изберете",
      "VPN — какво е и кога да го използвате",
      "Обществени Wi-Fi мрежи — рискове и защита",
      "Firewall настройки за домашна мрежа",
    ]}
  />
);

export default NetworkSecurity;
