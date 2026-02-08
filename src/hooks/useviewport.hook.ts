import { useEffect, useState } from "react";

export const useviewport = () => {
  const [viewport, setViewport] = useState({
    height: globalThis.innerHeight,
    width: globalThis.innerWidth,
  });

  useEffect(() => {
    const handleViewportResizeCalculation = () => {
      setViewport({
        height: globalThis.innerHeight,
        width: globalThis.innerWidth,
      });
    };
    globalThis.addEventListener("resize", handleViewportResizeCalculation);

    return () =>
      globalThis.removeEventListener("resize", handleViewportResizeCalculation);
  });

  return viewport;
};
