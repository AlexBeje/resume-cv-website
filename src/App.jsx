import LanguageToggle from "./Uitls/LanguageToggle";

import { DatePicker } from "element-react";

function App() {
  return (
    <>
      <LanguageToggle />
      <DatePicker
        placeholder="Pick a week"
        format="yyyywWW"
        selectionMode="week"
      />
    </>
  );
}

export default App;
