// React Hooks
import { useState } from "react";

// Mantine Components
import { MantineProvider, ColorSchemeProvider, Container } from "@mantine/core";

// Mantine Hooks
import { useColorScheme, useLocalStorage, useHotkeys } from "@mantine/hooks";

function Theme({ children }) {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

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
        <Container mt={16} mb={32}>
          {children}
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Theme;
