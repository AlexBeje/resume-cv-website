// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";

// Mantine Components
import { useMantineTheme, Timeline, Accordion } from "@mantine/core";

import * as MdIcons from "react-icons/md";

function Experience({ experience }) {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";

  const renderExperienceTimeline = () => {
    return (
      <Timeline active={0} bulletSize={24} lineWidth={2}>
        {experience.items.map((experience, id) => (
          <Timeline.Item
            bullet={<MdIcons.MdWork size={12} />}
            title={
              <span
                className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
              >
                <h2 className="m-0 mb-2 sm:m-0">{experience.title}</h2>
                <p className="m-0 text-sm">{experience.date}</p>
              </span>
            }
            key={id}
          >
            <Accordion>
              {experience.projects.map((project, id) => (
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
                    <ul className="accordion__ul">
                      {project.skills.map((skill, id) => (
                        <li key={id}>{skill.title}</li>
                      ))}
                    </ul>
                  </div>
                </Accordion.Item>
              ))}
            </Accordion>
          </Timeline.Item>
        ))}
      </Timeline>
    );
  };

  return (
    <>
      <SectionTitle>{experience.section.title}</SectionTitle>
      {renderExperienceTimeline()}
    </>
  );
}

export default Experience;
