import { Layout } from "element-react/next";

import LanguageToggle from "/src/Uitls/LanguageToggle";

import Header from "/src/Components/Molecules/Header";
import Summary from "/src/Components/Molecules/Summary";
import Experience from "/src/Components/Molecules/Experience";
import Education from "/src/Components/Molecules/Education";
import Courses from "/src/Components/Molecules/Courses";
import Extracurricular from "/src/Components/Molecules/Extracurricular";

function Home() {
  return (
    <div id="Home">
      <Layout.Row>
        <Layout.Col className="flex justify-end">
          <LanguageToggle />
        </Layout.Col>
      </Layout.Row>
      <Layout.Row className="my-10">
        <Layout.Col>
          <Header />
        </Layout.Col>
      </Layout.Row>
      <Layout.Row>
        <Layout.Col className="mb-10">
          <Summary />
        </Layout.Col>
        <Layout.Col className="mb-10">
          <Experience />
        </Layout.Col>
        <Layout.Col className="mb-10">{/* <Education /> */}</Layout.Col>
        <Layout.Col className="mb-10">{/* <Courses /> */}</Layout.Col>
        <Layout.Col>{/* <Extracurricular /> */}</Layout.Col>
      </Layout.Row>
    </div>
  );
}

export default Home;
