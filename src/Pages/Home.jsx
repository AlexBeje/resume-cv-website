import { withTranslation } from "react-i18next";

import LanguageToggle from "../Uitls/LanguageToggle";

function Home({ t }) {
  return (
    <div id="Home">
      <div className="mt-8">
        <LanguageToggle />
      </div>
      <h1>{t("Welcome to React")}</h1>
    </div>
  );
}

export default withTranslation()(Home);
