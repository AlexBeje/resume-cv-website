import { useWindowSize } from "usehooks-ts";
import { Button, Popover } from "element-react";

// Mantine hooks
import { useMantineTheme } from "@mantine/core";

function Skill({ skill }) {
  const { width } = useWindowSize();

  function createMarkup(block) {
    return { __html: block.description };
  }

  const renderButtons = () => {
    const theme = useMantineTheme();
    const dark = theme.colorScheme === "dark";

    return skill.blocks.map((block) => {
      return (
        <div className="w-full" key={block.id}>
          <Popover
            className={block.type === "primary" ? "popover-style" : "hidden"}
            content={<div dangerouslySetInnerHTML={createMarkup(block)} />}
            placement="top"
            width={width > 450 ? 400 : 200}
            visibleArrow={false}
            title={block.title}
          >
            <div className="w-full flex">
              <Button
                type={block.type}
                style={
                  (block.id === "1" && {
                    borderTop: dark && 0,
                    borderRight: 0,
                    borderBottom: dark && 0,
                    borderLeft: dark && 0,
                    borderRadius: ".25rem 0 0 .25rem",
                    borderColor: !dark && "#dfe6eb",
                  }) ||
                  (block.id === "2" && {
                    borderTop: dark && 0,
                    borderRight: 0,
                    borderBottom: dark && 0,
                    borderLeft: 0,
                    borderColor: !dark && "#dfe6eb",
                  }) ||
                  (block.id === "3" && {
                    borderTop: dark && 0,
                    borderRight: 0,
                    borderBottom: dark && 0,
                    borderLeft: 0,
                    borderColor: !dark && "#dfe6eb",
                  }) ||
                  (block.id === "4" && {
                    borderTop: dark && 0,
                    borderRight: 0,
                    borderBottom: dark && 0,
                    borderLeft: 0,
                    borderColor: !dark && "#dfe6eb",
                  }) ||
                  (block.id === "5" && {
                    borderTop: dark && 0,
                    borderRight: dark && 0,
                    borderBottom: dark && 0,
                    borderLeft: 0,
                    borderRadius: "0 .25rem .25rem 0",
                    borderColor: !dark && "#dfe6eb",
                  })
                }
                className="w-full h-7"
              ></Button>
            </div>
          </Popover>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      <h3 className="sm:w-36">{skill.title}</h3>
      <Button.Group className="w-full sm:w-full">
        <div className="flex">{renderButtons()}</div>
      </Button.Group>
    </div>
  );
}

export default Skill;
