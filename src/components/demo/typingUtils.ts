type SetState = (updater: (prev: string) => string) => void;

export const typeText = (
  text: string,
  setState: SetState,
  onDone?: () => void,
  speedRange: [number, number] = [10, 25]
) => {
  if (!text) {
    onDone?.();
    return () => {};
  }

  let i = 0;
  let cancelled = false;

  const type = () => {
    if (cancelled) return;
    if (i < text.length) {
      const char = text[i];
      i++;
      setState((prev) => prev + char);
      const delay =
        speedRange[0] + Math.random() * (speedRange[1] - speedRange[0]);
      setTimeout(type, delay);
    } else if (!cancelled) {
      onDone?.();
    }
  };

  type();

  return () => {
    cancelled = true;
  };
};
