import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  const words = ["Projects...", "Select The Option Below!"];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingIndex, setTypingIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: number;

    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      if (typingIndex < currentWord.length) {
        timeout = window.setTimeout(() => {
          setDisplayText((prev) => prev + currentWord[typingIndex]);
          setTypingIndex((prev) => prev + 1);
        }, 250); // Typing speed
      } else {
        timeout = window.setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // Pause before deleting
      }
    } else {
      if (typingIndex > 0) {
        timeout = window.setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setTypingIndex((prev) => prev - 1);
        }, 150); // Deleting speed
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingIndex(0);
      }
    }

    return () => window.clearTimeout(timeout);
  }, [typingIndex, isDeleting, currentWordIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-mono text-start text-black"
    >
      {displayText}
      <span className="border-l-2 border-black pl-1 animate-blink" />
    </motion.div>
  );
};

export default TypingAnimation;
