import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";

function Summary({ t }) {
  return (
    <>
      <SectionTitle>{t("summary.section.title")}</SectionTitle>
      <p className="mb-0">{t("summary.content")}</p>
    </>
  );
}

export default withTranslation()(Summary);
