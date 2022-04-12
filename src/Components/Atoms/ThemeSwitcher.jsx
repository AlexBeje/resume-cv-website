// Mantine Components
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

// Mantine Hooks
import { useHotkeys } from "@mantine/hooks";

// Icons
import * as Icons from "react-icons/ri";

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
      {dark ? <Icons.RiSunLine /> : <Icons.RiMoonFill />}
    </ActionIcon>
  );
}

export default ThemeSwitcher;
