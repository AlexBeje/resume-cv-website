import { Button } from "element-react";

import { withTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";

function MyComponent({ t }) {

  return (
    <div>
      <Button type="primary" onClick={() => changeLanguage("es")}>
        ES
      </Button>
      <Button type="primary" onClick={() => changeLanguage("en")}>
        EN
      </Button>
      <h1>{t("Welcome to React")}</h1>
    </div>
  );
}

export default withTranslation()(MyComponent);
