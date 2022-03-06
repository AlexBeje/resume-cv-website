import * as AiIcons from "react-icons/ai";
import * as globalClasses from "/src/Uitls/GlobalClasses";

function Icon({ children, type }) {
  const renderChildren = () => {
    switch (type) {
      case "phone":
        return (
          <a className={globalClasses.link} href={`tel:${children}/`}>
            {children}
          </a>
        );
      case "email":
        return (
          <a
            className={globalClasses.link}
            href={`mailto:${children}/`}
            target="_blank"
          >
            {children}
          </a>
        );
      case "linkedin":
        return (
          <a
            className={globalClasses.link}
            href={`https://www.linkedin.com/in/${children}/ `}
            target="_blank"
          >
            {children}
          </a>
        );
      case "github":
        return (
          <a
            className={globalClasses.link}
            href={`https://github.com/${children}`}
            target="_blank"
          >
            {children}
          </a>
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
