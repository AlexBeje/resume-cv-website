// Mantine Components
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

// Mantine Hooks
import { useHotkeys } from "@mantine/hooks";

// Icons
import { Sun, MoonStars } from "tabler-icons-react";

function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Use the shortcut Ctrl + J to toggle the theme"
    >
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
}

export default ThemeSwitcher;
