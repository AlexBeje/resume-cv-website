// Mantine hooks
import { useMantineTheme } from "@mantine/core";

function SectionTitle({ children }) {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";

  const separateTitle = (title, lastPart) => {
    return lastPart ? title.slice(3) : title.slice(0, 3);
  };

  return (
    <div className="flex mb-4">
      <h2 className="m-0">
        <span className="text-primary">{separateTitle(children)}</span>
        <span>{separateTitle(children, true)}</span>
      </h2>
      <div
        className={`${
          dark ? `bg-primary` : `bg-black`
        } h-[2px] self-end m-[5px] flex-1`}
      />
    </div>
  );
}

export default SectionTitle;
