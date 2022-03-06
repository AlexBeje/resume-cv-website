import { Layout } from "element-react/next";

function SectionItem({ item }) {
  return (
    <>
      <Layout.Row>
        <Layout.Col xs="24" sm="20">
          <h3 className="my-1">{item.title}</h3>
        </Layout.Col>
        <Layout.Col xs="24" sm="4">
          <h5 className="md:text-right my-1 font-light">{item.date}</h5>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="24">
          <h5 className="my-1 text-primary">{item.role}</h5>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="24">
          <ul className="my-1 pl-5">
            {Array.isArray(item.skills) &&
              item.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </Layout.Col>
      </Layout.Row>
    </>
  );
}

export default SectionItem;
