import { withTranslation } from "react-i18next";
import * as globalClasses from "/src/Uitls/GlobalClasses";

import Icon from "/src/Components/Atoms/Icon";

function Header({ t }) {
  return (
    <>
      <h1 className={`${globalClasses.center} mt-0 mb-2`}>
        <span className="font-light text-4xl">
          {t("header.name")} <strong>{t("header.surname")}</strong>
        </span>
      </h1>
      <code className={`${globalClasses.center} text-xs text-primary`}>
        {t("header.profession")}
      </code>
      <p className={`${globalClasses.center} text-xs gap-1 flex-wrap mb-0`}>
        <Icon type="phone">{t("header.phone")}</Icon>
        <span>|</span>
        <Icon type="email">{t("header.email")}</Icon>
        <span>|</span>
        <Icon type="linkedin">{t("header.linkedin")}</Icon>
        <span>|</span>
        <Icon type="github">{t("header.github")}</Icon>
      </p>
    </>
  );
}

export default withTranslation()(Header);
