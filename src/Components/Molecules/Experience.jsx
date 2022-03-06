import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import ExperienceItem from "/src/Components/Atoms/ExperienceItem";

function Experience({ t }) {
  const experienceItems = t("experience.items", { returnObjects: true });

  return (
    <>
      <SectionTitle>{t("experience.section.title")}</SectionTitle>
      {Array.isArray(experienceItems) && experienceItems.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </>
  );
}

export default withTranslation()(Experience);
