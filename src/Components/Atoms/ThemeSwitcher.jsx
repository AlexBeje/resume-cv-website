// Mantine Components
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

// Mantine Hooks
import { useHotkeys } from "@mantine/hooks";

// Icons
import * as RiIcons from "react-icons/ri";

function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
    >
      {dark ? <RiIcons.RiSunLine /> : <RiIcons.RiMoonFill />}
    </ActionIcon>
  );
}

export default ThemeSwitcher;
