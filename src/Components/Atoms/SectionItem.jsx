import { Layout, Collapse } from "element-react/next";
import { useEffect, useRef } from "react";

import { hasValueAndIsArray } from "/src/Uitls/DataFunctions";

function SectionItem({ item }) {
  const ref = useRef(null);

  useEffect(() => {
    console.log("width", ref.current.offsetWidth);
  }, [ref.current]);

  const renderCollapsedItems = () => {
    return (
      hasValueAndIsArray(item.roles) && (
        <Collapse value="0">
          {item.roles.map((role) => {
            return (
              <Collapse.Item
                title={100 > 300 ? role.title : `Project ${role.id}`}
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
    <div ref={ref}>
      <Layout.Row className="mb-2">
        <Layout.Col xs="24" sm="18">
          <h3 className="my-1">{item.title}</h3>
        </Layout.Col>
        <Layout.Col xs="24" sm="6">
          <h5 className="md:text-right my-1 font-light">{item.date}</h5>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="24">{renderCollapsedItems()}</Layout.Col>
      </Layout.Row>
    </div>
  );
}

export default SectionItem;
