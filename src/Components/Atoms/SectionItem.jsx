import { useWindowSize } from "usehooks-ts";
import { Layout, Collapse } from "element-react/next";

import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

function SectionItem({ item }) {
  const { width } = useWindowSize();

  const renderCollapsedItems = () => {
    return (
      hasValueAndIsArray(item.roles) && (
        <Collapse value="0">
          {item.roles.map((role) => {
            return (
              <Collapse.Item
                title={width > 350 ? role.title : `Project ${role.id}`}
                key={role.id}
                name={role.id}
              >
                <ul className="my-1 pl-5">
                  {Array.isArray(role.skills) &&
                    role.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </Collapse.Item>
            );
          })}
        </Collapse>
      )
    );
  };

  return (
    <>
      <Layout.Row className="mb-2">
        <Layout.Col xs="24" sm="18">
          <h3 className="my-1">{item.title}</h3>
        </Layout.Col>
        <Layout.Col xs="24" sm="6">
          <h5 className="font-light my-1 md:my-2 md:text-right">
            {item.date}
          </h5>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="24">{renderCollapsedItems()}</Layout.Col>
      </Layout.Row>
    </>
  );
}

export default SectionItem;
