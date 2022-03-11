import { useWindowSize } from "usehooks-ts";
import { Layout, Collapse } from "element-react/next";

import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

function SectionItem({ item }) {
  const { width } = useWindowSize();

  const renderLinkOrParagraph = (skill) => {
    if (skill.link) {
      return (
        <a
          href={skill.link}
          target="_blank"
          className="font-bold text-primary no-underline"
        >
          {skill.title}
        </a>
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
        <Collapse value="0">
          {item.projects.map((role) => {
            return (
              <Collapse.Item
                title={width > 360 ? role.title : `Project ${role.id}`}
                key={role.id}
                name={role.id}
              >
                <ul className="my-1 pl-5">{checkForLinks(role)}</ul>
              </Collapse.Item>
            );
          })}
        </Collapse>
      )
    );
  };

  return (
    <>
      <Layout.Row className="mb-2 mt-4">
        <Layout.Col xs="24" sm="18">
          <h3 className="my-1">{item.title}</h3>
        </Layout.Col>
        <Layout.Col xs="24" sm="6">
          <h5 className="font-light my-1 md:my-2 md:text-right">{item.date}</h5>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="24">{renderCollapsedItems()}</Layout.Col>
      </Layout.Row>
    </>
  );
}

export default SectionItem;