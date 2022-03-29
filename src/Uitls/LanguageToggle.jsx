
// React
import { useState } from "react";

// i18n
import { useTranslation } from "react-i18next";

// Mantine Components
import { Button } from "@mantine/core";

function LanguageToggle() {
  const { i18n } = useTranslation();
  const [language, changeLanguage] = useState(i18n.language);

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Button
      onClick={() => handleChangeLanguage(language === "es" ? "en" : "es")}
    >
      {language === "es" ? "ES" : "EN"}
    </Button>
  );
}

export default LanguageToggle;
