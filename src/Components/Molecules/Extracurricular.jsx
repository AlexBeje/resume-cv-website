// i18n
import { withTranslation } from "react-i18next";

// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

// Utils
import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

function Extracurricular({ t }) {
  const extracurricularItems = t("extracurricular.items", {
    returnObjects: true,
  });

  return (
    <>
      <SectionTitle>{t("extracurricular.section.title")}</SectionTitle>
      {hasValueAndIsArray(extracurricularItems) &&
        extracurricularItems.map((extracurricular) => (
          <SectionItem key={extracurricular.id} item={extracurricular} />
        ))}
    </>
  );
}

export default withTranslation()(Extracurricular);
