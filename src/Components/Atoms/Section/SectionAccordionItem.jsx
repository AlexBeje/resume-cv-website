// React Icons
import * as Icons from "react-icons/ai";

// Mantine Components
import { Text, Title, Accordion, Grid } from "@mantine/core";

// Mantine hooks
import { useMantineTheme } from "@mantine/core";

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
              <Icons.AiOutlineLink className="ml-1 mb-[.1rem] align-text-bottom text-primary" />
            ) : (
              <Icons.AiOutlineLink className="ml-1 mb-[.1rem] align-text-bottom" />
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
                      ${
                        dark
                          ? "border-darkBorderGray"
                          : "border-lightBorderGray"
                      }
                      ${
                        dark
                          ? "bg-darkBackgroundGray"
                          : "bg-lightBackgroundGray"
                      }
                  `}
            >
              <ul className="accordion__ul">{checkForLinks(project)}</ul>
            </div>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  };

  return (
    <Grid mt="sm" mb="sm" gutter="sm">
      <Grid.Col
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <Title order={2}> {item.title}</Title>
        <Text size="sm">{item.date}</Text>
      </Grid.Col>
      <Grid.Col>{renderCollapsedItems()}</Grid.Col>
    </Grid>
  );
}

export default SectionItem;
