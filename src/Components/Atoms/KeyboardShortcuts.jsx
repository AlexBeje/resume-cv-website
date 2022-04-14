// React Components
import { useState } from "react";

// Mantine Components
import {
  useMantineTheme,
  ActionIcon,
  Box,
  Title,
  Text,
  Divider,
  Kbd,
  Button,
  Center,
} from "@mantine/core";

// Mantine Hooks
import { useScrollLock, useOs, useHotkeys } from "@mantine/hooks";

// Icons
import * as BsIcons from "react-icons/bs";

function KeyboardShortcuts({ keyboardShortcuts }) {
  const [opened, setOpened] = useState();

  const [scrollLocked, setScrollLocked] = useScrollLock();
  const theme = useMantineTheme();
  const os = useOs();

  const toggleKeyboardModal = () => {
    setOpened(!opened);
    setScrollLocked(!scrollLocked);
  };

  useHotkeys([["escape", () => setOpened(false)]]);

  return (
    <>
      <ActionIcon
        variant="outline"
        color={theme.primaryColor}
        onClick={toggleKeyboardModal}
      >
        <BsIcons.BsKeyboard />
      </ActionIcon>
      {opened && (
        <Box
          component="div"
          className="h-screen w-screen fixed left-0 top-0 z-10 flex"
        >
          <Box
            component="div"
            className="h-full w-full fixed"
            onClick={toggleKeyboardModal}
            style={{
              background: theme.colors.dark[9],
              opacity: theme.colorScheme === "dark" ? 0.9 : 0.5,
            }}
          />
          <Box
            component="div"
            className="w-[300px] md:w-[600px] m-auto left-0 top-0 z-10 rounded-[8px]"
            p="md"
            style={{
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[7]
                  : theme.white,
            }}
          >
            <Box
              component="div"
              className="flex justify-between items-center"
              mb="xs"
            >
              <Title>{keyboardShortcuts.title}</Title>
              <ActionIcon
                variant="transparent"
                onClick={toggleKeyboardModal}
                size="xl"
              >
                <BsIcons.BsX
                  size={40}
                  color={theme.colorScheme === "dark" ? "inherit" : theme.black}
                />
              </ActionIcon>
            </Box>
            <Box component="div" mb="lg">
              <Text component="span" mr={4}>
                {keyboardShortcuts.operatingSystem}:
              </Text>
              <Text component="span" color={theme.primaryColor}>
                {os === "macos" ? "MacOS" : "Widnows"}
              </Text>
            </Box>
            <Divider label={keyboardShortcuts.labels[0]} />
            <Box
              component="div"
              className="flex justify-between items-center"
              mb="sm"
            >
              <Text component="strong">{keyboardShortcuts.shortcuts[0]}</Text>
              <Box component="div">
                {os === "macos" ? <Kbd>⌘</Kbd> : <Kbd>Ctrl</Kbd>} + <Kbd>J</Kbd>
              </Box>
            </Box>
            <Divider label={keyboardShortcuts.labels[1]} />
            <Box
              component="div"
              className="flex justify-between items-center"
              mb="sm"
            >
              <Text component="strong">{keyboardShortcuts.shortcuts[1]}</Text>
              <Box component="div">
                {os === "macos" ? <Kbd>⌘</Kbd> : <Kbd>Ctrl</Kbd>} + <Kbd>K</Kbd>
              </Box>
            </Box>
            <Divider label={keyboardShortcuts.labels[2]} />
            <Box
              component="div"
              className="flex justify-between items-center"
              mb="sm"
            >
              <Text component="strong">{keyboardShortcuts.shortcuts[2]}</Text>
              <Box component="div">
                {os === "macos" ? <Kbd>⌘</Kbd> : <Kbd>Ctrl</Kbd>} + <Kbd>I</Kbd>
              </Box>
            </Box>
            <Center mt="lg">
              <Button variant="filled" onClick={toggleKeyboardModal}>
                Done
              </Button>
            </Center>
          </Box>
        </Box>
      )}
    </>
  );
}

export default KeyboardShortcuts;
