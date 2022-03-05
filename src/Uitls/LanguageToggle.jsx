import { Button } from "element-react";

import { changeLanguage } from "../../i18n";

function MyComponent() {
  return (
    <div>
      <Button type="primary" onClick={() => changeLanguage("es")}>
        ES
      </Button>
      <Button type="primary" onClick={() => changeLanguage("en")}>
        EN
      </Button>
    </div>
  );
}

export default MyComponent;
