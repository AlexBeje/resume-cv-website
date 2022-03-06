import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

function Extracurricular({ t }) {
  const extracurricularItems = t("extracurricular.items", { returnObjects: true });

  return (
    <>
      <SectionTitle>{t("extracurricular.section.title")}</SectionTitle>
      {Array.isArray(extracurricularItems) &&
        extracurricularItems.map((extracurricular) => (
          <SectionItem key={extracurricular.id} item={extracurricular} />
        ))}
    </>
  );
}

export default withTranslation()(Extracurricular);
