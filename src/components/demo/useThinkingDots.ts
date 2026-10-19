import { useEffect, useState } from "react";

export const useThinkingDots = (active: boolean) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setDots((previous) => (previous.length >= 3 ? "" : previous + "."));
    }, 400);

    return () => clearInterval(interval);
  }, [active]);

  return active ? dots : "";
};
