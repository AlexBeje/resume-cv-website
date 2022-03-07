import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

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
