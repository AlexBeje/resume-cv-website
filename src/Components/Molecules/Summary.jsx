import { withTranslation } from "react-i18next";

import SectionTitle from "../Atoms/SectionTitle";

function Summary({ t }) {
  return (
    <>
      <SectionTitle>{t("summary.section.title")}</SectionTitle>
    </>
  );
}

export default withTranslation()(Summary);
