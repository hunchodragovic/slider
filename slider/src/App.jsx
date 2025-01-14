import { useRef, useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion"; // Correct import
import { imagesArray } from "./components/images"; // Using the named export
import "./App.css";

const App = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      setWidth(totalWidth); // Set the calculated width as the drag constraint
    }
  }, []);

  return (
    <div>
      <motion.div ref={carouselRef} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={5.2} // Lower elastic value for quicker response
          dragTransition={{
            power: 5.5, // Increase power for faster drag
            timeConstant: 200, // Reduce deceleration time
          }}
          className="inner-carousel"
        >
          {imagesArray.map((img, index) => {
            return (
              <motion.div key={index} className="item">
                <img src={img} alt={`carousel image ${index + 1}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
