import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

function Education({ t }) {
  const educationItems = t("education.items", { returnObjects: true });

  return (
    <>
      <SectionTitle>{t("education.section.title")}</SectionTitle>
      {Array.isArray(educationItems) &&
        educationItems.map((education) => (
          <SectionItem key={education.id} item={education} />
        ))}
    </>
  );
}

export default withTranslation()(Education);
