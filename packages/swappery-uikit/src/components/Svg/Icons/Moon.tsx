import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="black"
      />
      <path
        d="M10.8 4.29999C11.4 5.19999 11.8 6.19999 11.8 7.39999C11.8 10.2 9.5 12.5 6.7 12.5C6.5 12.5 6.2 12.5 6 12.5C6.9 13.7 8.4 14.6 10.1 14.6C12.9 14.6 15.2 12.3 15.2 9.49999C15.2 6.79999 13.3 4.59999 10.8 4.29999Z"
        fill="#FFF8D4"
      />
    </Svg>
  );
};

export default Icon;
