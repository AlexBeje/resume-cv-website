import { Layout } from "element-react/next";

function ExperienceItem({ experience }) {
  return (
    <div id="ExperienceItem" className="mb-2">
      <Layout.Row>
        <Layout.Col xs="24" sm="20">
          <h3 className="my-1">{experience.title}</h3>
        </Layout.Col>
        <Layout.Col xs="24" sm="4">
          <h5 className="md:text-right my-1 font-light">{experience.date}</h5>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="24">
          <h5 className="my-1 text-primary">{experience.role}</h5>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col span="24">
          <ul className="my-1 pl-5">
            {Array.isArray(experience.skills) &&
              experience.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </Layout.Col>
      </Layout.Row>
    </div>
  );
}

export default ExperienceItem;
