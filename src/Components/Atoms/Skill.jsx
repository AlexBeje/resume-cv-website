import { Button, Tooltip } from "element-react";

function Skill({ skill }) {
  function createMarkup(block) {
    return { __html: block.description };
  }

  const renderButtons = () => {
    return skill.blocks.map((block) => {
      return (
        <Tooltip
          className="w-full"
          content={<div dangerouslySetInnerHTML={createMarkup(block)} />}
          effect="dark"
          key={block.id}
          openDelay={100}
          placement="top"
        >
          <Button
            type={block.type}
            style={
              (block.id === "1" && {
                borderRight: 0,
                borderRadius: ".25rem 0 0 .25rem",
                borderColor: "#dfe6eb",
              }) ||
              (block.id === "2" && {
                borderLeft: 0,
                borderRight: 0,
                borderColor: "#dfe6eb",
              }) ||
              (block.id === "3" && {
                borderLeft: 0,
                borderRight: 0,
                borderColor: "#dfe6eb",
              }) ||
              (block.id === "4" && {
                borderLeft: 0,
                borderRight: 0,
                borderColor: "#dfe6eb",
              }) ||
              (block.id === "5" && {
                borderLeft: 0,
                borderRadius: "0 .25rem .25rem 0",
                borderColor: "#dfe6eb",
              })
            }
            className="w-full h-7"
          ></Button>
        </Tooltip>
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