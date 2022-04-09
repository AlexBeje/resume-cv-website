// i18n
import { withTranslation } from "react-i18next";

// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";
import SectionAccordionItem from "/src/Components/Atoms/Section/SectionAccordionItem";

function Extracurricular({ t }) {
  const extracurricularItems = t("extracurricular.items", {
    returnObjects: true,
  });

  return (
    <>
      <SectionTitle>{t("extracurricular.section.title")}</SectionTitle>
      {extracurricularItems.map((extracurricular) => (
        <SectionAccordionItem key={extracurricular.id} item={extracurricular} />
      ))}
    </>
  );
}

export default withTranslation()(Extracurricular);
