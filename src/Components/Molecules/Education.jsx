// i18n
import { withTranslation } from "react-i18next";

// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

// Utils
import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

function Education({ t }) {
  const educationItems = t("education.items", { returnObjects: true });

  const renderSectionItems = () => {
    return (
      hasValueAndIsArray(educationItems) &&
      educationItems.map((experience) => (
        <SectionItem key={experience.id} item={experience} />
      ))
    );
  };

  return (
    <>
      <SectionTitle>{t("education.section.title")}</SectionTitle>
      {renderSectionItems()}
    </>
  );
}

export default withTranslation()(Education);
