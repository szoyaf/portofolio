import { useEffect, useState } from "react";

const SHUFFLE_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const getRandomCharacter = () =>
  SHUFFLE_CHARACTERS[Math.floor(Math.random() * SHUFFLE_CHARACTERS.length)];

const buildScrambledText = (target: string, revealCount: number) =>
  target
    .split("")
    .map((character, index) => {
      if (character === " ") {
        return " ";
      }

      if (index < revealCount) {
        return character;
      }

      return getRandomCharacter();
    })
    .join("");

type UseScrambleRevealOptions = {
  stepDuration?: number;
  startDelay?: number;
};

export function useScrambleReveal(
  targetText: string,
  { stepDuration = 50, startDelay = 0 }: UseScrambleRevealOptions = {},
) {
  const [displayText, setDisplayText] = useState(targetText);

  useEffect(() => {
    let revealCount = 0;
    let scrambleTimer: ReturnType<typeof setInterval> | null = null;

    const startTimer = setTimeout(() => {
      setDisplayText(buildScrambledText(targetText, revealCount));

      scrambleTimer = setInterval(() => {
        revealCount += 1;

        if (revealCount >= targetText.length) {
          setDisplayText(targetText);
          if (scrambleTimer) {
            clearInterval(scrambleTimer);
            scrambleTimer = null;
          }
          return;
        }

        setDisplayText(buildScrambledText(targetText, revealCount));
      }, stepDuration);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (scrambleTimer) {
        clearInterval(scrambleTimer);
      }
    };
  }, [startDelay, stepDuration, targetText]);

  return displayText;
}