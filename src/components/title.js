import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Title = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(-60%,0)" },
    to: { transform: "translate(60%,0)" },
    config: { duration: 17000 },
    reset: true,
    // reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>
        <div className="row">
          <div className="col-10 mx-auto my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold balloon-background">
              {text}
            </h1>
          </div>
        </div>
      </animated.div>
    </div>
      );
  
};

export default Title;
