// React Hooks
import { useState } from "react";

// Mantine Components
import {
  useMantineTheme,
  Popover,
  Button,
  Title,
  Space,
  List,
} from "@mantine/core";

// Mantine Hooks
import { useViewportSize } from '@mantine/hooks';

function Skill({ skill }) {
  const {width} = useViewportSize();
  const theme = useMantineTheme();

  console.log('👨‍🎤', width)
  console.log('👂', theme.breakpoints.sm)

  const transform = "unset";
  const border = {
    radiusLeft: {
      borderRadius: ".25rem 0 0 .25rem",
      transform,
    },
    radiusRight: {
      borderRadius: "0 .25rem .25rem 0",
      transform,
    },
    noRadius: {
      borderRadius: "0",
      transform,
    },
  };

  const renderButtons = () => {
    return skill.blocks.map((block, id) => {
      const [opened, setOpened] = useState(false);
      return (
        <Popover
          className="flex-1"
          key={id}
          onClose={() => setOpened(false)}
          opened={opened}
          position="top"
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
                (id === 0 && border.radiusLeft) ||
                (id === 1 && border.noRadius) ||
                (id === 2 && border.noRadius) ||
                (id === 3 && border.noRadius) ||
                (id === 4 && border.radiusRight)
              }
            ></Button>
          }
          width={320}
          withArrow={width > theme.breakpoints.md}
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
