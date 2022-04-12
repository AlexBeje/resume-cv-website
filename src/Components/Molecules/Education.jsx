// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";
import SectionItem from "/src/Components/Atoms/Section/SectionItem";

function Education({ education }) {
  const renderSectionItems = () => {
    return education.items.map((education) => (
      <SectionItem key={education.id} item={education} renderHeader />
    ));
  };

  return (
    <>
      <SectionTitle>{education.section.title}</SectionTitle>
      {renderSectionItems()}
    </>
  );
}

export default Education;
