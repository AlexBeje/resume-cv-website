// i18n
import { useTranslation } from "react-i18next";

// Utils
import ThemeSwitcher from "/src/Uitls/ThemeSwitcher";
import LanguageToggle from "/src/Uitls/LanguageToggle";

// Components [Molecules]
import Header from "/src/Components/Molecules/Header";
import Summary from "/src/Components/Molecules/Summary";
import Experience from "/src/Components/Molecules/Experience";
import Education from "/src/Components/Molecules/Education";
import Skills from "/src/Components/Molecules/Skills";
import Extracurricular from "/src/Components/Molecules/Extracurricular";

// Mantine Components
import { Grid } from "@mantine/core";

function Home() {
  const { t } = useTranslation();
  const experience = t("experience", { returnObjects: true });

  return (
    <>
      <Grid gutter="x">
        <Grid.Col className="flex justify-between">
          <ThemeSwitcher />
          <LanguageToggle />
        </Grid.Col>
      </Grid>

      <Grid gutter="x" mt="sm" mb="lg">
        <Grid.Col>
          <Header />
        </Grid.Col>
      </Grid>

      <Grid gutter="lg">
        <Grid.Col>
          <Summary />
        </Grid.Col>
        <Grid.Col>
          <Experience experience={experience} />
        </Grid.Col>
        <Grid.Col>
          <Education />
        </Grid.Col>
        <Grid.Col>
          <Skills />
        </Grid.Col>
        <Grid.Col>
          <Extracurricular />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Home;
