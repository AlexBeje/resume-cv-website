// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";
import SectionItem from "/src/Components/Atoms/Section/SectionItem";

function Extracurricular({ extracurricular }) {
  return (
    <>
      <SectionTitle>{extracurricular.section.title}</SectionTitle>
      {extracurricular.items.map((extracurricular) => (
        <SectionItem
          key={extracurricular.id}
          item={extracurricular}
          renderHeader
        />
      ))}
    </>
  );
}

export default Extracurricular;
