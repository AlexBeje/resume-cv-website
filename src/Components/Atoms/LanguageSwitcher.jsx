// React Hooks
import { useState, useRef } from "react";

// i18n
import { useTranslation } from "react-i18next";

// Mantine Components
import { useMantineTheme, Box, ActionIcon, Text } from "@mantine/core";

// Mantine Hooks
import { useHotkeys, useClickOutside } from "@mantine/hooks";

// Icons
import * as RiIcons from "react-icons/ri";

function LanguageSwticher() {
  const { i18n } = useTranslation();
  const theme = useMantineTheme();

  const [language, changeLanguage] = useState(i18n.language);
  const [opened, setOpened] = useState(false);

  const refBox = useClickOutside(() => setOpened(false));

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const hoverController = (lang) => {
    if (lang !== language) {
      if (theme.colorScheme === "dark") {
        return "hover:bg-darkBackgroundGray";
      } else {
        return "hover:bg-lightBackgroundGray";
      }
    }
  };

  const selectedController = (lang) => {
    if (lang === language) {
      return "bg-primary";
    } else {
      return "bg-[transparent]";
    }
  };

  const handleTextColor = (lang) => {
    if (lang === language) {
      if (theme.colorScheme === "dark") {
        return theme.black;
      } else {
        return theme.white;
      }
    } else {
      return theme.primaryColor;
    }
  };

  useHotkeys([
    ["mod+K", () => handleChangeLanguage(language === "es" ? "en" : "es")],
  ]);

  return (
    <>
      <ActionIcon
        variant="outline"
        color={theme.primaryColor}
        className="relative"
        onClick={() => setOpened(!opened)}
      >
        <RiIcons.RiEarthLine />
      </ActionIcon>
      {opened && (
        <Box
          component="div"
          ref={refBox}
          className="absolute w-[28px] text-center"
        >
          <div className="h-2 w-[1px] bg-primary m-auto" />
          <div className="border-solid border-[1px] border-primary rounded-[2px]">
            <div
              className={`w-full rounded-tl-[1px] rounded-tr-[1px] cursor-pointer  
              ${hoverController("en")}
              ${selectedController("en")}`}
              onClick={() => handleChangeLanguage("en")}
            >
              <Text size="sm" color={handleTextColor("en")}>EN</Text>
            </div>
            <div
              className={`w-full rounded-bl-[1px] rounded-br-[1px] cursor-pointer 
              ${hoverController("es")}
              ${selectedController("es")}`}
              onClick={() => handleChangeLanguage("es")}
            >
              <Text size="sm" color={handleTextColor("es")}>
                ES
              </Text>
            </div>
          </div>
        </Box>
      )}
    </>
  );
}

export default LanguageSwticher;
