// Mantine Components
import { useMantineTheme, ActionIcon } from "@mantine/core";

// Icons
import * as BsIcons from "react-icons/bs";

function KeyboardShortcuts() {
  const theme = useMantineTheme();

  return (
    <>
      <ActionIcon variant="outline" color={theme.primaryColor}>
        <BsIcons.BsKeyboard />
      </ActionIcon>
    </>
  );
}

export default KeyboardShortcuts;
