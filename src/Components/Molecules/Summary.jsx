import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";

function Summary({ t }) {
  return (
    <>
      <SectionTitle>{t("summary.section.title")}</SectionTitle>
      {t("summary.content") !== "summary.content" && (
        <p className="mb-0">{t("summary.content")}</p>
      )}
    </>
  );
}

export default withTranslation()(Summary);
