import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        d="M14.2 26.9C21.4902 26.9 27.4 20.9902 27.4 13.7C27.4 6.40984 21.4902 0.5 14.2 0.5C6.90984 0.5 1 6.40984 1 13.7C1 20.9902 6.90984 26.9 14.2 26.9Z"
        stroke="black"
        strokeMiterlimit="10"
      />
      <path d="M17.2 8.5998V10.0998L11.2 12.3998V10.5998L15.2 9.2998L11.2 7.9998V6.2998L17.2 8.5998Z" fill="black" />
      <path
        d="M11.2 17.6999V16.1999L17.2 13.8999V15.6999L13.2 16.9999L17.2 18.2999V19.9999L11.2 17.6999Z"
        fill="black"
      />
    </Svg>
  );
};

export default Icon;
