import React from "react";

function SectionTitle({ children }) {
  const separateTitle = (title, lastPart) => {
    return lastPart ? title.slice(3) : title.slice(0, 3);
  };

  return (
    <div id="SectionTitle" className="flex mb-4 w-full">
      <h2 className="m-0">
        {separateTitle(children)}{separateTitle(children, true)}
      </h2>
      <div className="bg-black h-[2px] self-end m-[5px] flex-[1_1_100%]"></div>
    </div>
  );
}

export default SectionTitle;
