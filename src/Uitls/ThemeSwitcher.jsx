import { useState } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

function ThemeSwitcher() {
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
      title="Use the shortcut ⌘ + J to toggle the theme"
    >
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
}

export default ThemeSwitcher;
