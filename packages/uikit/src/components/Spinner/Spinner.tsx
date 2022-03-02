import React from "react";
import { SpinnerProps } from ".";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore:
import swapperyLoadingGif from "./swappery-loading_256px.gif";

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <div>
      <img src={swapperyLoadingGif} width={`${size}px`} height={`${size}px`} alt="Loading" />
    </div>
  );
};

export default Spinner;
