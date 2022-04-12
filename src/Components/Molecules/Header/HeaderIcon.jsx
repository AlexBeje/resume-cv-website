// Icons
import * as Icons from "react-icons/ri";

// Mantine Components
import { Text } from "@mantine/core";

function Icon({ children, type }) {
  const renderChildren = () => {
    switch (type) {
      case "phone":
        return (
          <Text
            component="a"
            className={`hover:text-hover`}
            href={`tel:${children}/`}
          >
            {children}
          </Text>
        );
      case "email":
        return (
          <Text
            component="a"
            className={`hover:text-hover`}
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
            className={`hover:text-hover`}
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
            className={`hover:text-hover`}
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
      {type === "phone" && <Icons.RiPhoneFill className="h-full" />}
      {type === "email" && <Icons.RiMailLine className="h-full" />}
      {type === "linkedin" && <Icons.RiLinkedinBoxFill className="h-full" />}
      {type === "github" && <Icons.RiGithubFill className="h-full" />}
      {renderChildren()}
    </span>
  );
}

export default Icon;
