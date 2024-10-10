import React, { useState, useEffect, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";

interface ScrambledTextProps {
  text: string;
  as?: React.ElementType;
}

// Will render as span by default, but will render as the tag specified in the as prop.
export default function ScrambledText({
  text,
  as: Component = "span",
}: ScrambledTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const textRef = useRef<HTMLElement | null>(null); // Ref to observe visibility
  const [iterations, setIterations] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (triggerEffect) {
      interval = setInterval(() => {
        setDisplayedText((prev) =>
          prev
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iterations >= text.length) {
          clearInterval(interval);
        }
        setIterations((prev) => prev + 1 / 3); // Increment iterations
      }, 20);
    }

    return () => clearInterval(interval);
  }, [text, triggerEffect, iterations]);

  // Observer to trigger when entering the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTriggerEffect(true);
            setHasAnimated(true);
            setIterations(0); // Reset iterations when entering viewport
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [hasAnimated]);

  // Handle mouse over
  const handleMouseOver = () => {
    setTriggerEffect(true); // Trigger the effect
    setIterations(0); // Reset iterations to restart the scrambling
  };

  return (
    <Component
      ref={textRef}
      onMouseOver={handleMouseOver}
      style={{ position: "relative", display: "inline-block" }} // Container for absolute positioning
    >
      {/* This element keeps the width stable */}
      <span style={{ visibility: "hidden", pointerEvents: "none" }}>
        {text}
      </span>

      {/* Scrambled text that appears on top */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          whiteSpace: "nowrap", // Keep text in one line
        }}
      >
        {displayedText}
      </span>
    </Component>
  );
}
