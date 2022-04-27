import React from "react";
import Lottie from "react-lottie";
import * as pan from "./pan-flip.json";

const PanFlip = ({ size = 100 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pan,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={size} width={size} />;
};

export { PanFlip };
