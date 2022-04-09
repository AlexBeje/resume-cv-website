// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";
import Skill from "/src/Components/Atoms/Skill";

function Skills({skills}) {
  const renderSkill = () => {
    return skills.skill.map((skill) => <Skill skill={skill} key={skill.id} />);
  };

  return (
    <>
      <SectionTitle>{skills.section.title}</SectionTitle>
      {renderSkill()}
    </>
  );
}

export default Skills;
