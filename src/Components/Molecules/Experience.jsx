

import SectionTitle from "/src/Components/Atoms/SectionTitle";

import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

import { Timeline, Accordion } from "@mantine/core";

import * as MdIcons from "react-icons/md";

function Experience({ experience }) {
  const renderExperienceTimeline = () => {
    return (
      <Timeline active={0} bulletSize={24} lineWidth={2}>
        {hasValueAndIsArray(experience.items) &&
          experience.items.map((experience, id) => (
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
                  <Accordion.Item label={project.title} key={id}>
                    <ul className="-mt-1 -mb-1 -ml-6">
                      {project.skills.map((skill, id) => (
                        <li key={id}>{skill.title}</li>
                      ))}
                    </ul>
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
