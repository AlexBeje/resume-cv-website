import { withTranslation } from "react-i18next";
import * as globalClasses from "/src/Uitls/GlobalClasses";

function Name({ t }) {
  return (
    <>
      <h1 className={`${globalClasses.centerMb}`}>
        <span className="font-light">
          {t("header.name")} <strong>{t("header.surname")}</strong>
        </span>
      </h1>
      <code className={`${globalClasses.centerMbSmall} text-primary`}>
        {t("header.profession")}
      </code>
    </>
  );
}

export default withTranslation()(Name);
