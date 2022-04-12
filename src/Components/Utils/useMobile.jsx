// React Hooks
import { useState, useEffect } from "react";

// Mantine Components
import { useMantineTheme } from "@mantine/core";

// Mantine Hooks
import { useViewportSize } from "@mantine/hooks";

function useMobile() {
  const theme = useMantineTheme();
  const { width } = useViewportSize();

  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (width > theme.breakpoints.sm) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return isMobile;
}

export default useMobile;
