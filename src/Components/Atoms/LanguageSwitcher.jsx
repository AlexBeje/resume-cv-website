// React
import { useState } from "react";

// i18n
import { useTranslation } from "react-i18next";

// Mantine Components
import { Button } from "@mantine/core";

// Mantine Hooks
import { useHotkeys } from "@mantine/hooks";

function LanguageSwticher() {
  const { i18n } = useTranslation();
  const [language, changeLanguage] = useState(i18n.language);

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useHotkeys([
    ["mod+K", () => handleChangeLanguage(language === "es" ? "en" : "es")],
  ]);

  return (
    <Button
      onClick={() => handleChangeLanguage(language === "es" ? "en" : "es")}
      title="Use the shortcut Ctrl + K to toggle the language"
    >
      {language === "es" ? "ES" : "EN"}
    </Button>
  );
}

export default LanguageSwticher;
