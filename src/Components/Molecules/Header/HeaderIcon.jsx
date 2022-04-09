// Icons
import * as Icons from "react-icons/ai";

// Mantine Components
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
      {type === "phone" && <Icons.AiFillPhone className="h-full" />}
      {type === "email" && <Icons.AiOutlineMail className="h-full" />}
      {type === "linkedin" && <Icons.AiFillLinkedin className="h-full" />}
      {type === "github" && <Icons.AiFillGithub className="h-full" />}
      {renderChildren()}
    </span>
  );
}

export default Icon;
