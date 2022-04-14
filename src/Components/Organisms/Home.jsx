// i18n
import { useTranslation } from "react-i18next";

// Components [Atoms]
import ThemeSwitcher from "/src/Components/Atoms/ThemeSwitcher";
import LanguageSwitcher from "/src/Components/Atoms/LanguageSwitcher";
import KeyboardShortcuts from "/src/Components/Atoms/KeyboardShortcuts";

// Components [Molecules]
import Header from "/src/Components/Molecules/Header/Header";
import Summary from "/src/Components/Molecules/Summary";
import Experience from "/src/Components/Molecules/Experience";
import Education from "/src/Components/Molecules/Education";
import Skills from "/src/Components/Molecules/Skills";
import Extracurricular from "/src/Components/Molecules/Extracurricular";

// Mantine Components
import { Grid } from "@mantine/core";

function Home() {
  let { t } = useTranslation();

  t = {
    keyboardShortcuts: t("keyboardShortcuts", {
      returnObjects: true,
    }),
    header: t("header", { returnObjects: true }),
    summary: t("summary", { returnObjects: true }),
    experience: t("experience", { returnObjects: true }),
    education: t("education", { returnObjects: true }),
    skills: t("skills", { returnObjects: true }),
    extracurricular: t("extracurricular", { returnObjects: true }),
  };

  return (
    <>
      <Grid gutter="x">
        <Grid.Col className="flex justify-between">
          <ThemeSwitcher />
          <Grid gutter="xs">
            <Grid.Col className="flex-1">
              <KeyboardShortcuts
                keyboardShortcuts={t.keyboardShortcuts}
              />
            </Grid.Col>
            <Grid.Col className="flex-1">
              <LanguageSwitcher />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      <Grid gutter="x" mt="sm" mb="lg">
        <Grid.Col>
          <Header header={t.header} />
        </Grid.Col>
      </Grid>

      <Grid gutter="lg">
        <Grid.Col>
          <Summary summary={t.summary} />
        </Grid.Col>
        <Grid.Col>
          <Experience experience={t.experience} />
        </Grid.Col>
        <Grid.Col>
          <Education education={t.education} />
        </Grid.Col>
        <Grid.Col>
          <Skills skills={t.skills} />
        </Grid.Col>
        <Grid.Col>
          <Extracurricular extracurricular={t.extracurricular} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Home;
