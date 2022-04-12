// Components [Molecules]
import HeaderIcon from "/src/Components/Molecules/Header/HeaderIcon";

// Mantine Components
import { useMantineTheme, Grid, Title, Code, Text } from "@mantine/core";

function Header({ header }) {
  const theme = useMantineTheme();

  return (
    <Grid gutter="x">
      <Grid.Col className="flex flex-wrap justify-center">
        <Title order={1} mr="xs" className="font-light">
          {header.name}
        </Title>
        {<Title order={1}>{header.surnames}</Title>}
      </Grid.Col>
      <Grid.Col my="xs" className="flex justify-center">
        <Code
          className={`flex justify-center content-center text-center w-fit px-2 py-1 ${
            theme.colorScheme === "dark"
              ? "bg-darkBackgroundGray"
              : "bg-lightBorderGray"
          }`}
        >
          {header.profession}
        </Code>
      </Grid.Col>
      <Grid.Col>
        <Grid
          className={`flex justify-center content-center text-center text-xs gap-1 flex-wrap m-0`}
        >
          <HeaderIcon type="phone">{header.phone}</HeaderIcon>
          <Text component="span">|</Text>
          <HeaderIcon type="email">{header.email}</HeaderIcon>
          <Text component="span">|</Text>
          <HeaderIcon type="linkedin">{header.linkedin}</HeaderIcon>
          <Text component="span">|</Text>
          <HeaderIcon type="github">{header.github}</HeaderIcon>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}

export default Header;
