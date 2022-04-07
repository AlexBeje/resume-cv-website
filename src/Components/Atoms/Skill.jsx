// React Hooks
import { useState } from "react";

// Mantine Hooks
import {
  useMantineTheme,
  Popover,
  Button,
  Title,
  Space,
  List,
} from "@mantine/core";

function Skill({ skill }) {
  const theme = useMantineTheme();

  const renderButtons = () => {
    return skill.blocks.map((block, i) => {
      const [opened, setOpened] = useState(false);
      return (
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          className="flex-1"
          key={i}
          width={320}
          position="top"
          withArrow
          styles={{
            body: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.gray[1],
              borderColor:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[3],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.black,
            },
            arrow: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.gray[1],
              borderColor:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[3],
            },
          }}
          target={
            <Button
              onClick={() => setOpened((m) => block.descriptions && !m)}
              fullWidth
              variant={block.descriptions ? "filled" : "light"}
              style={
                (block.id === "1" && {
                  borderRadius: ".25rem 0 0 .25rem",
                  transform: "unset",
                }) ||
                (block.id === "2" && {
                  borderRadius: "0",
                  transform: "unset",
                }) ||
                (block.id === "3" && {
                  borderRadius: "0",
                  transform: "unset",
                }) ||
                (block.id === "4" && {
                  borderRadius: "0",
                  transform: "unset",
                }) ||
                (block.id === "5" && {
                  borderRadius: "0 .25rem .25rem 0",
                  transform: "unset",
                })
              }
            ></Button>
          }
        >
          <Title order={3}>{block.title}</Title>
          <Space h="xs" />
          <List size="xs" style={{ color: "inherit" }}>
            {block.descriptions &&
              block.descriptions.map((description, i) => (
                <List.Item key={i}>{description}</List.Item>
              ))}
          </List>
        </Popover>
      );
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      <h3 className="sm:w-36">{skill.title}</h3>
      <div className="w-full flex">{renderButtons()}</div>
    </div>
  );
}

export default Skill;
