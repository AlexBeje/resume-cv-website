import { withTranslation } from "react-i18next";

import SectionTitle from "/src/Components/Atoms/SectionTitle";
import Skill from "/src/Components/Atoms/Skill";

function Skills({ t }) {
  const skills = t("skills.items", { returnObjects: true });

  const renderSkill = () => {
    return skills.map((skill) => <Skill skill={skill} key={skill.id} />);
  };

  return (
    <>
      <SectionTitle>{t("skills.section.title")}</SectionTitle>
      {renderSkill()}
    </>
  );
}

export default withTranslation()(Skills);
