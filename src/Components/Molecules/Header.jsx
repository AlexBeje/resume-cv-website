import { withTranslation } from "react-i18next";
import * as globalClasses from "/src/Uitls/GlobalClasses";

import Icon from "/src/Components/Atoms/Icon";

function Header({ t }) {
  const checkIfFieldHasValue = (field) => {
    return !t(`header.${field}`).includes("header.");
  };

  return (
    <>
      <h1 className={`${globalClasses.center} m-0`}>
        <span className="font-light text-4xl">
          {checkIfFieldHasValue("name") && <span>{t("header.name")}</span>}{" "}
          {checkIfFieldHasValue("surnames") && (
            <strong>{t("header.surnames")}</strong>
          )}
        </span>
      </h1>
      {checkIfFieldHasValue("profession") && (
        <code className={`${globalClasses.center} text-xs text-primary my-2`}>
          {t("header.profession")}
        </code>
      )}
      <p className={`${globalClasses.center} text-xs gap-1 flex-wrap m-0`}>
        {checkIfFieldHasValue("phone") && (
          <>
            <Icon type="phone">{t("header.phone")}</Icon>
            <span>|</span>
          </>
        )}
        {checkIfFieldHasValue("email") && (
          <>
            <Icon type="email">{t("header.email")}</Icon>
            <span>|</span>
          </>
        )}
        {checkIfFieldHasValue("linkedin") && (
          <>
            <Icon type="linkedin">{t("header.linkedin")}</Icon>
            <span>|</span>
          </>
        )}
        {checkIfFieldHasValue("github") && (
          <>
            <Icon type="github">{t("header.github")}</Icon>
          </>
        )}
      </p>
    </>
  );
}

export default withTranslation()(Header);
