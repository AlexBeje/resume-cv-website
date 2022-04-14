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

  const renderOS = () => {
    switch (os) {
      case "macos":
        return "MacOS";
      case "ios":
        return "iOS";
      case "android":
        return "Android";
      case "linux":
        return "Linux";
      default:
        return "Windows";
    }
  };

  const renderOsKey = () => {
    return os === "macos" || os === "ios" ? <Kbd>⌘</Kbd> : <Kbd>Ctrl</Kbd>;
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
                {renderOS()}
              </Text>
            </Box>
            <Divider label={keyboardShortcuts.labels[0]} />
            <Box
              component="div"
              className="flex justify-between items-center"
              mb="sm"
            >
              <Text component="strong" className="flex-1">
                {keyboardShortcuts.shortcuts[0]}
              </Text>
              <Box component="div" className="flex-1 max-w-fit ml-2">
                {renderOsKey()} + <Kbd>J</Kbd>
              </Box>
            </Box>
            <Divider label={keyboardShortcuts.labels[1]} />
            <Box
              component="div"
              className="flex justify-between items-center"
              mb="sm"
            >
              <Text component="strong" className="flex-1">
                {keyboardShortcuts.shortcuts[1]}
              </Text>
              <Box component="div" className="flex-1 max-w-fit ml-2">
                {renderOsKey()} + <Kbd>K</Kbd>
              </Box>
            </Box>
            <Divider label={keyboardShortcuts.labels[2]} />
            <Box
              component="div"
              className="flex justify-between items-center"
              mb="sm"
            >
              <Text component="strong" className="flex-1">
                {keyboardShortcuts.shortcuts[2]}
              </Text>
              <Box component="div" className="flex-1 max-w-fit ml-2">
                {renderOsKey()} + <Kbd>I</Kbd>
              </Box>
            </Box>
            <Center mt="lg">
              <Button variant="filled" onClick={toggleKeyboardModal}>
                {keyboardShortcuts.done}
              </Button>
            </Center>
          </Box>
        </Box>
      )}
    </>
  );
}

export default KeyboardShortcuts;
