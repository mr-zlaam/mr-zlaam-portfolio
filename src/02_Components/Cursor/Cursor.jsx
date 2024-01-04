import { useState, useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let requestId;
    const onMouseMove = (e) => {
      cancelAnimationFrame(requestId); // Cancel any previous animation frame

      const newX = e.clientX;
      const newY = e.clientY;
      const easingFactor = 0.09; // Adjust this value for slower/faster movement

      const updatePosition = () => {
        setPosition((prevPosition) => ({
          x: prevPosition.x + (newX - prevPosition.x) * easingFactor,
          y: prevPosition.y + (newY - prevPosition.y) * easingFactor,
        }));

        requestId = requestAnimationFrame(updatePosition); // Request the next animation frame
      };

      updatePosition(); // Start the animation
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(requestId); // Cancel animation frame when component unmounts
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: position.x, top: position.y }}>
      <div className="dot" />
    </div>
  );
}

export default Cursor;
