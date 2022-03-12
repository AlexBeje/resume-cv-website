function SectionTitle({ children }) {
  const separateTitle = (title, lastPart) => {
    return lastPart ? title.slice(3) : title.slice(0, 3);
  };

  return (
    <div id="SectionTitle" className="flex mb-4">
      {!children.includes(".section.title") && (
        <>
          <h2 className="m-0">
            <span className="text-primary">{separateTitle(children)}</span>
            <span>{separateTitle(children, true)}</span>
          </h2>
          <div className="bg-black h-[2px] self-end m-[5px] flex-1" />
        </>
      )}
    </div>
  );
}

export default SectionTitle;
