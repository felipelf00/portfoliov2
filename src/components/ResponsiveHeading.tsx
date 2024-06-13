// import { useEffect, useState, ReactNode } from "react";

// export default function ResponsiveHeading({
//   children,
//   width = "100%",
// }: {
//   children: ReactNode;
//   width?: string;
// }) {
//   const [fontSize, setFontSize] = useState(20);
//   const [aspectRatio, setAspectRatio] = useState<number | null>(null);
//   const [initialMeasured, setInitialMeasured] = useState(false);

//   useEffect(() => {
//     const container = document.getElementById("container");
//     if (!container) return;

//     if (!initialMeasured) {
//       // Measure the width of the container with initial font size and fit-content width
//       container.style.width = "fit-content";
//       const initialWidth = container.offsetWidth;
//       const initialFontSize = 20;
//       const initialAspectRatio = initialFontSize / initialWidth;

//       setAspectRatio(initialAspectRatio);
//       setInitialMeasured(true);

//       // Set the container width to the value passed via props for further measurements
//       container.style.width = width;
//     }

//     const updateFontSize = () => {
//       if (aspectRatio) {
//         const newSize = Math.floor(container.offsetWidth * aspectRatio);
//         setFontSize(newSize);
//       }
//     };

//     updateFontSize(); // Set initial font size based on aspect ratio

//     window.addEventListener("resize", updateFontSize);

//     return () => window.removeEventListener("resize", updateFontSize);
//   }, [aspectRatio, initialMeasured, width]);

//   return (
//     <div id="container">
//       <h1
//         style={{ fontSize: `${fontSize}px` }}
//         className="m-0 font-bold uppercase"
//       >
//         {children}
//       </h1>
//     </div>
//   );
// }

import { useEffect, useState, useRef, ReactNode } from "react";

export default function ResponsiveHeading({
  children,
  width = "100%",
}: {
  children: ReactNode;
  width?: string;
}) {
  const [fontSize, setFontSize] = useState(20);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [initialMeasured, setInitialMeasured] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!initialMeasured) {
      // Measure the width of the container with initial font size and fit-content width
      container.style.width = "fit-content";
      const initialWidth = container.offsetWidth;
      const initialFontSize = 20;
      const initialAspectRatio = initialFontSize / initialWidth;

      setAspectRatio(initialAspectRatio);
      setInitialMeasured(true);

      // Set the container width to the value passed via props for further measurements
      container.style.width = width;
    }

    const updateFontSize = () => {
      if (aspectRatio) {
        const newSize = Math.floor(container.offsetWidth * aspectRatio);
        setFontSize(newSize);
      }
    };

    updateFontSize(); // Set initial font size based on aspect ratio

    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, [aspectRatio, initialMeasured, width]);

  return (
    <div ref={containerRef}>
      <h1
        style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize}px` }}
        className="m-0 font-bold uppercase"
      >
        {children}
      </h1>
    </div>
  );
}
