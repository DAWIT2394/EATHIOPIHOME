import { useState, useEffect } from "react";
import "./gallery.css";

const images = [
  "eat1.jpg",
  "eatt.jpg",
  "all-bg.jpg",
  "all-bg.jpg",
  "all-bg.jpg",
  "all-bg.jpg",
  "all-bg.jpg",
  "all-bg.jpg",
];

export default function Carousel3D() {
  const [angle, setAngle] = useState(0);
  const [translateZ, setTranslateZ] = useState(400);
  const [containerWidth, setContainerWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      // Adjust carousel size and translateZ based on window width
      const newWidth = Math.min(300, window.innerWidth * 0.8);
      const newTranslateZ = Math.min(400, newWidth * 1.3);
      
      setContainerWidth(newWidth);
      setTranslateZ(newTranslateZ);
    };

    // Set initial values
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gallerySpin = (direction) => {
    const newAngle = direction === "left" ? angle - 45 : angle + 45;
    setAngle(newAngle);
  };

  return (
    <div className="carousel-container" style={{ width: `${containerWidth}px` }}>
      <div id="carousel">
        <figure
          id="spinner"
          style={{
            transform: `rotateY(${angle}deg)`,
          }}
        >
          {images.map((img, idx) => (
            <img 
              src={`/images/${img}`} 
              alt="" 
              key={idx}
              style={{
                transform: `rotateY(${idx * 45}deg) translateZ(${translateZ}px)`
              }}
            />
          ))}
        </figure>
      </div>
      <span className="navv left" onClick={() => gallerySpin("left")}>&lt;</span>
      <span className="navv right" onClick={() => gallerySpin("right")}>&gt;</span>
    </div>
  );
}