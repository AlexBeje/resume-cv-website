import { useState } from "react";
import {
  ActionIcon,
  useMantineColorScheme,
  Kbd,
  Popover,
  Text,
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

function ThemeSwitcher() {
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="flex ">
      <Popover
        spacing="xs"
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="center"
        withArrow
        target={
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            onMouseEnter={() => setOpened(true)}
            onMouseLeave={() => setOpened(false)}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        }
      >
        <Text component="span" mr="xs">
          Use the shortcut:
        </Text>{" "}
        <Kbd>⌘</Kbd> + <Kbd>J</Kbd>
      </Popover>
    </div>
  );
}

export default ThemeSwitcher;
