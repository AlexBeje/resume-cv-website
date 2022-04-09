// i18n
import { withTranslation } from "react-i18next";

// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";
import SectionAccordionItem from "/src/Components/Atoms/Section/SectionAccordionItem";

// Utils

function Education({ t }) {
  const educationItems = t("education.items", { returnObjects: true });

  const renderSectionAccordionItems = () => {
    return educationItems.map((experience) => (
      <SectionAccordionItem key={experience.id} item={experience} />
    ));
  };

  return (
    <>
      <SectionTitle>{t("education.section.title")}</SectionTitle>
      {renderSectionAccordionItems()}
    </>
  );
}

export default withTranslation()(Education);
