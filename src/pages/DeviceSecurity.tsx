import PremiumContentPage from "@/components/PremiumContentPage";
import { Server } from "lucide-react";

const DeviceSecurity = () => (
  <PremiumContentPage
    title="Сигурност на устройства"
    icon={Server}
    description="Телефонът и компютърът ви съдържат цялото ви дигитално присъствие. Защитете ги правилно."
    previewItems={[
      "Антивирусни програми — кои работят наистина",
      "Обновления на системата — защо са критични",
      "Криптиране на диска — BitLocker, FileVault",
      "Защита на мобилно устройство",
      "Безопасно изтриване на данни",
      "Физическа сигурност на устройствата",
    ]}
  />
);

export default DeviceSecurity;
