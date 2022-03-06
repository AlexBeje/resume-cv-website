import { withTranslation } from "react-i18next";

import { Layout } from "element-react/next";

import LanguageToggle from "../Uitls/LanguageToggle";

import Header from "../Components/Molecules/Header";

function Home({ t }) {
  return (
    <div id="Home">
      <Layout.Row>
        <Layout.Col className="flex justify-end">
          <LanguageToggle />
        </Layout.Col>
        <Layout.Col>
          <Header />
        </Layout.Col>
      </Layout.Row>
    </div>
  );
}

export default withTranslation()(Home);
