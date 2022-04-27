import React from "react";
import Lottie from "react-lottie";
import * as loader from "./loading.json";

const LoaderAnimation = ({ size = 100 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={size} width={size} />;
};

export { LoaderAnimation };
