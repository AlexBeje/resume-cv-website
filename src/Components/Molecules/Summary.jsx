// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";

// Mantine Components
import { Text } from "@mantine/core";

function Summary({ summary }) {
  return (
    <>
      <SectionTitle>{summary.section.title}</SectionTitle>
      <Text>{summary.content}</Text>
    </>
  );
}

export default Summary;
