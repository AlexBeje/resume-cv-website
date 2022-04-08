// Mantine Components
import {
  Global,
  MantineProvider,
  ColorSchemeProvider,
  Container,
  Affix,
  Transition,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";

// Mantine Hooks
import {
  useColorScheme,
  useLocalStorage,
  useHotkeys,
  useWindowScroll,
} from "@mantine/hooks";

// React Icons
import { ArrowUpIcon } from "@modulz/radix-icons";

function Theme({ children }) {
  const theme = useMantineTheme();
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const [scroll, scrollTo] = useWindowScroll();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          spacing: {
            x: 0,
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
            xl: 48,
            xxl: 64,
            xxxl: 80,
          },
        }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <Global
          styles={(theme) => ({
            body: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[1],
            },
          })}
        />
        <Container
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
            boxShadow: theme.shadows.xl,
            paddingTop: theme.spacing.md,
            [`@media (min-width: ${theme.breakpoints.md}px)`]: {
              marginTop: theme.spacing.xl,
              marginBottom: theme.spacing.xl,
              padding: `${theme.spacing.xl}px ${theme.spacing.xxl}px !important`,
            },
          })}
        >
          {children}
          <Affix position={{ bottom: 20, right: 20 }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
              {(transitionStyles) => (
                <ActionIcon
                  style={transitionStyles}
                  variant="filled"
                  size="lg"
                  color={theme.primaryColor}
                  onClick={() => scrollTo({ y: 0 })}
                >
                  <ArrowUpIcon />
                </ActionIcon>
              )}
            </Transition>
          </Affix>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Theme;
