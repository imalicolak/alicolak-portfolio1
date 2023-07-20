import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

const LiIcon = ({ reference }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-11 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" fill-none stroke-1 stroke-orange-700"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="  stroke-[7px] fill-light"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="10" className="fill-orange-700" />
      </svg>
    </figure>
  );
};

export default LiIcon;
