// React Icons
import { AiOutlineLink } from "react-icons/ai";

// Mantine Components
import { Text, Accordion, Grid } from "@mantine/core";

// Mantine hooks
import { useMantineTheme } from "@mantine/core";

// Utils
import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

function SectionItem({ item }) {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";

  const renderLinkOrParagraph = (skill) => {
    if (skill.link) {
      return (
        <Text
          component="a"
          href={skill.link}
          target="_blank"
          className={`no-underline hover:text-hover`}
        >
          <span className={skill.mark && "text-primary"}>
            {skill.title}
            {skill.mark ? (
              <AiOutlineLink className="ml-1 mb-[.1rem] align-text-bottom text-primary" />
            ) : (
              <AiOutlineLink className="ml-1 mb-[.1rem] align-text-bottom" />
            )}
          </span>
        </Text>
      );
    } else {
      return skill.title;
    }
  };

  const checkForLinks = (role) => {
    return (
      Array.isArray(role.skills) &&
      role.skills.map((skill, i) => {
        return <li key={i}>{renderLinkOrParagraph(skill)}</li>;
      })
    );
  };

  const renderCollapsedItems = () => {
    return (
      hasValueAndIsArray(item.projects) && (
        <Accordion>
          {item.projects.map((project, id) => (
            <Accordion.Item
              className="accordion__item"
              label={project.title}
              key={id}
            >
              <div
                className={`
                      border-solid
                      border-t-[1px]
                      border-r-0
                      border-b-0
                      border-l-0
                      ${dark ? "border-darkGray" : "border-gray"}
                      ${dark ? "bg-darkGray" : "bg-lightGray"}
                  `}
              >
                <ul className="accordion__ul">{checkForLinks(project)}</ul>
              </div>
            </Accordion.Item>
          ))}
        </Accordion>
      )
    );
  };

  return (
    <Grid className="mb-2 mt-4">
      <Grid.Col
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <h2 className="m-0 mb-2 sm:m-0">{item.title}</h2>
        <p className="m-0 text-sm">{item.date}</p>
      </Grid.Col>
      <Grid.Col span={12}>{renderCollapsedItems()}</Grid.Col>
    </Grid>
  );
}

export default SectionItem;
