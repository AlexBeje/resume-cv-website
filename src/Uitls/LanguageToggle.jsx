import { Button } from "element-react";

import { changeLanguage } from "../../i18n";

function MyComponent() {
  return (
    <Button.Group>
      <Button type="primary" size="small" onClick={() => changeLanguage("es")}>
        ES
      </Button>
      <Button type="primary" size="small" onClick={() => changeLanguage("en")}>
        EN
      </Button>
    </Button.Group>
  );
}

export default MyComponent;
