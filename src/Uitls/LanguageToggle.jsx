import { Button } from "element-react";
import i18next from "i18next";
import { useState } from "react";

import { changeLanguage } from "../../i18n";

function MyComponent() {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const updateLanguage = (language) => {
    setCurrentLanguage(language);
    changeLanguage(language);
  };

  return (
    <Button.Group>
      <Button
        type={currentLanguage === "en" ? "primary" : "secondary"}
        size="small"
        onClick={() => updateLanguage("en")}
      >
        EN
      </Button>
      <Button
        type={currentLanguage === "es" ? "primary" : "secondary"}
        size="small"
        onClick={() => updateLanguage("es")}
      >
        ES
      </Button>
    </Button.Group>
  );
}

export default MyComponent;
