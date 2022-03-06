import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

function Experience({ t }) {
  const experienceItems = t("experience.items", { returnObjects: true });

  return (
    <>
      <SectionTitle>{t("experience.section.title")}</SectionTitle>
      {Array.isArray(experienceItems) &&
        experienceItems.map((experience) => (
          <SectionItem key={experience.id} item={experience} />
        ))}
    </>
  );
}

export default withTranslation()(Experience);
