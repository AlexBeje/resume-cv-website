import { withTranslation } from "react-i18next";

import Icon from "/src/Components/Atoms/Icon";

import { useMantineTheme, Grid, Title, Text, Code } from "@mantine/core";

function Header({ t }) {
  const theme = useMantineTheme();

  const checkIfFieldHasValue = (field) => {
    return !t(`header.${field}`).includes("header.");
  };

  return (
    <Grid gutter={0}>
      <Grid.Col className="flex flex-wrap justify-center">
        {checkIfFieldHasValue("name") && (
          <Title order={1} mr="xs" className="font-light">
            {t("header.name")}
          </Title>
        )}
        {checkIfFieldHasValue("surnames") && (
          <Title order={1}>{t("header.surnames")}</Title>
        )}
      </Grid.Col>
      <Grid.Col my="xs" className="flex justify-center">
        {checkIfFieldHasValue("profession") && (
          <Code
            className={`flex justify-center content-center text-center w-fit px-2 py-1 ${
              theme.colorScheme === "dark"
                ? "bg-darkBackgroundGray"
                : "bg-lightBorderGray"
            }`}
          >
            {t("header.profession")}
          </Code>
        )}
      </Grid.Col>
      <Grid.Col>
        <p
          className={`flex justify-center content-center text-center text-xs gap-1 flex-wrap m-0`}
        >
          {checkIfFieldHasValue("phone") && (
            <>
              <Icon type="phone">{t("header.phone")}</Icon>
              <Text component="span">|</Text>
            </>
          )}
          {checkIfFieldHasValue("email") && (
            <>
              <Icon type="email">{t("header.email")}</Icon>
              <Text component="span">|</Text>
            </>
          )}
          {checkIfFieldHasValue("linkedin") && (
            <>
              <Icon type="linkedin">{t("header.linkedin")}</Icon>
              <Text component="span">|</Text>
            </>
          )}
          {checkIfFieldHasValue("github") && (
            <>
              <Icon type="github">{t("header.github")}</Icon>
            </>
          )}
        </p>
      </Grid.Col>
    </Grid>
  );
}

export default withTranslation()(Header);
