import { useCallback, useEffect, useRef, useState } from "react";
import { DEMOS, STYLES } from "./demoData";
import { typeText } from "./typingUtils";

type Phase = "typing" | "thinking" | "output";

export const useEmailDemo = () => {
  const [demoIndex, setDemoIndex] = useState(0);
  const [styleIndex, setStyleIndex] = useState(0);
  const [typedInput, setTypedInput] = useState("");
  const [output, setOutput] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  const cancelTyping = useRef<(() => void) | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const demo = DEMOS[demoIndex];
  const style = STYLES[styleIndex];

  const clearAll = () => {
    cancelTyping.current?.();
    cancelTyping.current = null;
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const advance = useCallback(() => {
    setStyleIndex((prev) => {
      const next = (prev + 1) % STYLES.length;
      if (next === 0) {
        setDemoIndex((d) => (d + 1) % DEMOS.length);
      }
      return next;
    });
  }, []);

  // STEP 1 — type input whenever demo/style index changes
  useEffect(() => {
    clearAll();
    setPhase("typing");
    setTypedInput("");
    setOutput("");

    cancelTyping.current = typeText(
      demo.input,
      setTypedInput,
      () => {
        timer.current = setTimeout(() => setPhase("thinking"), 500);
      },
      [12, 28]
    );

    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demoIndex, styleIndex]);

  // STEP 2 — thinking → output typing
  useEffect(() => {
    if (phase !== "thinking") return;

    const delay = 500 + Math.random() * 400;
    timer.current = setTimeout(() => {
      const result = demo.outputs[style];
      setPhase("output");

      cancelTyping.current = typeText(
        result,
        setOutput,
        () => {
          timer.current = setTimeout(advance, 2200);
        },
        [8, 18]
      );
    }, delay);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return { demo, style, styleIndex, typedInput, output, phase };
};
