import { withTranslation } from "react-i18next";

import LanguageToggle from "../Uitls/LanguageToggle";

function Home({ t }) {
  return (
    <>
      <LanguageToggle />
      <h1>{t("Welcome to React")}</h1>
    </>
  );
}

export default withTranslation()(Home);
