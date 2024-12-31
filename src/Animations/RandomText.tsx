import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Define Japanese characters
const japaneseCharacters =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

interface RandomJapaneseTextProps {
  text: string; // Final text to display
  duration?: number; // Animation duration in seconds
  className?: string; // Optional CSS class
  useScroll?: boolean; // Enable scroll interaction
}

const RandomJapaneseText: React.FC<RandomJapaneseTextProps> = ({
  text,
  className = "",
  duration = 2,
  useScroll = false,
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isVisible, setIsVisible] = useState<boolean>(!useScroll);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false); // Tracks if animation has run
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    let iterations = 0;

    const interval = setInterval(() => {
      if (iterations > duration * 10) {
        clearInterval(interval);
        setDisplayText(text); // Set final text after animation
        setHasAnimated(true); // Mark animation as complete
        return;
      }

      const randomizedText = text
        .split("")
        .map((char) => {
          // If character is a letter, randomize; otherwise, leave as is
          if (/[a-zA-Z0-9]/.test(char)) {
            return Math.random() < 0.5
              ? japaneseCharacters[
                  Math.floor(Math.random() * japaneseCharacters.length)
                ]
              : char;
          }
          return char; // Leave symbols or spaces unchanged
        })
        .join("");

      setDisplayText(randomizedText);
      iterations++;
    }, 100);

    return () => clearInterval(interval);
  }, [text, duration, isVisible, hasAnimated]);

  useEffect(() => {
    if (!useScroll || !elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [useScroll]);

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{ opacity: isVisible ? 1 : 1 }} // Prevent opacity change by setting it always to 1
    >
      {displayText}
    </motion.div>
  );
};

export default RandomJapaneseText;
