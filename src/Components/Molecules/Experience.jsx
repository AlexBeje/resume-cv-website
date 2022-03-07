import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

function Experience({ t }) {
  const experienceItems = t("experience.items", { returnObjects: true });

  const renderSesctionItems = () => {
    return hasValueAndIsArray(experienceItems) &&
      experienceItems.map((experience) => (
        <SectionItem key={experience.id} item={experience} />
      ));
  };

  return (
    <>
      <SectionTitle>{t("experience.section.title")}</SectionTitle>
      {renderSesctionItems()}
    </>
  );
}

export default withTranslation()(Experience);
