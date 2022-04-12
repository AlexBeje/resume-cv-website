// Components [Atoms]
import SectionTitle from "/src/Components/Atoms/Section/SectionTitle";
import SectionItem from "/src/Components/Atoms/Section/SectionItem";

// Components [Utils]
import useMobile from "/src/Components/Utils/useMobile";

// Mantine Components
import { Timeline } from "@mantine/core";

import * as MdIcons from "react-icons/md";

function Experience({ experience }) {
  const isMobile = useMobile();

  const renderExperienceTimeline = () => {
    return isMobile ? (
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
            <SectionItem key={id} item={experience} />
          </Timeline.Item>
        ))}
      </Timeline>
    ) : (
      experience.items.map((experience, id) => (
        <SectionItem key={id} item={experience} renderHeader />
      ))
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
