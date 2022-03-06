import { withTranslation } from "react-i18next";
import { Layout } from "element-react/next";

import LanguageToggle from "/src/Uitls/LanguageToggle";

import Header from "/src/Components/Molecules/Header";
import Summary from "/src/Components/Molecules/Summary";
import Experience from "/src/Components/Molecules/Experience";

function Home({ t }) {
  return (
    <div id="Home">
      <Layout.Row>
        <Layout.Col className="flex justify-end">
          <LanguageToggle />
        </Layout.Col>
        <Layout.Col>
          <Header />
          <Summary />
          <Experience />
        </Layout.Col>
      </Layout.Row>
    </div>
  );
}

export default withTranslation()(Home);
