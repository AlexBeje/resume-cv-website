import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import SectionItem from "/src/Components/Atoms/SectionItem";

function Courses({ t }) {
  const coursesItems = t("courses.items", { returnObjects: true });

  return (
    <>
      <SectionTitle>{t("courses.section.title")}</SectionTitle>
      {Array.isArray(coursesItems) &&
        coursesItems.map((courses) => (
          <SectionItem key={courses.id} item={courses} />
        ))}
    </>
  );
}

export default withTranslation()(Courses);
