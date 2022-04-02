import * as AiIcons from "react-icons/ai";

import { Text } from "@mantine/core";

function Icon({ children, type }) {
  const renderChildren = () => {
    switch (type) {
      case "phone":
        return (
          <Text component="a" underline href={`tel:${children}/`}>
            {children}
          </Text>
        );
      case "email":
        return (
          <Text
            component="a"
            underline
            href={`mailto:${children}/`}
            target="_blank"
          >
            {children}
          </Text>
        );
      case "linkedin":
        return (
          <Text
            component="a"
            underline
            href={`https://www.linkedin.com/in/${children}/ `}
            target="_blank"
          >
            {children}
          </Text>
        );
      case "github":
        return (
          <Text
            component="a"
            underline
            href={`https://github.com/${children}`}
            target="_blank"
          >
            {children}
          </Text>
        );
      default:
        return children;
    }
  };

  return (
    <span className="flex gap-1">
      {type === "phone" && <AiIcons.AiOutlineMobile className="h-full" />}
      {type === "email" && <AiIcons.AiOutlineMail className="h-full" />}
      {type === "linkedin" && <AiIcons.AiFillLinkedin className="h-full" />}
      {type === "github" && <AiIcons.AiFillGithub className="h-full" />}
      {renderChildren()}
    </span>
  );
}

export default Icon;
