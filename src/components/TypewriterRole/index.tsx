import { useEffect, useState } from "react";

const phrases = [
  "Desenvolvedor Front-End",
  "Especialista em React e TypeScript",
  "Transformando ideias em código",
];

export const TypewriterRole = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typingSpeed = 90;
    const deletingSpeed = 45;
    const pauseAfterTyping = 1200;
    const pauseAfterDeleting = 300;

    let timeoutMs = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && displayedText === currentPhrase) {
      timeoutMs = pauseAfterTyping;
    }

    if (isDeleting && displayedText === "") {
      timeoutMs = pauseAfterDeleting;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, timeoutMs);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return <>{displayedText}</>;
};
